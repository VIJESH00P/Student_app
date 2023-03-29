import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
    result:any=[]
  transform(allStudents: any=[], searchkey:string,propName:string): any[] {
    const result:any=[]
    if(!allStudents||searchkey==''||propName==''){
         return allStudents
    }
    allStudents.forEach((student:any)=>{
      if(student[propName].trim().toLowerCase().includes(searchkey.toLowerCase())){
        result.push(student)
      }
    })
    return result;
  }

}
