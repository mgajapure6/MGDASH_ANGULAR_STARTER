import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: "[mgdashWidgetToggle]",
})
export class MgdashWidgetToggleDirective {
    /**
     * Constructor
     *
     * @param {ElementRef} elementRef
     */
    constructor(public elementRef: ElementRef) {}
}
