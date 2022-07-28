import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassiService } from '../servizi/classi.service';
import { InserimentoService } from '../servizi/inserimento.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-bambino',
  templateUrl: './bambino.page.html',
  styleUrls: ['./bambino.page.scss'],
})
export class BambinoPage implements OnInit {

  constructor(

    private router: Router,
    private classiService:ClassiService,
    private inserimentoService:InserimentoService,
    private storage:Storage
  
    ) { }

  @Input () nome_bambino: string
  @Input () cognome_bambino: string
  
  nomeB
  cognomeB
  classe_select
  classi

  ngOnInit() 
  { 
    let classi=this.classiService.get_classi()
    classi.subscribe(r=>{

      console.log(r)
      this.classi=r
      
    })  
  
  }

  email
  token
  dati_bambino()
  {
    let res1=this.storage.get("email").then((email) => {
        this.email=email

      let token_1=this.storage.get("token").then((token) => {
        
        this.token=token
        
        let obj = 
        {
          nome:this.nomeB,
          cognome:this.cognomeB,
          classi:this.classe_select,
          email:email,
          token:token,
        }

        let res=this.inserimentoService.salva_bambino(obj);
        res.subscribe(r=>{

          console.log(r);
          this.nomeB="";
          this.cognomeB="";
          this.router.navigate(["/home"]);
        })
      })

    });
 


  }

  home()
  {
    this.router.navigate(["/home"])
  }


}
