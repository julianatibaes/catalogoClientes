import { Component, OnInit, Inject } from '@angular/core';

import {Client} from './client/client.model';
import { Http } from '@angular/http';

@Component({
  selector: 'clif-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent implements OnInit {

  clients: Object[] = [];

  constructor(@Inject(Http) http) {

    http.get('http://localhost:8080/WebServiceClient/rest/client_api/buscarTodos')
    .map( res => {
      return res.json();
    })
    .subscribe(clients => {
      this.clients = clients;
      console.log('clientes: ' + this.clients);
    });
  }

  ngOnInit() {
  }

}
