import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { BizService } from 'src/app/services/biz.service';
import { LoginModalService } from 'src/app/services/login-modal.service';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  public cartItems:any[]=[]

  cart_summary: any={
    currency:'$',
    subtotal:0,
    freight_cost:0,
    estimated_tax:0,
    total_cost:0
  };

  constructor(
    public userInfoService: UserInfoService,
    private apiService: ApiService,
    public bizService: BizService,
    private loginModalService: LoginModalService,
    private router: Router
    ) {
    this.cartItems= this.userInfoService.getCartItems();
   }

  ngOnInit(): void {
    this.calculateCartCost();
  }
 
  reduceProductCount(item: any){
    if(item.product_count>1){
      item.product_count=item.product_count-1;
      this.userInfoService.updateItemCart(item);
    }
    
  }
  increaseProductCount(item: any){
      item.product_count=item.product_count+1;
      this.userInfoService.updateItemCart(item);
    
  }

  removeItem(item: any){
      this.userInfoService.removeItemCart(item);
      this.cartItems=this.userInfoService.getCartItems();
      this.calculateCartCost();

  }
  calculateCartCost(){
    this.cart_summary.subtotal=0;
    this.cart_summary.total_cost=0;
    this.cart_summary.freight_cost=0;
    
    for(var i=0;i<this.cartItems.length;i++){
      let item=this.cartItems[i]
      this.cart_summary.subtotal=this.cart_summary.subtotal+parseFloat(item.pricing.first_cost)*item.product_count;
      this.cart_summary.freight_cost=this.cart_summary.freight_cost+parseFloat(item.pricing.freight_cost)*item.product_count;
      this.cart_summary.total_cost=parseFloat(((this.cart_summary.subtotal+this.cart_summary.freight_cost)).toFixed(2));
      this.cart_summary.subtotal=this.cart_summary.total_cost;
    }
    // this.apiService.calculateCartCosts(this.cartItems).subscribe(res=>{
    //   this.cart_summary=res;
    // },err=>{});
  }
  checkout(){
    if(this.cartItems.length<1)
    return
  
    if(this.userInfoService.isLoggedIn()){
      this.router.navigateByUrl("/"+this.bizService.getBizId()+"/shipping-detail")
    }else{
     
      this.loginModalService.open();
      // this.router.navigateByUrl("/"+this.bizService.getBizId()+"/login")

    }
  }

}
