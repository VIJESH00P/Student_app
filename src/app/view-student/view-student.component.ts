import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
    studentId:string=''
    student:any;
    yearId:any;
    yearName:any;
    constructor(private activatedRoute:ActivatedRoute,private api:ApiService){ }

    ngOnInit(): void {
      this.activatedRoute.params.subscribe((data:any)=>{
        console.log(data);
        this.studentId=data.studentId

        //view particular data -api call

        this.api.viewStudent(this.studentId).subscribe((data:any)=>{
          console.log(data);//data of particular students
           this.student=data
           this.yearId=data.yearId
           this.api.getYearName(this.yearId).subscribe((data:any)=>{
            this.yearName=data.name
            console.log(this.yearName);
            
           })
           
        })
      })
    }
}
