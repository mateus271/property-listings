import { Injectable } from "@angular/core";
import { SavedPropertiesModalComponent } from "../modals/saved-properties-modal/saved-properties-modal.component";
import { MatDialog } from "@angular/material/dialog";

@Injectable({
    providedIn: 'root'
})

export class ModalService {
    constructor(public dialog: MatDialog) {}

    public async showSavedPropertiesModal(): Promise<void> {
        this.dialog.open(SavedPropertiesModalComponent, {
            panelClass: 'saved-properties-modal',
        });
    }
}