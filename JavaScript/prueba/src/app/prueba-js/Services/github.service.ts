import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseGitHub } from '../Interface/github';
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(public https: HttpClient) { }
  
  private urlFin =  `${environment.apigit}`;
  
  GetPerfil(Nombre:string){
    return this.https.get<ResponseGitHub>(`${this.urlFin}users/${Nombre}`);
  }
}
