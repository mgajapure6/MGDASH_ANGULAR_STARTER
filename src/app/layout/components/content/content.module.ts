import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { MgdashSharedModule } from "./../../../../@mgdash/shared.module";

import { ContentComponent } from "./../../../layout/components/content/content.component";

@NgModule({
    declarations: [ContentComponent],
    imports: [RouterModule, MgdashSharedModule],
    exports: [ContentComponent],
})
export class ContentModule {}
