import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  constructor(

    private http:HttpClient

  ) { }

  get_dati_bambino(token)
  {
    return this.http.post("https://lux.v-net.it/api/get_dati_bambino.php", {token:token})
  }

  get_calendario(data)
  {
    return this.http.post("https://lux.v-net.it/api/get_giorno_calendario.php", {data:data})
  }

  get_valore_nutrizionale(pid)
  {
    return this.http.post("https://lux.v-net.it/api/get_valore_nutrizionale_from_pid.php", {pid:pid});
  }

}
