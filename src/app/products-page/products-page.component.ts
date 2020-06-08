import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
productsData;
isDataAvailable = false;
  constructor(private productService: ProductService) {
    this.productService.retriveData().subscribe((data)=>{
      this.productsData = data;
      console.log(this.productsData);
      this.isDataAvailable = true;
    })    
    
   }

  ngOnInit(): void {
  }

}
