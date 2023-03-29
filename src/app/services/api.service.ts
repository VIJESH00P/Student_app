import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyStudent } from 'src/model/myStudent';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  baseUrl:string = 'http://localhost:3000/students'
  //function - get all studentss
  getAllStudents():Observable<MyStudent>{
    return  this.http.get(this.baseUrl)
  }
  //api call for fetch particular students
  viewStudent(studentId:any){
    return this.http.get(`${this.baseUrl}/${studentId}`)
  }
  getYearName(yearId:any){
    return this.http.get('http://localhost:3000/year/'+yearId)
  }
  getAllYears(){
     return this.http.get('http://localhost:3000/year')
  }
  addStudent(studentBody:any){
    return this.http.post(this.baseUrl,studentBody)
  }
  deleteStudent(studentId:any){
    return this.http.delete(`${this.baseUrl}/${studentId}`)
  }
  updateStudent(studentId:any,studentBody:any){
       return this.http.put(`${this.baseUrl}/${studentId}`,studentBody)
  }
}
