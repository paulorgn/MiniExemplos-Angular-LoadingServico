import { Injectable } from '@angular/core';

export interface LoadingConfiguracoes {
  mostrarLoading: boolean
}
@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  mostrarModal = true;

  configure(settings: LoadingConfiguracoes) :  void {
    Object.assign(this, settings);
  }
}
