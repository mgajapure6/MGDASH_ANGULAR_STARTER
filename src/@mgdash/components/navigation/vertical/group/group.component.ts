import {
    ChangeDetectorRef,
    Component,
    HostBinding,
    Input,
    OnDestroy,
    OnInit,
} from "@angular/core";
import { merge, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { MgdashNavigationItem } from "@mgdash/types";
import { MgdashNavigationService } from "@mgdash/components/navigation/navigation.service";

@Component({
    selector: "mgdash-nav-vertical-group",
    templateUrl: "./group.component.html",
    styleUrls: ["./group.component.scss"],
})
export class MgdashNavVerticalGroupComponent implements OnInit, OnDestroy {
    @HostBinding("class")
    classes = "nav-group nav-item";

    @Input()
    item: MgdashNavigationItem;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     */

    /**
     *
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {MgdashNavigationService} _mgdashNavigationService
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _mgdashNavigationService: MgdashNavigationService
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
        // Subscribe to navigation item
        merge(
            this._mgdashNavigationService.onNavigationItemAdded,
            this._mgdashNavigationService.onNavigationItemUpdated,
            this._mgdashNavigationService.onNavigationItemRemoved
        )
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                // Mark for check
                this._changeDetectorRef.markForCheck();
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
