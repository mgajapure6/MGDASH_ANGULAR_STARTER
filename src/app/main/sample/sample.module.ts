import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

import { MgdashSharedModule } from "@mgdash/shared.module";

import { SampleComponent } from "./sample.component";

const routes = [
    {
        path: "sample",
        component: SampleComponent,
    },
];

@NgModule({
    declarations: [SampleComponent],
    imports: [
        RouterModule.forChild(routes),
        TranslateModule,
        MgdashSharedModule,
    ],
    exports: [SampleComponent],
})
export class SampleModule {}
