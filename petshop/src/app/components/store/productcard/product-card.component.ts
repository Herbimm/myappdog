import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartUtil } from 'src/app/utils/cart.util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-card',
  templateUrl: './productcard.component.html'
})



export class ProductCardComponent implements OnInit {

  @Input() product?: Product;

  constructor(){}

  ngOnInit() {

  }

  addToCart() {
    if (this.product) {
      CartUtil.add(
        this.product?._id,
        this.product?.title,
        1,
        this.product?.price,
        this.product?.images![0]

      )
    }
    Swal.fire(`${this.product?.title} adicionado ao carrinho`, '', 'success')
  }

}

