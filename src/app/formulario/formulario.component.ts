import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [ApiService]
})
export class FormularioComponent implements OnInit {

  index: number;
  nave: any;
  nombreInput:string;
  modeloInput:string;
  velocidadInput:number;
  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    this.apiService.getNave(this.index)
      .subscribe((res) => {
        this.nave = res['nave'];
        this.nombreInput = this.nave.nombre;
        this.modeloInput = this.nave.modelo;
        this.velocidadInput = this.nave.velocidad_maxima;
      }, error => {
        console.log(error);
      });
  }

  onGuardar(){
    let data = {
      'nombre':this.nombreInput,
      'modelo':this.modeloInput,
      'velocidad':this.velocidadInput
    };
    this.apiService.setData(data)
        .subscribe(res=>{
          if(res['nave']){
            this.router.navigateByUrl('/data');
          }
        });
    console.log(this.nombreInput+" "+this.modeloInput+" "+this.velocidadInput)
  }

}
