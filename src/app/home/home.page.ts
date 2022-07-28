import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { CalendarioService } from '../servizi/calendario.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  token
  bambini
  
  constructor(

    private router: Router,
    private storage: Storage,
    private calendarioService:CalendarioService
  
    ) { }

  ngOnInit() {
    this.get_bambini()
  }

  addBambino()
  {

    this.router.navigate(["/bambino"])
  
  }
  
  get_bambini()
  { 
    this.storage.get("token").then((token) => {
      
      this.token=token
      let res=this.calendarioService.get_dati_bambino(token);
      res.subscribe(r=>{

        console.log(r)
        this.bambini=r
      
      })

    })
  }
   

  viewCalendario()
  {
    this.router.navigate(["/calendario"])
  
  }

}
