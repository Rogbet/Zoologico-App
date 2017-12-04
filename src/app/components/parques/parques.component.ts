import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css']
})
export class ParquesComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  @Input() nombre : string;
  @Input('metros_cuadrados') metros : number;
  public vegetacion : string;
  public abierto: Boolean;
  
  @Output() pasameLosDatos = new EventEmitter();
   
  constructor() { 
    this.nombre = "Parque natural para caballos";
    this.metros = 450;
    this.vegetacion = "Alta";
    this.abierto = true;
  }

  emitirEvento(){
    this.pasameLosDatos.emit(
      {
        'nombre': this.nombre,
        'metros': this.metros,
        'vegetacion': this.vegetacion,
        'abierto': this.abierto,
      }
    )
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
  }

  ngOnInit() {
    console.log('Metodo on init lanzado');
  }

  ngDoCheck(){
    console.log('DoCheck se ha ejecutado');
  }

  ngOnDestroy(){
    console.log('Se va a eliminar el component');
  }

}
