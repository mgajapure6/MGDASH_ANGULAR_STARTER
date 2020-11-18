import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { MgdashNavigationModule } from "./../../../../../../@mgdash/components";
import { MgdashSharedModule } from "./../../../../../../@mgdash/shared.module";

import { NavbarVerticalStyle2Component } from "./../../../../../layout/components/navbar/vertical/style-2/style-2.component";

@NgModule({
    declarations: [NavbarVerticalStyle2Component],
    imports: [
        MatButtonModule,
        MatIconModule,

        MgdashSharedModule,
        MgdashNavigationModule,
    ],
    exports: [NavbarVerticalStyle2Component],
})
export class NavbarVerticalStyle2Module {}
