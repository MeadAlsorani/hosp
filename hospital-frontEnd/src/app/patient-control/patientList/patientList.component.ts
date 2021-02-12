import { Component, OnInit, TemplateRef } from '@angular/core';
import {PatientService} from '../../services/patient.service';
import { PaginationFilter } from '../../Interfaces/paginationFilter';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-patientList',
  templateUrl: './patientList.component.html',
  styleUrls: ['./patientList.component.css']
})
export class PatientListComponent implements OnInit {
  dataSource;
  displayedColumns: string[] = ['name', 'gender', 'fileNo', 'birthDate','id'];
  modalRef: BsModalRef;
  patientId:number;
  constructor(
    private patientService:PatientService,
    private modalService: BsModalService
  ) { }

  paginationFilter:PaginationFilter={
    pageNumber:1,
    pageSize:10
  }
  ngOnInit() {
    this.getPatients();
  }

  getPatients(){
    this.patientService.getPatients(this.paginationFilter).subscribe(
      data=>{
        this.dataSource=data;
      }
    )
  }

  openModal(template: TemplateRef<any>,id) {
    this.patientId=id;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.patientService.deletePatient(this.patientId).subscribe(
      ()=>{
        alert("patient deleted");
        this.getPatients();
      }
    )
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }

}
