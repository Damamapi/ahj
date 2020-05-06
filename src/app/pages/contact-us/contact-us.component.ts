import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  forma: FormGroup;

  programa_interes: any = ['Programa Au Pair', 'Programa de Pasantia en el exterior', 'Programa de Voluntariado'];
  como_contactarlo: any = ['Correo Electrónico', 'Celular', 'Punto Físico'];

  constructor(private formBuilder: FormBuilder, private contactService: ContactService) {

    this.crearFormulario();

  }

  ngOnInit() {
  }

  get nombreNoValido() {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }

  get apellidoNoValido() {
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched;
  }

  get correoNoValido() {
    return this.forma.get('correo').invalid && this.forma.get('correo').touched;
  }

  get celularNoValido() {
    return this.forma.get('celular').invalid && this.forma.get('celular').touched;
  }

  get programaInteresNoValido() {
    return this.forma.get('programaInteres').invalid && this.forma.get('programaInteres').touched;
  }

  get comoContactarloNoValido() {
    return this.forma.get('comoContactarlo').invalid && this.forma.get('comoContactarlo').touched;
  }

  crearFormulario() {
    this.forma = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      apellido: ['', [Validators.required, Validators.minLength(4)]],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      celular: ['', [Validators.minLength(10), Validators.maxLength(10)]],
      programaInteres: ['', Validators.required],
      comoContactarlo: ['', Validators.required]
    });
  }

  guardar() {
    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach(control => {
        control.markAsTouched();
      });
    } else {
      this.contactService.postData(this.forma.value).subscribe(response => {
        location.href = 'https://mailthis.to/confirm';
        console.log(response);
      }, error => {
        console.warn(error.responseText);
        console.log({ error });
      });
    }
  }

}
