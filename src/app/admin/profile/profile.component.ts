import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  signupForm: FormGroup;

  inputFields = [
    { label: 'Nome', formControlName: 'name', type: 'text', required: true },
    { label: 'Email', formControlName: 'email', type: 'email', required: true },
    { label: 'Telefone (celular)', formControlName: 'phone', type: 'tel', required: true },
    { label: 'Senha', formControlName: 'password', type: 'password', required: true }
  ];

  fieldDisabled: { [key: string]: boolean } = {};
  iconState: { [key: string]: boolean } = {};

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar) {
    this.signupForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.inputFields.forEach((field) => {
      this.fieldDisabled[field.formControlName] = true;
      this.iconState[field.formControlName] = false;
      this.signupForm.addControl(field.formControlName, this.formBuilder.control('', [Validators.required]));
    });
  }

  toggleFieldState(fieldName: string): void {
    this.fieldDisabled[fieldName] = !this.fieldDisabled[fieldName];
    this.iconState[fieldName] = !this.iconState[fieldName];

    if (!this.iconState[fieldName]) {
      this.showSnackbar('Sua informação foi atualizada com sucesso');
    }
  }

  onSubmit(): void {
    // Lógica para tratar o envio do formulário

    // Simulação de envio bem-sucedido (substitua por sua lógica real de atualização)
    setTimeout(() => {
      this.showSnackbar('Suas informações foram atualizadas com sucesso');
    }, 2000);
  }

  showSnackbar(message: string = 'Sua informação foi alterada com sucesso.'): void {
    const config: MatSnackBarConfig = {
      duration: 1000, // Duração do Snackbar (em milissegundos)
      panelClass: ['snackbar-style'], // Classe CSS personalizada para estilização
      horizontalPosition:'end',
      verticalPosition:'top'
    };

    this.snackBar.open(message, 'Fechar', config);
  }
}
