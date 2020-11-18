import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: "mgdash-confirm-dialog",
    templateUrl: "./confirm-dialog.component.html",
    styleUrls: ["./confirm-dialog.component.scss"],
})
export class MgdashConfirmDialogComponent {
    public confirmMessage: string;

    /**
     * Constructor
     *
     * @param {MatDialogRef<MgdashConfirmDialogComponent>} dialogRef
     */
    constructor(public dialogRef: MatDialogRef<MgdashConfirmDialogComponent>) {}
}
