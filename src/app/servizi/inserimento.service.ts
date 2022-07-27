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
}
