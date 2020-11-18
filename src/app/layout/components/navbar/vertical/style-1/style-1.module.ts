import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { MgdashNavigationModule } from "./../../../../../../@mgdash/components";
import { MgdashSharedModule } from "./../../../../../../@mgdash/shared.module";

import { NavbarVerticalStyle1Component } from "./../../../../../layout/components/navbar/vertical/style-1/style-1.component";

@NgModule({
    declarations: [NavbarVerticalStyle1Component],
    imports: [
        MatButtonModule,
        MatIconModule,

        MgdashSharedModule,
        MgdashNavigationModule,
    ],
    exports: [NavbarVerticalStyle1Component],
})
export class NavbarVerticalStyle1Module {}
