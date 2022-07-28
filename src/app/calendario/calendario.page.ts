import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarioService } from '../servizi/calendario.service';



@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],

})
export class CalendarioPage implements OnInit {

  constructor(
    private router:Router,
    private calendarioService:CalendarioService
  ) { }

  ngOnInit() 
  {

  }
  prodotti
  cambia_data(value)
  {
    console.log(value.value)
    let data=value.value;
    /* let giorno=data.getDate();
    let mese=data.getMonth();
    mese=mese+1;
    let anno=data.getFullYear();
    data=mese+"-"+giorno+"-"+anno; */
    let res=this.calendarioService.get_calendario(data);
    res.subscribe(r=>{
      
      console.log(r)
      this.prodotti=r

    })

  }

  home()
  {
    this.router.navigate(["/home"])
  }
}
