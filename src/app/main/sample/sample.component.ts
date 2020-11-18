import { Component } from "@angular/core";

import { MgdashTranslationLoaderService } from "./../../../@mgdash/services/translation-loader.service";

import { locale as english } from "./i18n/en";
import { locale as turkish } from "./i18n/tr";

@Component({
    selector: "sample",
    templateUrl: "./sample.component.html",
    styleUrls: ["./sample.component.scss"],
})
export class SampleComponent {
    /**
     * Constructor
     *
     * @param {MgdashTranslationLoaderService} _mgdashTranslationLoaderService
     */
    constructor(
        private _mgdashTranslationLoaderService: MgdashTranslationLoaderService
    ) {
        this._mgdashTranslationLoaderService.loadTranslations(english, turkish);
    }
}
