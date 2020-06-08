import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../window-ref.service';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
productDetail;
isDataAvailable = false;
isSuccess = false;

  constructor(
    private winRef: WindowRefService, 
    private productService: ProductService, 
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private toastr : ToastrService
    ) 
    {
    this.productService.retriveData().subscribe((data)=>{
      this.productDetail = data.find(product =>product.id == this.activatedRoute.snapshot.params.id);
      console.log(this.productDetail);
      this.isDataAvailable = true;
    })  
    
    
   }

  ngOnInit(): void {
  }

  razorPayment(){
    let options: any ={
      "key":"rzp_test_9RMoBMo9m4b9bd",
      "amount": this.productDetail.product_price * 100,
      "name": "Company Name",
      "description": "dummy data",
      "image": "",
      "modal": {
            "escape": false
          },
      "notes": {
            
          },
      "theme": {
            "color": '#0c238a'
          }
    };
    options.handler = ((response, error) => {
      options.response = response;
        alert("Your payment ID is :"+response.razorpay_payment_id)
        //if(response)this.isSuccess = true;      
    });
    
    // if(this.isSuccess){
    //   this.toastr.success("transaction Success");
      this.router.navigate(["/orders"]);
    // }

    options.modal.ondismiss = (() => {
      alert("Transaction cancelled")      
    });
    
    const rzp = new this.winRef.nativeWindow.Razorpay(options);
    rzp.open();
    

  }
  

}
