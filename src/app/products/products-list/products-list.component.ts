import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { lastValueFrom, Observable } from 'rxjs';
import { Product } from '../product.dto';
import { ProductService } from '../product.service';
import { CartService } from '../../cart.service';
import { registerLocaleData } from '@angular/common';
import { CartItem } from '../../cart.dto';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products!: Product[];
  productObservable!: Observable<Product[]>;
  searchForm!: FormGroup;

  constructor(private productService: ProductService,
              private fb: FormBuilder,
              private CartService: CartService
    ) { }

  async ngOnInit() {
    this.searchForm = this.fb.group({searchTerm: ['']});
    this.getAllProducts();
  }

  async getAllProducts(searchTerm: string = '') {
     this.productObservable = this.productService.getAll(searchTerm);
     this.products = await lastValueFrom(this.productObservable);
     }

  onSubmit() {
  this.getAllProducts(this.searchForm.value.searchTerm);
  }

  onAddToCart(item: Product):void{
    const ci: CartItem ={
      idProduct: item.id,
      unitPrice: item.unitPrice,
      quantity: 1,
      name: item.name
    }
      this.CartService.addItems(ci)

  }

  }
