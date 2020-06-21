import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QRscannerPage } from './qrscanner.page';

describe('QRscannerPage', () => {
  let component: QRscannerPage;
  let fixture: ComponentFixture<QRscannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QRscannerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QRscannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
