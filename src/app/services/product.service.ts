import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Interface/Student';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { 
    
  }
  
   url='http://localhost:3000/students';

   //get() : to get existing data
  getStudentData():Observable<Student>{
   return this.http.get<Student>(this.url);
  }
 
  // post(): to add new data
  // takes two arguments one is url and other is object or data
  saveStudentData(data:Student):Observable<Student>{
    return this.http.post<Student>(this.url,data);
  }

  // in case of delete it takes url like normalurl/id means additional id at end
 // like  http://localhost:3000/students/1
 // delete(): it takes two arguments one is url and other is id 
  deleteStudentData(id:number):Observable<Student>{
    return this.http.delete<Student>(this.url +"/"+id);
  }

  // populate input field
  getSelectedUser(id:number):Observable<Student>{
    return this.http.get<Student>(this.url +"/"+id);
  }

  // put method: method to update 
  // put(url+id, object of user)
  // it takes two arguments one is url and other is whole object 
  updateStudent(stud:Student):Observable<Student>{
    return this.http.put<Student>(this.url +"/"+stud.id,stud);
  }
  
  // case 2

  // getEmpDetails(){
  //   return this.http.get('http://localhost:3000/employee')
  // }

  // addEmpDetails(data:any):Observable<any>{
  //   return this.http.post<any>('http://localhost:3000/employee',data);
  // }

  // selectEmpDetails(id:number):Observable<any>{
  //   return this.http.get('http://localhost:3000/employee'+ "/"+id)
  // }
  // deleteEmpDetails(id:number):Observable<any>{
  //   return this.http.delete('http://localhost:3000/employee'+ "/"+id)
  // }

  // updateEmpDetails(data:any):Observable<any>{
  // return this.http.put('http://localhost:3000/employee'+ "/"+data.id,data)
  // }




}
