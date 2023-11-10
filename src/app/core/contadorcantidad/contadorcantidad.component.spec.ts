import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContadorCantidadComponent1 } from './contadorcantidad.component';

describe('ContadorcantidadComponent', () => {
  let component: ContadorCantidadComponent1;
  let fixture: ComponentFixture<ContadorCantidadComponent1>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContadorCantidadComponent1 ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContadorCantidadComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
