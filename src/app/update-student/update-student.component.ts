import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyStudent } from 'src/model/myStudent';
import { MyYear } from 'src/model/myYear';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
      studentId:string='';
      student:MyStudent={}
      years:MyYear[]=[]
      constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router){ }
      ngOnInit():void{
        this.activatedRoute.params.subscribe((data:any)=>{
          console.log(data.Id);
          this.studentId=data.Id;
          this.api.viewStudent(this.studentId).subscribe((data:any)=>{
            console.log(data);
            this.student=data
            this.api.getAllYears().subscribe((data:any)=>{
              console.log(data);
              this.years=data
            })
          })
      })
  }
  updateStudent(){
      this.api.updateStudent(this.studentId,this.student).subscribe((data:any)=>{
        this.route.navigateByUrl('')
        
      })
  }
}
  
   
  
  
  
  
  

