import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { } from '../data'
@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
