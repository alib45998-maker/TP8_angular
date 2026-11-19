import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

const URL = "http://localhost:3000/products";
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly _http = inject(HttpClient);
  private readonly _products = signal<Product[]>([]);
  products = this._products.asReadonly();

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(URL).pipe(tap(prd => this._products.set(prd)));
  }

  addProduct(p: Omit<Product,'id'>): Observable<Product> {
    return this._http.post<Product>(URL, p).pipe(tap(productAdded =>this._products.update(produits => [...produits, productAdded]))
    );
  }

}
