import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { TranslateModule } from "@ngx-translate/core";

import { MgdashModule } from "./../@mgdash/mgdash.module";
import { MgdashSharedModule } from "./../@mgdash/shared.module";
import {
    MgdashProgressBarModule,
    MgdashSidebarModule,
    MgdashThemeOptionsModule,
} from "./../@mgdash/components";

import { mgdashConfig } from "./mgdash-config";

import { AppComponent } from "./app.component";
import { LayoutModule } from "./layout/layout.module";
import { SampleModule } from "./main/sample/sample.module";

const appRoutes: Routes = [
    {
        path: "**",
        redirectTo: "sample",
    },
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Mgdash modules
        MgdashModule.forRoot(mgdashConfig),
        MgdashProgressBarModule,
        MgdashSharedModule,
        MgdashSidebarModule,
        MgdashThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
