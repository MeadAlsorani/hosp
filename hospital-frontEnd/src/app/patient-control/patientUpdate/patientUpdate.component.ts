import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {TabsetComponent} from 'ngx-bootstrap/tabs'
import { PatientService } from '../../services/patient.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Patient } from '../../Interfaces/patient';
@Component({
  selector: 'app-patientUpdate',
  templateUrl: './patientUpdate.component.html',
  styleUrls: ['./patientUpdate.component.css']
})
export class PatientUpdateComponent implements OnInit {
  EditForm: FormGroup;
  patientId;
  @ViewChild('FormTabs') FormTabs: TabsetComponent;
  patient:Patient;
  constructor(
    private formBuilder: FormBuilder,
    private patientService:PatientService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.patientId=this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.patientId).subscribe(
      data=>{
        this.patient=data;
      }
    )
    this.initializeForm();
  }

  initializeForm() {
    this.EditForm = this.formBuilder.group({
      name: new FormControl(null, Validators.required),
      fileNo: new FormControl(null, Validators.required),
      citizenId: new FormControl(null, Validators.required),
      birthDate: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      nationality: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      street: new FormControl(null, Validators.required),
      address1: new FormControl(null, Validators.required),
      address2: new FormControl(null),
      contactPerson: new FormControl(null, Validators.required),
      contactRelation: new FormControl(null, Validators.required),
      contactPhone: new FormControl(null, Validators.required),
      firstVisitDate: new FormControl(null,Validators.required),
    });
  }

  setFormValues(){
    this.name.setValue(this.patient.name);
    this.fileNo.setValue(this.patient.fileNo);
    this.citizenId.setValue(this.patient.citizenId);
    this.birthDate.setValue(this.patient.birthDate);
    this.gender.setValue(this.patient.gender);
    this.nationality.setValue(this.patient.nationality);
    this.phoneNumber.setValue(this.patient.phoneNumber);
    this.email.setValue(this.patient.email);
    this.country.setValue(this.patient.country);
    this.city.setValue(this.patient.city);
    this.street.setValue(this.patient.street);
    this.address1.setValue(this.patient.address1);
    this.address2.setValue(this.patient.address2);
    this.firstVisitDate.setValue(this.patient.firstVisitDate);
  }


  EditPatient(data){
    this.patientService.updatePatient(data,this.patientId).subscribe(
      ()=>{
        this.router.navigate(['/patient-list']);
        alert('the patient Edited');
      },
      error=>{
        console.log(error);
        alert("some error happend");

      }
    )
  }




  //#region  getters
  get name(){
    return this.EditForm.get('name') as FormControl;
  }
  get fileNo(){
    return this.EditForm.get('fileNo') as FormControl;
  }
  get citizenId(){
    return this.EditForm.get('citizenId') as FormControl;
  }
  get birthDate(){
    return this.EditForm.get('birthDate') as FormControl;
  }
  get gender(){
    return this.EditForm.get('gender') as FormControl;
  }
  get nationality(){
    return this.EditForm.get('nationality') as FormControl;
  }
  get phoneNumber(){
    return this.EditForm.get('phoneNumber') as FormControl;
  }
  get email(){
    return this.EditForm.get('email') as FormControl;
  }
  get country(){
    return this.EditForm.get('country') as FormControl;
  }
  get city(){
    return this.EditForm.get('city') as FormControl;
  }
  get street(){
    return this.EditForm.get('street') as FormControl;
  }
  get address1(){
    return this.EditForm.get('address1') as FormControl;
  }
  get address2(){
    return this.EditForm.get('address2') as FormControl;
  }
  get contactPerson(){
    return this.EditForm.get('contactPerson') as FormControl;
  }
  get contactRelation(){
    return this.EditForm.get('contactRelation') as FormControl;
  }
  get contactPhone(){
    return this.EditForm.get('contactPhone') as FormControl;
  }
  get firstVisitDate(){
    return this.EditForm.get('firstVisitDate') as FormControl;
  }

  //#endregion

}
