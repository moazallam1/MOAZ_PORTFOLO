import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  animateCounter(
    getter: () => number,
    setter: (value: number) => void,
    targetValue: number,
    increment: number = 1,
    duration: number = 30
  ): void {
    const interval = setInterval(() => {
      const currentValue = getter();
      if (currentValue < targetValue) {
        setter(Math.min(currentValue + increment, targetValue));
      } else {
        clearInterval(interval);
      }
    }, duration);
  }

  animateCounters(
    counters: Array<{
      getter: () => number;
      setter: (value: number) => void;
      target: number;
      increment?: number;
      duration?: number;
    }>
  ): void {
    counters.forEach(counter => {
      this.animateCounter(
        counter.getter,
        counter.setter,
        counter.target,
        counter.increment || 1,
        counter.duration || 30
      );
    });
  }
}
