import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValoreNutrizionalePage } from './valore-nutrizionale.page';

describe('ValoreNutrizionalePage', () => {
  let component: ValoreNutrizionalePage;
  let fixture: ComponentFixture<ValoreNutrizionalePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ValoreNutrizionalePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValoreNutrizionalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
