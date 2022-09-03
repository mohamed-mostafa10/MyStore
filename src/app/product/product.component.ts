import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  lastProduct: any = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.lastProduct);
  }


  receiveProjects($event : any) {
    this.lastProduct = $event;
  }
}
