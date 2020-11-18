import {
    Directive,
    Input,
    OnInit,
    HostListener,
    OnDestroy,
    HostBinding,
} from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { MediaObserver } from "@angular/flex-layout";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { MgdashMatchMediaService } from "@mgdash/services/match-media.service";
import { MgdashMatSidenavHelperService } from "@mgdash/directives/mgdash-mat-sidenav/mgdash-mat-sidenav.service";

@Directive({
    selector: "[mgdashMatSidenavHelper]",
})
export class MgdashMatSidenavHelperDirective implements OnInit, OnDestroy {
    @HostBinding("class.mat-is-locked-open")
    isLockedOpen: boolean;

    @Input()
    mgdashMatSidenavHelper: string;

    @Input()
    matIsLockedOpen: string;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {MgdashMatchMediaService} _mgdashMatchMediaService
     * @param {MgdashMatSidenavHelperService} _mgdashMatSidenavHelperService
     * @param {MatSidenav} _matSidenav
     * @param {MediaObserver} _mediaObserver
     */
    constructor(
        private _mgdashMatchMediaService: MgdashMatchMediaService,
        private _mgdashMatSidenavHelperService: MgdashMatSidenavHelperService,
        private _matSidenav: MatSidenav,
        private _mediaObserver: MediaObserver
    ) {
        // Set the defaults
        this.isLockedOpen = true;

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Register the sidenav to the service
        this._mgdashMatSidenavHelperService.setSidenav(
            this.mgdashMatSidenavHelper,
            this._matSidenav
        );

        if (
            this.matIsLockedOpen &&
            this._mediaObserver.isActive(this.matIsLockedOpen)
        ) {
            this.isLockedOpen = true;
            this._matSidenav.mode = "side";
            this._matSidenav.toggle(true);
        } else {
            this.isLockedOpen = false;
            this._matSidenav.mode = "over";
            this._matSidenav.toggle(false);
        }

        this._mgdashMatchMediaService.onMediaChange
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                if (
                    this.matIsLockedOpen &&
                    this._mediaObserver.isActive(this.matIsLockedOpen)
                ) {
                    this.isLockedOpen = true;
                    this._matSidenav.mode = "side";
                    this._matSidenav.toggle(true);
                } else {
                    this.isLockedOpen = false;
                    this._matSidenav.mode = "over";
                    this._matSidenav.toggle(false);
                }
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}

@Directive({
    selector: "[mgdashMatSidenavToggler]",
})
export class MgdashMatSidenavTogglerDirective {
    @Input()
    mgdashMatSidenavToggler: string;

    /**
     * Constructor
     *
     * @param {MgdashMatSidenavHelperService} _mgdashMatSidenavHelperService
     */
    constructor(
        private _mgdashMatSidenavHelperService: MgdashMatSidenavHelperService
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On click
     */
    @HostListener("click")
    onClick(): void {
        this._mgdashMatSidenavHelperService
            .getSidenav(this.mgdashMatSidenavToggler)
            .toggle();
    }
}
