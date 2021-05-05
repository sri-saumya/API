import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Product } from '../product';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


 addform : FormGroup;
 constructor(private fb: FormBuilder,private appservice: AppService,private router:Router){
   this.addform = this.fb.group({
     title:['',Validators.required],
     quantity:['',Validators.required],
     price:['',Validators.required],
     color:['',Validators.required],
     expiryDate:['',Validators.required],
     inStock:['',Validators.required]
    
   });
 }

    
  ngOnInit():void{

  }
  submit(){
    let product : Product={...this.addform.value};
    product.id = 99;
    this.appservice.postProduct(product).subscribe();
    this.router.navigate(['/home'])
  }

}
