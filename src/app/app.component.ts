import { Component } from '@angular/core';
import { LoadingService, LoadingConfiguracoes } from './servicos/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCLI';

  constructor(public carregando: LoadingService) {

    let config :LoadingConfiguracoes = {
      mostrarLoading: true
      };
  
      carregando.configure(config);

      this.SimulandoProcessamento();
  }

  SimulandoProcessamento(){
    setTimeout(() => this.carregando.mostrarLoading = false, 5000);
  }
}