import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { MgdashSearchBarComponent } from "./search-bar.component";

@NgModule({
    declarations: [MgdashSearchBarComponent],
    imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
    exports: [MgdashSearchBarComponent],
})
export class MgdashSearchBarModule {}
