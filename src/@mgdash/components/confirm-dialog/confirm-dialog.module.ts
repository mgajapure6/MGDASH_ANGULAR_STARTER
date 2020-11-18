import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

import { MgdashConfirmDialogComponent } from "@mgdash/components/confirm-dialog/confirm-dialog.component";

@NgModule({
    declarations: [MgdashConfirmDialogComponent],
    imports: [MatDialogModule, MatButtonModule],
    entryComponents: [MgdashConfirmDialogComponent],
})
export class MgdashConfirmDialogModule {}
