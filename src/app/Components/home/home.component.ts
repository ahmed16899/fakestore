import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Interfaces/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allProducts:Product[]=[];
  searcItem:string='';
  showFiller = false;
  english:boolean=false;
  sideBar:boolean=true;


  constructor(private _productSer:ProductService) { }
  p: number = 1;
  ngOnInit(): void {
    this._productSer.getProducts().subscribe((response)=>{
      this.allProducts=response.products
      console.log(this.allProducts)
      console.log(this.allProducts)
      for(let i = 0 ; i<this.allProducts.length ; i++)
    {
      //console.log(Math.floor(this.allProducts[i].discountPercentage))
      this.allProducts[i].discountPercentage = Math.floor(this.allProducts[i].discountPercentage)
    }
    })
    this._productSer.Language.subscribe((res)=>{
      this.english=this._productSer.Language.getValue();
    })
    
  }
  toogleSidaBar()
  {
    this.sideBar=!this.sideBar;
  }
  toogleLanguage()
  {
    this._productSer.Language.next(!this._productSer.Language.getValue())
  }
  
}
