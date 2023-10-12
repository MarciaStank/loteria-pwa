import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LotteryComponent } from './lottery/lottery.component';
import { ResultComponent } from './result/result.component'; 
import { CadastroComponent } from './cadastro/cadastro.component';


const routes: Routes = [
  { path: '', component: LotteryComponent },
  { path: 'result', component: ResultComponent }, // Rota para a página de resultado
  { path: 'cadastro', component: CadastroComponent } // Rota para a pagina de cadastro
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
