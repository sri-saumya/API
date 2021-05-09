import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { Product } from '../product';

@Component({
  selector: 'app-updateremove',
  templateUrl: './updateremove.component.html',
  styleUrls: ['./updateremove.component.css']
})
export class UpdateremoveComponent implements OnInit {


constructor(private appservice : AppService , private route: ActivatedRoute,private router:Router) { }
 
  product : any;
  ngOnInit(): void 
  {
    let id = this.route.snapshot.params['id'] ;
    this.appservice.getproductById(id).subscribe(u=>{
      console.log(u) ;
      this.product=u ;
    })
  }

  delete()
  {
    this.appservice.deleteProduct(this.product).subscribe(
      ()=>this.router.navigate(['/home'])
    );
  }

 
}