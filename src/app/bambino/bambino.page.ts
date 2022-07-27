import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bambino',
  templateUrl: './bambino.page.html',
  styleUrls: ['./bambino.page.scss'],
})
export class BambinoPage implements OnInit {

  constructor(

    private router: Router
  
    ) { }

  @Input () nome_bambino: string
  @Input () cognome_bambino: string
  
  nomeB
  cognomeB

  ngOnInit() 
  {

  }

  home()
  {
    this.router.navigate(["/home"])
  }


}
