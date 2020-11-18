import { NgModule } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

import { MgdashSharedModule } from "./../../../../@mgdash/shared.module";

import { QuickPanelComponent } from "./../../../layout/components/quick-panel/quick-panel.component";

@NgModule({
    declarations: [QuickPanelComponent],
    imports: [
        MatDividerModule,
        MatListModule,
        MatSlideToggleModule,

        MgdashSharedModule,
    ],
    exports: [QuickPanelComponent],
})
export class QuickPanelModule {}
