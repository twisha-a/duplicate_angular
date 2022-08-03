import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from 'src/app/data';

@Injectable({
  providedIn: 'root'
})
export class FileInputService {
  private baseUrl1 = "http://127.0.0.1:600/MLbased" //sending to server
  private baseUrl2 = "C:/Users/tsahay/Desktop/data/data_3.csv" //displaying

  constructor(private httpClient: HttpClient) { }

  getProvidersList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl1}`,);
  }
  //sending input to server but right now in csv format; make changes for json format
  FileInput(employee : Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl1}`, {
    "Practitioners": [
        {
            "FirstName": "Marlene",
            "MiddleName": " ",
            "LastName": "Typaldos",
            "NationalProviderIdentifier": "1003143553",
            "SubSpeciality": "200",
            "Specialty": "Pediatric Pulmonology",
            "PrimaryPhone": "8328223327",
            "PrimaryFax": "0",
            "AddressLine1": "6701 Fannin Street 9th Floor Floor 9",
            "AddressLine2": "",
            "City": "Houston",
            "State": "TX",
            "ZipCode": "77030"
        },
        {
            "FirstName": "Jason d",
            "MiddleName": " ",
            "LastName": "Rich",
            "NationalProviderIdentifier": "1215341235",
            "SubSpeciality": "139",
            "Specialty": "Pediatrics",
            "PrimaryPhone": "3212034026",
            "PrimaryFax": "0",
            "AddressLine1": "809 S Orlando Ave Suite c",
            "AddressLine2": "",
            "City": "Winter Park",
            "State": "FL",
            "ZipCode": "32789"
        }
    ]
});
  }
}
