import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  check_email=true;
  check_password=true;
  err_email="* Inserisci un campo valido";
  err_password="* Inserisci una password con minimo 8 caratteri";

  password
  email
  constructor(
    private _router : Router
  ) { }

  ngOnInit() {
  }

  cntr_campi()
  {
     this.check_campi()
  
  }

  active_pass=false
  active_email=false
  btn_active=false

  active_btn( type)
  {
    
    if(type=="password")
    {
      if(this.password!="")
      {
        this.active_pass=true;
      }
      else
      {
        this.active_email=false;
      }
    }

    if(type=="email")
    {
      if(this.email!="")
      {
        this.active_email=true;
      }
      else
      {
        this.active_email=false;
      }
     
    }
    if(this.active_email && this.active_pass)
    {
      this.btn_active=true;
    }
    else
    {
      this.btn_active=false;
    }
    
  }

  check_campi()
  { 
    if(this.password.length>8 && this.password)
    {
      this.check_password=true;
    }
    else
    {
      
      this.check_password=false;
    }

    if(this.email.length>8 && this.email)
    {
      this.check_email=true;
    }
    else
    { 
      this.check_email=false;
    }

  }


  registrati_link()
  {
    this._router.navigate(["/registrati"]);

  }

  

}
