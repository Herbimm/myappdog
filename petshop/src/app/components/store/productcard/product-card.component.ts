import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './productcard.component.html'  
})



export class ProductCardComponent implements OnInit {  

  @Input() product?: Product ;

  ngOnInit(){
    
  }

}

