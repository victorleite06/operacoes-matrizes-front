import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppbarComponent } from './components/appbar/appbar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { SomaComponent } from './components/operacoes/soma/soma.component';
import { SubtracaoComponent } from './components/operacoes/subtracao/subtracao.component';
import { MultiplicacaoComponent } from './components/operacoes/multiplicacao/multiplicacao.component';
import { DivisaoComponent } from './components/operacoes/divisao/divisao.component';
import { TranspostaComponent } from './components/operacoes/transposta/transposta.component';
import { DeterminanteComponent } from './components/operacoes/determinante/determinante.component';
import { InversaComponent } from './components/operacoes/inversa/inversa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    SomaComponent,
    SubtracaoComponent,
    MultiplicacaoComponent,
    DivisaoComponent,
    TranspostaComponent,
    DeterminanteComponent,
    InversaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatStepperModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
