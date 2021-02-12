import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PatientListComponent} from './patientList/patientList.component';
import {PatientUpdateComponent} from './patientUpdate/patientUpdate.component';
import {PationtAddComponent} from './pationtAdd/pationtAdd.component';
import {MatTableModule} from '@angular/material/table';
import {RouterModule} from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    TabsModule.forRoot(),
    MatButtonToggleModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [
    PatientListComponent,
    PatientUpdateComponent,
    PationtAddComponent
  ]
})
export class PatientModule { }
