import { NgModule } from "@angular/core";

import { MgdashSharedModule } from "@mgdash/shared.module";

import { NavbarComponent } from "./../../../layout/components/navbar/navbar.component";
import { NavbarHorizontalStyle1Module } from "./../../../layout/components/navbar/horizontal/style-1/style-1.module";
import { NavbarVerticalStyle1Module } from "./../../../layout/components/navbar/vertical/style-1/style-1.module";
import { NavbarVerticalStyle2Module } from "./../../../layout/components/navbar/vertical/style-2/style-2.module";

@NgModule({
    declarations: [NavbarComponent],
    imports: [
        MgdashSharedModule,

        NavbarHorizontalStyle1Module,
        NavbarVerticalStyle1Module,
        NavbarVerticalStyle2Module,
    ],
    exports: [NavbarComponent],
})
export class NavbarModule {}
