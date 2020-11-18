import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";

import { MgdashProgressBarComponent } from "./progress-bar.component";

@NgModule({
    declarations: [MgdashProgressBarComponent],
    imports: [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule,
        MatProgressBarModule,
    ],
    exports: [MgdashProgressBarComponent],
})
export class MgdashProgressBarModule {}
