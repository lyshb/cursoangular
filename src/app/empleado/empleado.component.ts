import {Component} from '@angular/core';
import {Empleado} from './empleado';
@Component({
	selector:'empleado',
	templateUrl:'./empleado.component.html'
	})
export class EmpleadoComponent{
	public titulo_componente='Lista de Empleados';
public empleado:Empleado;
public trabajadores:Array<Empleado>;
public trabajadorExterno:boolean;
public color:string;
public colorSeleccionado:string;


constructor(){

	this.empleado=new Empleado('Licett',45,'Chef',false);
	this.trabajadores=[
	new Empleado('Ana',67,'Ayudante de Cocina',false),
	new Empleado('Juan',29,'Copero',true),
	new Empleado('Pedro',27,'Mesero',true)];
	this.trabajadorExterno=true;
	this.color='blue';
	this.colorSeleccionado='#ccc';
}

	ngOnInit(){
		
		console.log (this.empleado);
		console.log (this.trabajadores);
	}

	cambiarValor(valor){

		this.trabajadorExterno=valor;
	}

		logColorSeleccionado(){
			console.log(this.colorSeleccionado);
		}
}