import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];
  /* método anexa um produto a uma matriz deitems */
  addToCart(product: Product) {
    this.items.push(product);
  }
  /*método coleta os itens que os usuários adicionam ao carrinho e retorna cada item com sua quantidade associada*/
  getItems() {
    return this.items;
  }
/*método retorna um array vazio de itens, que esvazia o carrinho*/
  clearCart() {
    this.items = [];
    return this.items;
  }
}
