import {
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { MgdashNavigationService } from "./../../../../../../@mgdash/components/navigation/navigation.service";
import { MgdashSidebarService } from "./../../../../../../@mgdash/components/sidebar/sidebar.service";
import { MgdashPerfectScrollbarDirective } from "./../../../../../../@mgdash/directives/mgdash-perfect-scrollbar/mgdash-perfect-scrollbar.directive";
import { MgdashConfigService } from "./../../../../../../@mgdash/services/config.service";
import { Subject } from "rxjs";
import { delay, filter, take, takeUntil } from "rxjs/operators";

@Component({
    selector: "navbar-vertical-style-1",
    templateUrl: "./style-1.component.html",
    styleUrls: ["./style-1.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class NavbarVerticalStyle1Component implements OnInit, OnDestroy {
    mgdashConfig: any;
    navigation: any;

    // Private
    private _mgdashPerfectScrollbar: MgdashPerfectScrollbarDirective;
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {MgdashConfigService} _mgdashConfigService
     * @param {MgdashNavigationService} _mgdashNavigationService
     * @param {MgdashSidebarService} _mgdashSidebarService
     * @param {Router} _router
     */
    constructor(
        private _mgdashConfigService: MgdashConfigService,
        private _mgdashNavigationService: MgdashNavigationService,
        private _mgdashSidebarService: MgdashSidebarService,
        private _router: Router
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    // Directive
    @ViewChild(MgdashPerfectScrollbarDirective, { static: true })
    set directive(theDirective: MgdashPerfectScrollbarDirective) {
        if (!theDirective) {
            return;
        }

        this._mgdashPerfectScrollbar = theDirective;

        // Update the scrollbar on collapsable item toggle
        this._mgdashNavigationService.onItemCollapseToggled
            .pipe(delay(500), takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this._mgdashPerfectScrollbar.update();
            });

        // Scroll to the active item position
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                take(1)
            )
            .subscribe(() => {
                setTimeout(() => {
                    this._mgdashPerfectScrollbar.scrollToElement(
                        "navbar .nav-link.active",
                        -120
                    );
                });
            });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                if (this._mgdashSidebarService.getSidebar("navbar")) {
                    this._mgdashSidebarService.getSidebar("navbar").close();
                }
            });

        // Subscribe to the config changes
        this._mgdashConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.mgdashConfig = config;
            });

        // Get current navigation
        this._mgdashNavigationService.onNavigationChanged
            .pipe(
                filter((value) => value !== null),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this.navigation = this._mgdashNavigationService.getCurrentNavigation();
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar opened status
     */
    toggleSidebarOpened(): void {
        this._mgdashSidebarService.getSidebar("navbar").toggleOpen();
    }

    /**
     * Toggle sidebar folded status
     */
    toggleSidebarFolded(): void {
        this._mgdashSidebarService.getSidebar("navbar").toggleFold();
    }
}
