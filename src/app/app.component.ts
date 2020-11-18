import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Platform } from "@angular/cdk/platform";
import { TranslateService } from "@ngx-translate/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { MgdashConfigService } from "./../@mgdash/services/config.service";
import { MgdashNavigationService } from "./../@mgdash/components/navigation/navigation.service";
import { MgdashSidebarService } from "./../@mgdash/components/sidebar/sidebar.service";
import { MgdashSplashScreenService } from "./../@mgdash/services/splash-screen.service";
import { MgdashTranslationLoaderService } from "./../@mgdash/services/translation-loader.service";

import { navigation } from "./navigation/navigation";
import { locale as navigationEnglish } from "./navigation/i18n/en";
import { locale as navigationTurkish } from "./navigation/i18n/tr";

@Component({
    selector: "app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
    mgdashConfig: any;
    navigation: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {DOCUMENT} document
     * @param {MgdashConfigService} _mgdashConfigService
     * @param {MgdashNavigationService} _mgdashNavigationService
     * @param {MgdashSidebarService} _mgdashSidebarService
     * @param {MgdashSplashScreenService} _mgdashSplashScreenService
     * @param {MgdashTranslationLoaderService} _mgdashTranslationLoaderService
     * @param {Platform} _platform
     * @param {TranslateService} _translateService
     */
    constructor(
        @Inject(DOCUMENT) private document: any,
        private _mgdashConfigService: MgdashConfigService,
        private _mgdashNavigationService: MgdashNavigationService,
        private _mgdashSidebarService: MgdashSidebarService,
        private _mgdashSplashScreenService: MgdashSplashScreenService,
        private _mgdashTranslationLoaderService: MgdashTranslationLoaderService,
        private _translateService: TranslateService,
        private _platform: Platform
    ) {
        // Get default navigation
        this.navigation = navigation;

        // Register the navigation to the service
        this._mgdashNavigationService.register("main", this.navigation);

        // Set the main navigation as our current navigation
        this._mgdashNavigationService.setCurrentNavigation("main");

        // Add languages
        this._translateService.addLangs(["en", "tr"]);

        // Set the default language
        this._translateService.setDefaultLang("en");

        // Set the navigation translations
        this._mgdashTranslationLoaderService.loadTranslations(
            navigationEnglish,
            navigationTurkish
        );

        // Use a language
        this._translateService.use("en");

        /**
         * ----------------------------------------------------------------------------------------------------
         * ngxTranslate Fix Start
         * ----------------------------------------------------------------------------------------------------
         */

        /**
         * If you are using a language other than the default one, i.e. Turkish in this case,
         * you may encounter an issue where some of the components are not actually being
         * translated when your app first initialized.
         *
         * This is related to ngxTranslate module and below there is a temporary fix while we
         * are moving the multi language implementation over to the Angular's core language
         * service.
         */

        // Set the default language to 'en' and then back to 'tr'.
        // '.use' cannot be used here as ngxTranslate won't switch to a language that's already
        // been selected and there is no way to force it, so we overcome the issue by switching
        // the default language back and forth.
        /**
         * setTimeout(() => {
         * this._translateService.setDefaultLang('en');
         * this._translateService.setDefaultLang('tr');
         * });
         */

        /**
         * ----------------------------------------------------------------------------------------------------
         * ngxTranslate Fix End
         * ----------------------------------------------------------------------------------------------------
         */

        // Add is-mobile class to the body if the platform is mobile
        if (this._platform.ANDROID || this._platform.IOS) {
            this.document.body.classList.add("is-mobile");
        }

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

                // Boxed
                if (this.mgdashConfig.layout.width === "boxed") {
                    this.document.body.classList.add("boxed");
                } else {
                    this.document.body.classList.remove("boxed");
                }

                // Color theme - Use normal for loop for IE11 compatibility
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < this.document.body.classList.length; i++) {
                    const className = this.document.body.classList[i];

                    if (className.startsWith("theme-")) {
                        this.document.body.classList.remove(className);
                    }
                }

                this.document.body.classList.add(this.mgdashConfig.colorTheme);
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
     * Toggle sidebar open
     *
     * @param key
     */
    toggleSidebarOpen(key): void {
        this._mgdashSidebarService.getSidebar(key).toggleOpen();
    }
}
