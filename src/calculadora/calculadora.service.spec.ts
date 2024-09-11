import { Test, TestingModule } from '@nestjs/testing';
import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculadoraService],
    }).compile();

    service = module.get<CalculadoraService>(CalculadoraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('sumar 1 + 2 resulta 3', () => {
    expect(service.sumar(1, 2)).toBe(3);
  });

  it('lanza error al sumar números negativos', () => {
    expect(() => service.sumar(-1, 2)).toThrow(
      'No se permiten números negativos',
    );
    expect(() => service.sumar(1, -2)).toThrow(
      'No se permiten números negativos',
    );
  });

  it('restar 25 - 40 resulta 15', () => {
    expect(service.restar(25, 40)).toBe(15);
  });

  it('lanza error al restar números negativos', () => {
    expect(() => service.restar(-1, 2)).toThrow(
      'No se permiten números negativos',
    );
    expect(() => service.restar(1, -2)).toThrow(
      'No se permiten números negativos',
    );
  });

  it('multiplicar 2 x 15 resulta 30', () => {
    expect(service.multiplicar(2, 15)).toBe(30);
  });

  it('lanza error al multiplicar números negativos', () => {
    expect(() => service.multiplicar(-1, 2)).toThrow(
      'No se permiten números negativos',
    );
    expect(() => service.multiplicar(1, -2)).toThrow(
      'No se permiten números negativos',
    );
  });

  it('dividir 20 / 10 resulta 2', () => {
    expect(service.dividir(20, 10)).toBe(2);
  });

  it('lanza error al dividir entre cero', () => {
    expect(() => service.dividir(20, 0)).toThrow(
      'El divisor no puede ser cero',
    );
  });

  it('lanza error al dividir números negativos', () => {
    expect(() => service.dividir(-1, 2)).toThrow(
      'No se permiten números negativos',
    );
    expect(() => service.dividir(1, -2)).toThrow(
      'No se permiten números negativos',
    );
  });
});
