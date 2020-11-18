import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";

import { MgdashDemoContentComponent } from "./demo-content/demo-content.component";
import { MgdashDemoSidebarComponent } from "./demo-sidebar/demo-sidebar.component";

@NgModule({
    declarations: [MgdashDemoContentComponent, MgdashDemoSidebarComponent],
    imports: [RouterModule, MatDividerModule, MatListModule],
    exports: [MgdashDemoContentComponent, MgdashDemoSidebarComponent],
})
export class MgdashDemoModule {}
