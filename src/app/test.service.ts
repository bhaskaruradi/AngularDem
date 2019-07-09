import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
printConsole(arg){
  console.log(arg);
}
}
