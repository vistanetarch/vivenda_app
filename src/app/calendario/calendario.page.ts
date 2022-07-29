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
  
   tpid=[]
   pranzi=[]
   spuntini=[]
   merende=[]
  cambia_data(value)
  {
    
    this.tpid=[]
    this.pranzi=[]
    this.spuntini=[]
    this.merende=[]
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
      try {
        for (let index = 0; index <  this.prodotti.length; index++) 
        {
          
          
            let e=this.tpid.find(e =>  e == this.prodotti[index].tpid)
            if(!e)
            {
              this.tpid.push(this.prodotti[index].tpid)
            }
            if(this.tpid[1])
            {
              this.spuntini.push(this.prodotti[index])
            }
            if(this.tpid[0])
            {
              this.pranzi.push(this.prodotti[index])
            }
            
            if(this.tpid[2])
            {
              console.log(this.prodotti[index])
              this.merende.push(this.prodotti[index])
            }
          
            
          
        }
      } 
      catch (error) 
      {
        this.merende.push({nome:"", tipologia_pasto:""})
        this.pranzi.push({nome:"", tipologia_pasto:""})
        this.spuntini.push({nome:"", tipologia_pasto:"Il pasto non è ancora stato inserito"})
      }
      
      console.log( this.pranzi)
      
    
    })


  }

  get_nutrionale(pid)
  {
    console.log(pid)
    this.router.navigate(["/valore-nutrizionale",{id:pid}]); 
  }

  home()
  {
    this.router.navigate(["/home"])
  }
}
