import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import { MatSnackBar } from '@angular/material';
import {MatDialog, MatDialogRef} from '@angular/material';
import { MapEditComponent } from './map-edit/map-edit.component';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  marcadores: Marcador[] = [];
  title = 'My first AGM project';
  lat  = 51.678418;
  lng = 7.809007;
  constructor( public snackBar: MatSnackBar, public dialog: MatDialog  ) {
    const memoria =  localStorage.getItem('marcadores');
    if ( memoria ) {
      this.marcadores = JSON.parse( memoria );
    }
   }

  ngOnInit() {
  }
  agregarMarcador( evento ) {
    const coords: { lat: number, lng: number } = evento.coords;
    const marcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(marcador);
    this.guardarStorage();
    this.snackBar.open('Marcador Agregado', 'Cerrar', {duration: 3000});

  }
  editarMarcador(marcador: Marcador) {
    const dialogRef = this.dialog.open(MapEditComponent, {
      width: '250px',
      data: { titulo: marcador.titulo, desc: marcador.desc }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      } else {
        marcador.titulo = result.titulo;
        marcador.desc = result.desc;
        this.guardarStorage();
        this.snackBar.open('Marcador Actualizado', 'Cerrar', {duration: 3000});
      }
    });
  }
  borrarMarcador(idx: number) {
    this.marcadores.splice(idx, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador Eliminado', 'Cerrar', {duration: 3000});

  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }
}
