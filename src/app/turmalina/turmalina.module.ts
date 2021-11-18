import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TurmalinaRoutingModule } from './turmalina-routing.module';
import { TurmalinaComponent } from './turmalina.component';
import { MapleafComponent } from './mapleaf/mapleaf.component';

@NgModule({
  declarations: [
    TurmalinaComponent,
    MapleafComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    TurmalinaRoutingModule
  ],
  bootstrap: [TurmalinaComponent],
  providers: []
})
export class TurmalinaModule { }
