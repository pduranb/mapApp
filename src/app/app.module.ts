import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MapsComponent } from './components/maps/maps.component';

// Angular map
import { AgmCoreModule } from '@agm/core';
import { MapEditComponent } from './components/maps/map-edit/map-edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  entryComponents: [
    MapEditComponent
  ],
  declarations: [
    AppComponent,
    MapsComponent,
    MapEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDoRwwx9tekKYcfgnlZAMNrSDPDekQSLl8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
