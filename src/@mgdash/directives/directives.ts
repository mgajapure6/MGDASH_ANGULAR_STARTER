import { NgModule } from "@angular/core";

import { MgdashIfOnDomDirective } from "@mgdash/directives/mgdash-if-on-dom/mgdash-if-on-dom.directive";
import { MgdashInnerScrollDirective } from "@mgdash/directives/mgdash-inner-scroll/mgdash-inner-scroll.directive";
import { MgdashPerfectScrollbarDirective } from "@mgdash/directives/mgdash-perfect-scrollbar/mgdash-perfect-scrollbar.directive";
import {
    MgdashMatSidenavHelperDirective,
    MgdashMatSidenavTogglerDirective,
} from "@mgdash/directives/mgdash-mat-sidenav/mgdash-mat-sidenav.directive";

@NgModule({
    declarations: [
        MgdashIfOnDomDirective,
        MgdashInnerScrollDirective,
        MgdashMatSidenavHelperDirective,
        MgdashMatSidenavTogglerDirective,
        MgdashPerfectScrollbarDirective,
    ],
    imports: [],
    exports: [
        MgdashIfOnDomDirective,
        MgdashInnerScrollDirective,
        MgdashMatSidenavHelperDirective,
        MgdashMatSidenavTogglerDirective,
        MgdashPerfectScrollbarDirective,
    ],
})
export class MgdashDirectivesModule {}
