import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public products: any = [];
  cartProducts: any = [];
  amountBoolean: boolean = false;
  amount: any = 1;
  constructor(private auth: AuthService) {
    auth.getAllproducts().subscribe((res) => {
      this.products = res.data;
    });
    
  }

  ngOnInit(): void {}

  addToCart(item: any) {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      const dupItem = this.cartProducts.find(
        (productItem: any) => productItem.item._id == item._id
      );
      if (dupItem) {
        alert('This product is already added in your cart');
        this.amountBoolean = false;
      } else {
        this.cartProducts.push({
          item,
          amount: this.amount,
        });
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
        this.amountBoolean = false;
      }
    } else {
      this.cartProducts = [{ item, amount: this.amount }];
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      this.amountBoolean = false;
    }
  }
}
