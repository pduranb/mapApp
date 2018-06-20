import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-map-edit',
  templateUrl: './map-edit.component.html',
  styleUrls: ['./map-edit.component.css']
})
export class MapEditComponent implements OnInit {

  forma: FormGroup;
  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<MapEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.forma = fb.group({
        'titulo': data.titulo,
        'desc': data.desc
      });
     }

  ngOnInit() {
  }
  guardarCambios() {
    this.dialogRef.close(this.forma.value);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
