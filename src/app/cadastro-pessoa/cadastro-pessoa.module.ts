import { FormsModule, NgForm } from "@angular/forms";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroPessoaComponent } from './cadastro-pessoa.component';
import { CadastroPessoaFormComponent } from './cadastro-pessoa-form/cadastro-pessoa-form.component';
import { CadastroPessoaListaComponent } from './cadastro-pessoa-lista/cadastro-pessoa-lista.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  exports: [CadastroPessoaComponent, CadastroPessoaFormComponent, CadastroPessoaListaComponent],
  declarations: []
})
export class CadastroPessoaModule { }
