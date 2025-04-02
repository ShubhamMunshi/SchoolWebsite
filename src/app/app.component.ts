import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from './services/product.service';
import { Student } from './Interface/Student';
import { Observable } from 'rxjs';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,NavbarComponent],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'studentsystem';
  constructor(private productservice:ProductService){

  }
  studentdata:Student[]=[];

  ngOnInit(): void {
    this.productservice.getStudentData().subscribe((data:any)=>{
      this.studentdata=data;
      })
    }

  

  addDetails(data:Student){
    if (!this.studentdata) {
      this.productservice.saveStudentData(data).subscribe((data:Student)=>{
        console.log(data);
       })
    }
    else{
      this.productservice.updateStudent(data).subscribe((data:Student)=>{
     console.log( data);

     
      })
    }
 
  }

  deleteUsers(id:number){
   this.productservice.deleteStudentData(id).subscribe((data:Student)=>{
    console.log(id);
   })    
  }

  // populate input field
  selecteduser:Student|undefined;
  // here we gave Student not Student[] because we choose only one user not array of users
  selectUsers(id:number){
  this.productservice.getSelectedUser(id).subscribe((data:Student)=>{
    this.selecteduser=data;
    console.log(data);
  })
  }


}
