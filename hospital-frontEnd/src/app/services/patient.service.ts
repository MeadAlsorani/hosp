import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PaginationFilter} from '../Interfaces/paginationFilter';
import {Patient} from '../Interfaces/patient';
import { Observable } from 'rxjs';
import * as Globals from '../../assets/global';
@Injectable({
  providedIn: 'root'
})
export class PatientService {
baseUrl=Globals.apiUrl+"patients/";
constructor(
  private http:HttpClient
) { }

  getPatients(paginationFilter:PaginationFilter,Name?:string,phoneNo?:string,fileNo?:number):Observable<any>{
    return this.http.get<any>(this.baseUrl,{
      params:{
        pageNumber:paginationFilter.pageNumber.toString(),
        pageSize:paginationFilter.pageSize.toString(),
        Name:Name,
        phoneNo:phoneNo,
        fileNO:fileNo.toString()
      },
      observe:'response'
    })
  }

  getPatientById(id):Observable<Patient>{
    return this.http.get<Patient>(this.baseUrl+id);
  }
  addPatient(data):Observable<Patient>{
    return this.http.post<Patient>(this.baseUrl,data);
  }

  deletePatient(id):Observable<Patient>{
    return this.http.delete<Patient>(this.baseUrl+id)
  }

  updatePatient(patient:Patient,id:number):Observable<Patient>{
    return this.http.put<Patient>(this.baseUrl+id,patient);
  }
}
