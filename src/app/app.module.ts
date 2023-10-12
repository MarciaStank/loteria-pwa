import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LotteryComponent } from './lottery/lottery.component';
import { ResultComponent } from './result/result.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { ServiceWorkerModule } from '@angular/service-worker';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LotteryComponent,
    ResultComponent,
    CadastroComponent,
    ListaUsuariosComponent,
 

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
