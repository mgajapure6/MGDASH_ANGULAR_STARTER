import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatTooltipModule } from "@angular/material/tooltip";

import { MgdashPipesModule } from "@mgdash/pipes/pipes.module";

import { MgdashMaterialColorPickerComponent } from "@mgdash/components/material-color-picker/material-color-picker.component";

@NgModule({
    declarations: [MgdashMaterialColorPickerComponent],
    imports: [
        CommonModule,

        FlexLayoutModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,

        MgdashPipesModule,
    ],
    exports: [MgdashMaterialColorPickerComponent],
})
export class MgdashMaterialColorPickerModule {}
