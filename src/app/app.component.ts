import { Component, inject } from '@angular/core';
import { APIResponse, Customer, LoginObj } from './model/train';
import { TrainService } from './service/train.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  


  registeredObj: Customer = new Customer();
  trainService = inject(TrainService);
  loginObj: LoginObj = new LoginObj();


  openRegister(){
    const model = document.getElementById("registerModel");
    if(model!=null){
      model.style.display = 'block'
    }
  }
  openLogin(){
    const model = document.getElementById("loginModel");
    if(model!=null){
      model.style.display = 'block'
    }
  }
  closeRegister(){
    const model = document.getElementById("registerModel");
    if(model!=null){
      model.style.display = 'none'
    }
  }
  closeLogin(){
    const model = document.getElementById("loginModel");
    if(model!=null){
      model.style.display = 'none'
    }
  }

  onRegister(){
    this.trainService.createNewCustomer(this.registeredObj).subscribe((res:APIResponse)=>{
      if(res.result){
        alert(res.message)
      }else{
        alert(res.message)
      }
      console.log(res);
    })
    console.log(this.registeredObj);
    this.closeRegister();
  }
}
