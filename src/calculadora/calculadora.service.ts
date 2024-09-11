import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculadoraService {
  sumar(sumando1: number, sumando2: number): number {
    if (sumando1 < 0 || sumando2 < 0) {
      throw new Error('No se permiten números negativos');
    }
    return sumando1 + sumando2;
  }
  restar(minuendo: number, sustraendo: number): number {
    if (minuendo < 0 || sustraendo < 0) {
      throw new Error('No se permiten números negativos');
    }
    return Math.abs(minuendo - sustraendo);
  }

  multiplicar(multiplicando: number, multiplicador: number): number {
    if (multiplicando < 0 || multiplicador < 0) {
      throw new Error('No se permiten números negativos');
    }
    return multiplicando * multiplicador;
  }

  dividir(dividendo: number, divisor: number): number {
    if (divisor === 0) {
      throw new Error('El divisor no puede ser cero');
    }
    if (dividendo < 0 || divisor < 0) {
      throw new Error('No se permiten números negativos');
    }
    return dividendo / divisor;
  }
}
