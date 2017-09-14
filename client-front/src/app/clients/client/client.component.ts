import { Component, OnInit, Input } from '@angular/core';

import {Client} from './client.model';

@Component({
  selector: 'clif-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  @Input() clientModel: Client;

  @Input() nome: string;
  @Input() telefone?: string;
  @Input() email?: string;

  constructor() { }

  ngOnInit() {
  }

  clicked() {
    console.log('Cliente: ' + this.clientModel.nome);
  }
}
