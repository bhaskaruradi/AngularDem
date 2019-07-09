import { Component } from '@angular/core';
import { User } from './address-card/user.';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo2';
   user :  User ;
  constructor(){
    this.user = new User();
    this.user.name = "bhaskar";
    this.user.title = "software developer";
    this.user.phone = [
      "12345","456789"
    ];


    


  }

 

}
