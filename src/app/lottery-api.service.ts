import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LotteryApiService {

  // Simula uma chamada à API para buscar números aleatórios
  getLotteryNumbers(): Observable<number[]> {
    return new Observable<number[]>((observer) => {
      const numbers: number[] = [];
      const maxNumber = 60;

      const getRandomNumber = () => {
        return Math.floor(Math.random() * maxNumber) + 1;
      };

      const timeout = setInterval(() => {
        const randomNum = getRandomNumber();
        if (!numbers.includes(randomNum)) {
          numbers.push(randomNum);
        }

        if (numbers.length === 6) {
          clearInterval(timeout);
          observer.next(numbers);
          observer.complete();
        }
      }, 100);

    });
  }
}
