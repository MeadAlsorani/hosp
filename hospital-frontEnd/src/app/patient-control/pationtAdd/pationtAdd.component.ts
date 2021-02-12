import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import {TabsetComponent} from 'ngx-bootstrap/tabs'
import {PatientService} from '../../services/patient.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-pationtAdd',
  templateUrl: './pationtAdd.component.html',
  styleUrls: ['./pationtAdd.component.css'],
})
export class PationtAddComponent implements OnInit {
  AddForm: FormGroup;
  todayDate = Date.now();
  @ViewChild('FormTabs') FormTabs: TabsetComponent;
  constructor(
    private formBuilder: FormBuilder,
    private patientService:PatientService,
    private router:Router
    ) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.AddForm = this.formBuilder.group({
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

  AddNewPatient(data){
    this.patientService.addPatient(data).subscribe(
      pat=>{
        this.router.navigate(['/patient-list']);
        alert("patient Added");
      },
      error=>{
        alert("some error happend");
        console.log(error);

      }
    )
  }

  selectTab(tabId: number) {
    this.FormTabs.tabs[tabId].active = true;
  }

  //#region  getters
  get name(){
    return this.AddForm.get('name') as FormControl;
  }
  get fileNo(){
    return this.AddForm.get('fileNo') as FormControl;
  }
  get citizenId(){
    return this.AddForm.get('citizenId') as FormControl;
  }
  get birthDate(){
    return this.AddForm.get('birthDate') as FormControl;
  }
  get gender(){
    return this.AddForm.get('gender') as FormControl;
  }
  get nationality(){
    return this.AddForm.get('nationality') as FormControl;
  }
  get phoneNumber(){
    return this.AddForm.get('phoneNumber') as FormControl;
  }
  get email(){
    return this.AddForm.get('email') as FormControl;
  }
  get country(){
    return this.AddForm.get('country') as FormControl;
  }
  get city(){
    return this.AddForm.get('city') as FormControl;
  }
  get street(){
    return this.AddForm.get('street') as FormControl;
  }
  get address1(){
    return this.AddForm.get('address1') as FormControl;
  }
  get address2(){
    return this.AddForm.get('address2') as FormControl;
  }
  get contactPerson(){
    return this.AddForm.get('contactPerson') as FormControl;
  }
  get contactRelation(){
    return this.AddForm.get('contactRelation') as FormControl;
  }
  get contactPhone(){
    return this.AddForm.get('contactPhone') as FormControl;
  }
  get firstVisitDate(){
    return this.AddForm.get('firstVisitDate') as FormControl;
  }

  //#endregion
}
