
import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { ClientComponent } from '../client/client.component';


@Component({
  selector: 'clif-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  client: ClientComponent = new ClientComponent();
  http: Http;
  // URL da nossa API
  private url: string = 'http://localhost:8080/WebServiceClient/rest/client_api/cadastrar';

  constructor(http: Http) {
    this.http = http;
  }

  ngOnInit() {
  }

  cadastrar(event) {
    event.preventDefault();
    console.log(this.client);

    // cria uma instância de Headers
    let headers = new Headers();

    // Adiciona o tipo de conteúdo application/json
    headers.append('Content-Type', 'application/json; charset=UTF-8');

    this.http.post(this.url,
      JSON.stringify(this.client), { headers: headers })
    .subscribe(() => {
        this.client = new ClientComponent();
        console.log('Cadastrado com sucesso!');
    });
  }
}
