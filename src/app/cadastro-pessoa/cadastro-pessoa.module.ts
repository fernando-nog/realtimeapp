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
  declarations: [CadastroPessoaComponent, CadastroPessoaFormComponent, CadastroPessoaListaComponent]
})

/*
Can't export directive CadastroPessoaComponent from CadastroPessoaModule as it was neither declared nor imported!

Type CadastroPessoaComponent is part of the declarations of 2 modules: CadastroPessoaModule and AppModule! 
Please consider moving CadastroPessoaComponent to a higher module that imports CadastroPessoaModule and AppModule. 
You can also create a new NgModule that exports and includes CadastroPessoaComponent 
then import that NgModule in CadastroPessoaModule and AppModule.
*/
export class CadastroPessoaModule { }
