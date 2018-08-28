import { Injectable } from '@angular/core';

export interface LoadingConfiguracoes {
  mostrarLoading: boolean
}
@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  mostrarLoading = true;

  configure(settings: LoadingConfiguracoes) :  void {
    Object.assign(this, settings);
  }
}
