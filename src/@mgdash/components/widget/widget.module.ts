import { NgModule } from "@angular/core";

import { MgdashWidgetComponent } from "./widget.component";
import { MgdashWidgetToggleDirective } from "./widget-toggle.directive";

@NgModule({
    declarations: [MgdashWidgetComponent, MgdashWidgetToggleDirective],
    exports: [MgdashWidgetComponent, MgdashWidgetToggleDirective],
})
export class MgdashWidgetModule {}
