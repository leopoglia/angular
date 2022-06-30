import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [HeaderComponent],
  declarations: [HeaderComponent, NavComponent, CabecalhoComponent],
  
})
export class ComponentesFixosModule { }
