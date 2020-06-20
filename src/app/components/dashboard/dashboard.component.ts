import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  columns = [{ prop: 'Jurisdiction' }, { name: 'Trade' }, { name: 'Deal' },{ prop: 'UTI' }, { name: 'Database' }, { name: 'Version' },{ prop: 'Reference Date' }, { name: 'Replay time' }, { name: 'Submited by' },{ prop: 'Requesting user' }, { name: 'Replay Schedule' }, { name: 'Status' }];

  rows = [
    { Jurisdiction: 'Austin', trade: 'Male', deal: 'Swimlane' },
    { Jurisdiction: 'Dany', trade: 'Male', deal: 'KFC' },
    { Jurisdiction: 'Molly', trade: 'Female', deal: 'Burger King' }
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // call api to get table data onLoad
    //this.getTableData();
  }
  
  getTableData() {
    this.http.get('API URL')
      .subscribe(res => {
        console.log(res);
        
      })
  }
}
