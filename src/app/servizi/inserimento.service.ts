import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InserimentoService {

  constructor(

    private http: HttpClient

  ) { }


  salva_genitore(obj) 
  {
    return this.http.post("https://lux.v-net.it/api/inserimento_genitore.php",{dati:obj});
  }
  
  salva_bambino(obj) 
  {
    return this.http.post("https://lux.v-net.it/api/inserimento_bambino.php",{dati:obj});
  }

  cntr_login(username, password)
  {
    return this.http.post("https://lux.v-net.it/api/cntr_login.php",{username:username, password:password });
  }

}
