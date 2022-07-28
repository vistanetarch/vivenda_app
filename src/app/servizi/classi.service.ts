import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ClassiService {

  constructor(

    private http: HttpClient
  ) { }


  get_classi()
  {
    return this.http.post("https://lux.v-net.it/api/get_classi.php",{});
  }

}
