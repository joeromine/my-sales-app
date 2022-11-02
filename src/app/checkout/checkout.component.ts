import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../cart.dto';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public cartService: CartService) { }
  public items: CartItem[] = []; 
  ngOnInit(): void {
    this.items = this.cartService.getItems()
  }

  onRemoveItem(item: CartItem){
    this.cartService.removeItem(item)
    this.ngOnInit();
  }
}
