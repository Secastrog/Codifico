import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ResponseGitHub } from '../../Interface/github';
import { GithubService } from '../../Services/github.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerService, Spinner } from 'ngx-spinner';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-buscar-git-hub',
  templateUrl: './buscar-git-hub.component.html',
  styleUrls: ['./buscar-git-hub.component.scss']
})
export class BuscarGitHubComponent implements OnInit {
  public respuesta!: ResponseGitHub;
  public busqueda: string = "";
  public icono: boolean = false;
  public resp: ResponseGitHub = {
    login: '',
    id: 0,
    node_id: '',
    avatar_url: '',
    gravatar_id: '',
    url: '',
    html_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    starred_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    events_url: '',
    received_events_url: '',
    type: '',
    site_admin: false,
    name: '',
    company: '',
    blog: '',
    location: '',
    twitter_username: '',
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: "",
    updated_at: ""
  }
  constructor(private https: HttpClient,
    public services: GithubService,
    public spinner: NgxSpinnerService,
    private messageService: MessageService

  ) { 
    this.respuesta = this.resp;
  }
  

  ngOnInit(): void {
  }

  buscar() {
    this.spinner.show();
    console.log(this.busqueda);
    if (this.busqueda == '' || this.busqueda == undefined || this.busqueda == null) {
      this.spinner.hide();
      this.mensaje(1, 'Por favor ingresa un usuario')
    } else {
      this.services.GetPerfil(this.busqueda).subscribe(
        (dt) => {
          this.respuesta = dt;
          if(this.resp.id == 0){
            this.spinner.hide();
            this.mensaje(2, 'No hay usuarios que cumplan con el criterio de búsqueda');
            this.respuesta =  this.resp;
            this.icono = false;
  
          }else{
            this.icono = true;
            this.spinner.hide();
            console.log(this.respuesta);
          }
          
        }, (error) => {
          this.spinner.hide();
          this.mensaje(2, 'No hay usuarios que cumplan con el criterio de búsqueda');
          this.respuesta =  this.resp;
          this.icono = false;
          console.log(error.message);
        }
      )
    }
  }
  mensaje(tipo: number, mensaje: string) {
    if (tipo == 1) {
      this.messageService.add({ severity: 'success', summary: mensaje });
    } else {
      this.messageService.add({ severity: 'error', summary: '¡Advertencia!', detail: mensaje });
    }

  }

}
