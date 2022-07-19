import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Interfaces/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(private _productSer:ProductService,private _activeroute:ActivatedRoute) { }
  english:boolean=false;
  id!:string
  product:Product={
    brand: '',
    category: '',
    description: '',
    discountPercentage: 0,
    id: 0,
    price: 0,
    rating: 0,
    stock: 0,
    thumbnail: '',
    title: ''
  }
  ngOnInit(): void {
    this._activeroute.params.subscribe((data)=>{
      console.log(data['id'])
      this.id=data['id']
    })
    this._productSer.getSingleProduct(this.id).subscribe((response)=>{
      console.log(response)
      this.product=response
    })
    this._productSer.Language.subscribe((res)=>{
      this.english=this._productSer.Language.getValue();
    })
  }
  

}
