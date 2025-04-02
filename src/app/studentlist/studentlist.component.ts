import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-studentlist',
  imports: [FormsModule,NgIf,NgFor],
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.css'
})
export class StudentlistComponent {

  constructor(private productservice:ProductService){

  }
  // empdata: Stores the list of all employees fetched from the API in ngOnInit().
  empdata:any;
//  ngOnInit() fetches employee details and populates this.empdata.

  // ngOnInit(){
  //   this.productservice.getEmpDetails().subscribe((data:any)=>{
  //     this.empdata=data;
  //   })
  // }
  // Later, when the addEmp() method is called (e.g., when a user submits a form):
   // If addEmp() is called before ngOnInit() has successfully fetched data and this.empdata is still undefined (or initially set to undefined and hasn't been updated yet), the if block will execute, and addEmpDetails() will be called.
 // If addEmp() is called after ngOnInit() has successfully fetched data and this.empdata contains data, the else block will execute, and updateEmpDetails() will be called.
  // addEmp(data:any){
  //   if (!this.empdata) {
  //     this.productservice.addEmpDetails(data).subscribe((data:any)=>{
  //       this.empdata=data;
  //      })
      
  //   }
  //   else{
      

  //      this.productservice.updateEmpDetails(data).subscribe((data:any)=>{
  //       console.log(data);
  //     })
  //   }
     
  // }
  // selectedemp:any;
  // selectEmp(id:number){
  //   this.productservice.selectEmpDetails(id).subscribe((data:any)=>{
  //      this.selectedemp=data;
  //   })
  // }
  // deleteEmp(id:number){
  //   this.productservice.deleteEmpDetails(id).subscribe((data:any)=>{

  //   })
  // }
}
