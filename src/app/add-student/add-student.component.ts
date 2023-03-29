import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyStudent } from 'src/model/myStudent';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  // studentId:any;
  allYears:any[]=[];
  student:MyStudent={}
  // studentName:string=''
  constructor(private api:ApiService,private route:Router){ }
 
  ngOnInit(): void {
     this.api.getAllYears().subscribe((data:any)=>{
        console.log(data);
        this.allYears=data
     })
  }
  addStudent(){
    this.api.addStudent(this.student).subscribe((data:any)=>{
      this.route.navigateByUrl('')
    })
  }

   

}
