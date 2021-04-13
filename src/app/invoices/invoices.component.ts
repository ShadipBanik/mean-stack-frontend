import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var $;
@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit,AfterViewInit {
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
