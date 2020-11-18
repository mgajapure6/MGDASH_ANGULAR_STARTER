import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { MgdashSidebarModule } from "./../../../../@mgdash/components/index";
import { MgdashSharedModule } from "./../../../../@mgdash/shared.module";

import { ContentModule } from "./../../../layout/components/content/content.module";
import { FooterModule } from "./../../../layout/components/footer/footer.module";
import { NavbarModule } from "./../../../layout/components/navbar/navbar.module";
import { QuickPanelModule } from "./../../../layout/components/quick-panel/quick-panel.module";
import { ToolbarModule } from "./../../../layout/components/toolbar/toolbar.module";

import { VerticalLayout3Component } from "./../../../layout/vertical/layout-3/layout-3.component";

@NgModule({
    declarations: [VerticalLayout3Component],
    imports: [
        RouterModule,

        MgdashSharedModule,
        MgdashSidebarModule,

        ContentModule,
        FooterModule,
        NavbarModule,
        QuickPanelModule,
        ToolbarModule,
    ],
    exports: [VerticalLayout3Component],
})
export class VerticalLayout3Module {}
