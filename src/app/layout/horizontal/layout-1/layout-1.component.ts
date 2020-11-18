import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { MgdashConfigService } from "./../../../../@mgdash/services/config.service";
import { navigation } from "./../../../navigation/navigation";

@Component({
    selector: "horizontal-layout-1",
    templateUrl: "./layout-1.component.html",
    styleUrls: ["./layout-1.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class HorizontalLayout1Component implements OnInit, OnDestroy {
    mgdashConfig: any;
    navigation: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {MgdashConfigService} _mgdashConfigService
     */
    constructor(private _mgdashConfigService: MgdashConfigService) {
        // Set the defaults
        this.navigation = navigation;

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
        // Subscribe to config changes
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
