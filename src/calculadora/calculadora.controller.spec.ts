import { Test, TestingModule } from '@nestjs/testing';
import { CalculadoraController } from './calculadora.controller';
import { CalculadoraService } from './calculadora.service';

describe('CalculadoraController', () => {
  let controller: CalculadoraController;
  let service: CalculadoraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalculadoraController],
      providers: [CalculadoraService],
    }).compile();

    controller = module.get<CalculadoraController>(CalculadoraController);
    service = module.get<CalculadoraService>(CalculadoraService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Debería sumar dos numeros', () => {
    jest.spyOn(service, 'sumar').mockImplementation(() => 10);
    expect(controller.sumar(4, 6)).toBe(10);
  });

  it('Deberia lanzar error al sumar numeros negativos', () => {
    jest.spyOn(service, 'sumar').mockImplementation(() => {
      throw new Error();
    });
    expect(() => controller.sumar(-1, 8)).toThrow(Error);
  });

  it('Deberia lanzar error al sumar numeros negativos', () => {
    jest.spyOn(service, 'sumar').mockImplementation(() => {
      throw new Error();
    });
    expect(() => controller.sumar(1, -8)).toThrow(Error);
  });
});
