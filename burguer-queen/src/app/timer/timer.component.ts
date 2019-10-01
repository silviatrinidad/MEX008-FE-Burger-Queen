import { Component} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent{
    minutos: number;
    segundos: number;
    isPaused: boolean;

  constructor() {
    this.clock();
    setInterval(()=>this.tick(),1000)
   }

   //Funcion resetTimer
   clock(): void{
     this.minutos = 0;
     this.segundos = 0;
   }
   
   //Funcion del timer
   private tick(): void{
     this.segundos += 1;
     if(this.segundos == 60){
       this.segundos = 0;
       this.minutos +=1;
     }
   }

  ngOnInit() {
  }

}
