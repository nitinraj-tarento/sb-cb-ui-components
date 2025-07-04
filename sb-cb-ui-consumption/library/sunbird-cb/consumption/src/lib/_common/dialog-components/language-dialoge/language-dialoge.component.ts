import { Component, Inject } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

@Component({
  selector: 'sb-uic-language-dialoge',
  templateUrl: './language-dialoge.component.html',
  styleUrls: ['./language-dialoge.component.scss']
})
export class LanguageDialogeComponent {
  constructor(
    public dialogRef: MatDialogRef<LanguageDialogeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
}
