import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";

import {
    MgdashSidebarModule,
    MgdashThemeOptionsModule,
} from "./../../../../@mgdash/components";
import { MgdashSharedModule } from "./../../../../@mgdash/shared.module";

import { ContentModule } from "./../../../layout/components/content/content.module";
import { FooterModule } from "./../../../layout/components/footer/footer.module";
import { NavbarModule } from "./../../../layout/components/navbar/navbar.module";
import { QuickPanelModule } from "./../../../layout/components/quick-panel/quick-panel.module";
import { ToolbarModule } from "./../../../layout/components/toolbar/toolbar.module";

import { HorizontalLayout1Component } from "./../../../layout/horizontal/layout-1/layout-1.component";

@NgModule({
    declarations: [HorizontalLayout1Component],
    imports: [
        MatSidenavModule,

        MgdashSharedModule,
        MgdashSidebarModule,
        MgdashThemeOptionsModule,

        ContentModule,
        FooterModule,
        NavbarModule,
        QuickPanelModule,
        ToolbarModule,
    ],
    exports: [HorizontalLayout1Component],
})
export class HorizontalLayout1Module {}
