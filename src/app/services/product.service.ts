import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';
import { IProduct } from '../models/product';
import { delay, Observable, catchError, throwError, retry, tap } from 'rxjs';
import { ErrorService } from './error.service';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
    ) {

    }
    products: IProduct[]=[]
  getAll(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams().append('limit', 5),
      })
      .pipe(
        delay(2000),
        retry(2),
        tap(products => this.products = products),
        catchError(this.errorHandler.bind(this))
        );
  }

  create(product: IProduct): Observable<IProduct>{
    return this.http.post<IProduct>('https://fakestoreapi.com/products', product)
    .pipe(
      tap(products => this.products.push(products))
    )
  }
  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}


