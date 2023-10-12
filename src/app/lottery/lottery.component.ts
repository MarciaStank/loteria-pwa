import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LotteryApiService } from '../lottery-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.css'],
})
export class LotteryComponent implements OnInit {
  @Output() numbersDrawn = new EventEmitter<number[]>();
  lotteryForm!: FormGroup;
  lotteryNumbers: number[] = [];
  numbersArray: number[] = Array.from({ length: 60 }, (_, i) => i + 1); // Matriz de números de 1 a 60

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private lotteryApiService: LotteryApiService
  ) {}

  ngOnInit(): void {
    this.lotteryForm = this.formBuilder.group({});
  }

  drawNumbers() {
    this.lotteryApiService.getLotteryNumbers().subscribe(
      (numbers: number[]) => {
        this.lotteryNumbers = numbers;

        // Navegar para a página de resultado e passar os números sorteados
        this.router.navigate(['/result'], {
          queryParams: { numbers: this.lotteryNumbers.join(',') },
        });
      },
      (error: any) => {
        console.error('Erro ao buscar números da API', error);
      }
    );
  }

  navegarParaCadastro() {
    this.router.navigate(['/cadastro']);
  }

}
