import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-popup',
  templateUrl: './form-popup.component.html',
  styleUrls: ['./form-popup.component.scss']
})

export class FormPopupComponent  implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<FormPopupComponent>
    ) { }
  
  ngOnInit() {
    this.form = this.formBuilder.group({
      nomeFantasia: ['', Validators.required],
      razaoSocial: ['', Validators.required],
      cnpj: ['', Validators.required],
      imagem: [''],
      cep: ['', Validators.required],
      uf: ['', Validators.required],
      cidade: ['', Validators.required],
      endereco: ['', Validators.required],
      bairro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
      telefone: ['', Validators.required],
      celular: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      ramoAtuacao: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.form.valid) {
      // Lógica para processar o formulário
      console.log('Dados do formulário:', this.form.value);

      // Fechar o popup após o processamento
      this.closeDialog();
    } else {
      // Tratar erros de validação do formulário
      console.log('Formulário inválido');
    }
  }

  closeDialog() {
    // Fechar o popup
    this.dialogRef.close();
  }
}
