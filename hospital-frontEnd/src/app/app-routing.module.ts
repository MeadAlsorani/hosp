import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PationtAddComponent } from './patient-control/pationtAdd/pationtAdd.component';
import { PatientUpdateComponent } from './patient-control/patientUpdate/patientUpdate.component';
import { PatientListComponent } from './patient-control/patientList/patientList.component';


const appRoutes:Routes=[
  {path:'add-patient',component:PationtAddComponent},
  {
    path:'update-patient/:id',component:PatientUpdateComponent
  },
  {
    path:'patient-list',component:PatientListComponent
  },
  {
    path:'',redirectTo:'/patient-list'
  },
  {path:'**',redirectTo:'/patient-list'}
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
