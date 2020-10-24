import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
import {Product} from '../interface/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  products: Product[] = [];

  constructor(
    public productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getListSong();
  }

  getListSong() {
    this.productService.getWithToken().subscribe(next => this.products = next,
        error => {},
      () => {
      console.log(this.products)
    })
  }
}
