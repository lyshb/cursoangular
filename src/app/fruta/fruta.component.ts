	import {Component} from '@angular/core';
	@Component({
		selector:'fruta',
		templateUrl:'./fruta.component.html'
		})
	export class FrutaComponent{
		public nombre_componente='Componente de fruta';
		public listado_frutas='Naranja, Manzana, Pera y Sandia';
		public nombre:string ;
		public edad:number;
		public mayorDeEdad:boolean;
		public trabajos:Array<any>;
		comodin:any=23;

		constructor(){
	this.nombre='Licett';
	this.edad=30;
	this.mayorDeEdad=true;
	this.trabajos=['Informatica', 7, 'Relaciones Publicas'];

		}

		ngOnInit(){
	this.holaMundo();
	alert('Hola Mundo'+ this.nombre);

	//Variables y alcance 

	var uno=8;
	var dos=15;

	if(uno==8){

		let uno=3;
		var dos =88;
		console.log("Dentro del if");
	}

	console.log(uno " " dos);
		}

		holaMundo(){
			this.nombre='Rufo';
			
		}
	}