import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { MgdashNavigationService } from "./../../../../../../@mgdash/components/navigation/navigation.service";
import { MgdashSidebarService } from "./../../../../../../@mgdash/components/sidebar/sidebar.service";
import { MgdashConfigService } from "./../../../../../../@mgdash/services/config.service";
import { Subject } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";

@Component({
    selector: "navbar-horizontal-style-1",
    templateUrl: "./style-1.component.html",
    styleUrls: ["./style-1.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class NavbarHorizontalStyle1Component implements OnInit, OnDestroy {
    mgdashConfig: any;
    navigation: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {MgdashConfigService} _mgdashConfigService
     * @param {MgdashNavigationService} _mgdashNavigationService
     * @param {MgdashSidebarService} _mgdashSidebarService
     */
    constructor(
        private _mgdashConfigService: MgdashConfigService,
        private _mgdashNavigationService: MgdashNavigationService,
        private _mgdashSidebarService: MgdashSidebarService
    ) {
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
        // Get current navigation
        this._mgdashNavigationService.onNavigationChanged
            .pipe(
                filter((value) => value !== null),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this.navigation = this._mgdashNavigationService.getCurrentNavigation();
            });

        // Subscribe to the config changes
        this._mgdashConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.mgdashConfig = config;
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
