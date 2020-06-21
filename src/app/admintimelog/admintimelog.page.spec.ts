import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdmintimelogPage } from './admintimelog.page';

describe('AdmintimelogPage', () => {
  let component: AdmintimelogPage;
  let fixture: ComponentFixture<AdmintimelogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmintimelogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdmintimelogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
