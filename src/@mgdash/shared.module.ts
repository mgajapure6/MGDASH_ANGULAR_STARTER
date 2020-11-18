import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { FlexLayoutModule } from "@angular/flex-layout";

import { MgdashDirectivesModule } from "@mgdash/directives/directives";
import { MgdashPipesModule } from "@mgdash/pipes/pipes.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        MgdashDirectivesModule,
        MgdashPipesModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        MgdashDirectivesModule,
        MgdashPipesModule,
    ],
})
export class MgdashSharedModule {}
