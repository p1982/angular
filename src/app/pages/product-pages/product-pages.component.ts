import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-product-pages',
  templateUrl: './product-pages.component.html',
  styleUrls: ['./product-pages.component.css']
})
export class ProductPagesComponent implements OnInit {

  title = 'angular app';
  loading = false;
  term=""
  // products: IProduct[] = [];
  // products$: Observable<IProduct[]>
  constructor(
    public productsService: ProductService,
    public modalService: ModalService
    ) {}
  ngOnInit(): void {
    this.loading = true;
    // this.products$ = this.productsService.getAll().pipe(
    //   tap(()=>this.loading=!this.loading)
    // )
    this.productsService.getAll().subscribe(() => {
      this.loading = false;
    });
  }
}
