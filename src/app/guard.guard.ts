import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { InserimentoService } from './servizi/inserimento.service';


@Injectable({
  providedIn: 'root'
})
export class OuthGuard implements CanActivate, CanLoad {
  
  constructor(
    private router:Router,
    private storage: Storage,
    private  inserimentoService:InserimentoService
  )
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  canLoad(): boolean  
  {
      let tmp_token=true
      this.storage.get('token').then((val) => 
      {
        console.log(val)
        let token=this.inserimentoService.cntr_token(val)
        token.subscribe(r => {
          console.log(r)
          let res=r
          if(res>0)
          {
            tmp_token = true
          }
          else
          {
            tmp_token = false
             this.router.navigate(["/login"]) 
          }
        })
        
      });
      return tmp_token; 
  }
}
