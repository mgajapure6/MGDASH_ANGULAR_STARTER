import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { MgdashNavigationModule } from "./../../../../../../@mgdash/components";
import { MgdashSharedModule } from "./../../../../../../@mgdash/shared.module";

import { NavbarHorizontalStyle1Component } from "./../../../../../layout/components/navbar/horizontal/style-1/style-1.component";

@NgModule({
    declarations: [NavbarHorizontalStyle1Component],
    imports: [
        MatButtonModule,
        MatIconModule,

        MgdashSharedModule,
        MgdashNavigationModule,
    ],
    exports: [NavbarHorizontalStyle1Component],
})
export class NavbarHorizontalStyle1Module {}
