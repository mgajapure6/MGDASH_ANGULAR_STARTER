import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";

import {
    MgdashSearchBarModule,
    MgdashShortcutsModule,
} from "./../../../../@mgdash/components";
import { MgdashSharedModule } from "./../../../../@mgdash/shared.module";

import { ToolbarComponent } from "./../../../layout/components/toolbar/toolbar.component";

@NgModule({
    declarations: [ToolbarComponent],
    imports: [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,

        MgdashSharedModule,
        MgdashSearchBarModule,
        MgdashShortcutsModule,
    ],
    exports: [ToolbarComponent],
})
export class ToolbarModule {}
