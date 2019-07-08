import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  productId: number;

  ngOnInit() {
    this.productId = this.route.snapshot.params['id'];
  }
}
