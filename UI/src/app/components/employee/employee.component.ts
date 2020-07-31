import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees:String[];

  constructor(private _httpClientService: HttpClientService) { }

  ngOnInit() {
    this._httpClientService.getEmployees().subscribe(
      response =>this.handleSuccessfulResponse(response),
    );
  }


  handleSuccessfulResponse(response){
    this.employees=response;
  }

}
