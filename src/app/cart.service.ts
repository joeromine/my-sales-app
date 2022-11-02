import { Injectable } from '@angular/core';
import { CartItem } from './cart.dto';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  readonly CART: string = 'cart';
  readonly CART_QUANTITY: string = 'cart_quantity';

  constructor() { }


  public getItems():Array<CartItem>{
    const cartItems = localStorage.getItem(this.CART);
    if(cartItems){
      return JSON.parse(cartItems);
    }
    return [];
  }

public addItems(item: CartItem): void{
  let found = false;
  const items = this.getItems()
  items.forEach(x =>{
    if(x.idProduct == item.idProduct){
      x.quantity++;
      found = true;
    }
  })

  if(!found){
    items.push(item);
  }
  localStorage.setItem(this.CART, JSON.stringify(items));
  localStorage.setItem(this.CART_QUANTITY, items.length.toString());
}

public removeItem(item: CartItem):void {
  let items = this.getItems();
 let found = false;
  items.forEach(l => {
    if(item.idProduct == l.idProduct){
        l.quantity--;
        found = true;
    }
  })
 const i = items.filter(c => c.quantity > 0);
 localStorage.setItem(this.CART, JSON.stringify(i));
 localStorage.setItem(this.CART_QUANTITY, i.length.toString())
}


get itemsInCart(): number{
  return this.getItems().length
}

get totalItems(): number{
  const i = this.getItems()
  let f = 0;
  i.forEach(j => f+= (j.unitPrice * j.quantity))

  return f;
}



}
