import { Component, OnInit } from '@angular/core';
import { FileInputService } from 'src/app/service/file-input.service'
import { Employee } from 'src/app/data';

@Component({
  selector: 'app-display-input',
  templateUrl: './display-input.component.html',
  styleUrls: ['./display-input.component.css']
})
export class DisplayInputComponent implements OnInit {
  employees?: Employee[];
  constructor() { }

  ngOnInit(): void {
  this.employees = [
    {
         "FirstName":"Jason d",
         "MiddleName":"ahsjd ",
         "LastName":"Rich",
         "NationalProviderIdentifier":"1215341235",
         "SubSpeciality":"139",
         "Specialty": "Pediatrics",
         "PrimaryPhone":"3212034026",
         "PrimaryFax":"0",
         "AddressLine1":"809 S Orlando Ave Suite c",
         "AddressLine2":"",
         "City":"Winter Park",
         "State":"FL",
         "ZipCode":"32789"
    }
  ];
  }
//   displayData(){
//     this.fileInputService.getProvidersList().subscribe(data =>{
//       const list = data.split('\n');
//       list.forEach( e => {
//         this.ProvidersList.push(e);
//       });
//     });
//   }
}







//line12
// constructor(private fileInputService : FileInputService) { }
//
//   ngOnInit() {
//   this.displayData();
//   }
//   displayData(){
//     this.fileInputService.getProvidersList().subscribe(data =>{
//       const list = data.split('\n');
//       list.forEach( e => {
//         this.ProvidersList.push(e);
//       });
//     });
//   }
// }
