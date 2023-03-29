import { Component, OnInit } from '@angular/core';
import { MyStudent } from 'src/model/myStudent';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-student-manager',
  templateUrl: './student-manager.component.html',
  styleUrls: ['./student-manager.component.css']
})
export class StudentManagerComponent implements OnInit {
   
  loginDate:any;
  searchkey:string='';
  // heading='Student Details'
  allStudents:MyStudent[]=[]

  constructor(private api:ApiService){
    this.loginDate=new Date()
   }
   
  ngOnInit():void {
    this.getAllStudents()
  }
  // nameChange(){
  //   alert('value changed')
  // }
  getAllStudents(){
    this.api.getAllStudents().subscribe((data:any)=>{
    console.log(data);
    this.allStudents=data
    })
  }
  search(event:any){
       console.log(event.target.value);
       this.searchkey=event.target.value
       console.log(this.searchkey);
       
  }
  deleteStudent(studentId:any){
    this.api.deleteStudent(studentId).subscribe((data:any)=>{
      alert("Student details deleted")
      this.getAllStudents()
    })
  }
}
