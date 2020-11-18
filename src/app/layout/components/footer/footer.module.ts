import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";

import { MgdashSharedModule } from "./../../../../@mgdash/shared.module";

import { FooterComponent } from "./../../../layout/components/footer/footer.component";

@NgModule({
    declarations: [FooterComponent],
    imports: [
        RouterModule,

        MatButtonModule,
        MatIconModule,
        MatToolbarModule,

        MgdashSharedModule,
    ],
    exports: [FooterComponent],
})
export class FooterModule {}
