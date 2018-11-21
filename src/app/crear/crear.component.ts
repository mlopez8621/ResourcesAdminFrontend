import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { FasesService } from '../core/services/fases.service';
import { RecursosServicio } from '../core/services/recursos.service';
import { CrearModel } from '../models/crear.model';
import { CrearService } from '../core/services/crear.service';
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  crearform: FormGroup;
  public _lists: any  = [];
  CrearData: CrearModel = null;
  constructor(
     private frmBuilder: FormBuilder ,
     private _fasesService: FasesService,
     private _recursosServicio: RecursosServicio,
     private _crearService: CrearService
     ) { }

  ngOnInit() {
    this.crearform = this.frmBuilder.group({
      nombre: ['', [Validators.required , Validators.minLength(2), Validators.maxLength(30)] ],
      descripcion: ['', [ Validators.required , Validators.minLength(2)]] ,
      tipoRecurso: ['', [Validators.required ,  Validators.maxLength(2)]],
      idSolicitud: [ '' , [Validators.required , Validators.maxLength(2), Validators.pattern('([0-9])*$')]],
      idProyecto : ['', [Validators.required , Validators.maxLength(2), Validators.pattern('([0-9])*$')]],
      descripcionSolicitud : ['' , [Validators.required , Validators.minLength(2)]],
      estado : ['', [Validators.required ]],

    });
    this.loadlists();
  }

  loadlists(): void {
    this._fasesService.getAllPhases().subscribe( (resp: any) => this._lists.Estados = resp.results);
    this._recursosServicio.getResurcesType().subscribe( (resp: any) => this._lists.Recursos = resp.results);
 }

   crear(): void {
    if ( this.crearform.invalid) {
      return;
    }

    this.CrearData = new CrearModel(
       this.crearform.value.nombre,
       this.crearform.value.descripcion,
       this.crearform.value.tipoRecurso,
       this.crearform.value.idSolicitud,
       this.crearform.value.idProyecto,
       this.crearform.value.descripcionSolicitud,
       this.crearform.value.estado,
    );
       this._crearService.add( this.CrearData).subscribe(
         respon => {
           this.crearform.reset();
          console.log(respon); // validar la respuesta
         this.crearform.reset();
          swal(
            'OK!',
            'Creado Exitosamente',
            'success'
          );
       },
       err => {
        console.log(err); // cuando hay error
        swal(
          'ERROR!',
          'Error creando la solicitud',
          'error'
        );
       } );


   }




}
