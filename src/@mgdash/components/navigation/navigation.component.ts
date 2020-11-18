import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    ViewEncapsulation,
} from "@angular/core";
import { merge, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { MgdashNavigationService } from "@mgdash/components/navigation/navigation.service";

@Component({
    selector: "mgdash-navigation",
    templateUrl: "./navigation.component.html",
    styleUrls: ["./navigation.component.scss"],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MgdashNavigationComponent implements OnInit {
    @Input()
    layout = "vertical";

    @Input()
    navigation: any;

    // Private
    private _unsubscribeAll: Subject<any>;

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
        // Load the navigation either from the input or from the service
        this.navigation =
            this.navigation ||
            this._mgdashNavigationService.getCurrentNavigation();

        // Subscribe to the current navigation changes
        this._mgdashNavigationService.onNavigationChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                // Load the navigation
                this.navigation = this._mgdashNavigationService.getCurrentNavigation();

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

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
}
