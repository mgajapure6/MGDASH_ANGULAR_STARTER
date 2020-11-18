import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatRippleModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";

import { TranslateModule } from "@ngx-translate/core";

import { MgdashNavigationComponent } from "./navigation.component";
import { MgdashNavVerticalItemComponent } from "./vertical/item/item.component";
import { MgdashNavVerticalCollapsableComponent } from "./vertical/collapsable/collapsable.component";
import { MgdashNavVerticalGroupComponent } from "./vertical/group/group.component";
import { MgdashNavHorizontalItemComponent } from "./horizontal/item/item.component";
import { MgdashNavHorizontalCollapsableComponent } from "./horizontal/collapsable/collapsable.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        MatIconModule,
        MatRippleModule,

        TranslateModule.forChild(),
    ],
    exports: [MgdashNavigationComponent],
    declarations: [
        MgdashNavigationComponent,
        MgdashNavVerticalGroupComponent,
        MgdashNavVerticalItemComponent,
        MgdashNavVerticalCollapsableComponent,
        MgdashNavHorizontalItemComponent,
        MgdashNavHorizontalCollapsableComponent,
    ],
})
export class MgdashNavigationModule {}
