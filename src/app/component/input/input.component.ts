import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/data'
import { FileInputService } from 'src/app/service/file-input.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(private fileInputService: FileInputService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveInput(){this.fileInputService.FileInput(this.employee).subscribe(
    data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    console.log(this.employee)
    this.saveInput();
  }

}
// display_input(){
//
// }









// line9
// export class InputComponent implements OnInit {
//   FileInput: FileInput = new FileInput();
//   constructor(private http: HttpClient) { }
//
//   ngOnInit(): void {
//   }
//   onSubmit(data:any){
//     console.warn(data);
//     this.display_input();
//     }
//
// }

