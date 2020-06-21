import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenerateQRcodePage } from './generate-qrcode.page';

describe('GenerateQRcodePage', () => {
  let component: GenerateQRcodePage;
  let fixture: ComponentFixture<GenerateQRcodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateQRcodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenerateQRcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
