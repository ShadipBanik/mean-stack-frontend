import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var $;
@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit,AfterViewInit {
  @ViewChild('dataTable',{static:false}) table:ElementRef;
  dataTable:any;
  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit():void{
    this.dataTable=$(this.table.nativeElement),
    this.dataTable.DataTable({
      responsive:true
    });
  }
}
