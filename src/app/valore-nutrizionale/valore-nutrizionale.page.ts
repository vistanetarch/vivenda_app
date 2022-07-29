import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarioService } from '../servizi/calendario.service';




@Component({
  selector: 'app-valore-nutrizionale',
  templateUrl: './valore-nutrizionale.page.html',
  styleUrls: ['./valore-nutrizionale.page.scss'],
})

export class ValoreNutrizionalePage implements OnInit {



  constructor(
    private calendarioService:CalendarioService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() 
  {

    this.get_valori()
  }

  pid
  result




  get_valori()
  {
    this.pid=this.route.snapshot.paramMap.get("id");
    console.log(this.pid);
    let res=this.calendarioService.get_valore_nutrizionale(this.pid);
    res.subscribe(r=>{
      
      this.result=r
      console.log(r)
    
    })
  }

  torna_calendario()
  {
    this.router.navigate(["/calendario"]);
  }


}
