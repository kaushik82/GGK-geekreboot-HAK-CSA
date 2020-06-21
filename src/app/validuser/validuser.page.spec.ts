import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValiduserPage } from './validuser.page';

describe('ValiduserPage', () => {
  let component: ValiduserPage;
  let fixture: ComponentFixture<ValiduserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValiduserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValiduserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
