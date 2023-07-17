import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteIndexComponent } from './paciente-index/paciente-index.component';
import { PacienteCreateComponent } from './paciente-create/paciente-create.component';
import { PacienteRoutingModule } from 'src-ok-rotas/app/components/paciente/paciente-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PacienteIndexComponent,
    PacienteCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PacienteRoutingModule
  ]
})
export class PacienteModule { }
