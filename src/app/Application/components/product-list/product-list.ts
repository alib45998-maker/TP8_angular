import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  private readonly productService = inject(ProductService);
  products = this.productService.products;

  ngOnInit(): void {
    this.productService.getProducts().subscribe();
  }

  onAddProduct() {
    let newProduct = {name: 'crayon', price: 2.3 };
    this.productService.addProduct(newProduct).subscribe();
  }

}
