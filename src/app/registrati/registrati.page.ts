import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { BambinoPage } from '../bambino/bambino.page';

@Component({
  selector: 'app-registrati',
  templateUrl: './registrati.page.html',
  styleUrls: ['./registrati.page.scss'],
})

export class RegistratiPage implements OnInit {
  
/*   @ViewChildren(BambinoPage) bambini_dati: QueryList<BambinoPage> */
  
  bambini=[]
  counter=0;
  check_campi=true
  err_nome=false;
  err_email=false;
  err_pass=false
  err_cognome=false;

  email
  nome
  cognome
  password
  constructor(

    private _router: Router
  ) { }

  ngOnInit() {
  }

  login()
  {
    this._router.navigate(["login"]);
  }

  add_bambino()
  {

    this.bambini.push(this.counter);
    console.log(this.bambini)
    this.counter=this.counter+1;

  }

  array_bambini_result=[]
  array_eliminati=[];
  
 
  
  dati_bambino()
  { 
    if(!this.email)
    {
      this.check_campi=false;
      this.err_email=true;
    }
    if(!this.nome)
    {
      this.check_campi=false;
      this.err_nome=true;
    }
    if(!this.cognome)
    {
      this.check_campi=false;
      this.err_cognome=true;
    }

    if(!this.password)
    {
      this.check_campi=false;
      this.err_pass=true;
    }

   /*  if(this.check_campi)
    {

      const bambini = this.bambini_dati.toArray()

      for (let index = 0; index < bambini.length; index++) 
      {  
        console.log(this.array_eliminati.includes(index));
        if(!this.array_eliminati.includes(index))
        {
          let bamb = bambini[index];
          let obj=
          {  
              id:index,
              nome:bamb.nomeB,
              cognome:bamb.cognomeB,

          }

          this.array_bambini_result.push(obj)
        }
        
      }
    } */
    

    console.log(this.array_bambini_result)
  }

 

  elimina_bambino(id)
  {
    
    console.log(id)
    let btn_elimina=document.getElementById(""+id+"");
    let div=btn_elimina.parentElement;
    div=div.parentElement;
    div.remove();
    this.array_eliminati.push(id)
    
  }

}
