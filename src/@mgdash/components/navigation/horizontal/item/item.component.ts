import { Component, HostBinding, Input } from "@angular/core";

@Component({
    selector: "mgdash-nav-horizontal-item",
    templateUrl: "./item.component.html",
    styleUrls: ["./item.component.scss"],
})
export class MgdashNavHorizontalItemComponent {
    @HostBinding("class")
    classes = "nav-item";

    @Input()
    item: any;

    /**
     * Constructor
     */
    constructor() {}
}
