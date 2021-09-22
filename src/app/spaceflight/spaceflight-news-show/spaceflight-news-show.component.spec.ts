import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceflightNewsShowComponent } from './spaceflight-news-show.component';

describe('SpaceflightNewsShowComponent', () => {
  let component: SpaceflightNewsShowComponent;
  let fixture: ComponentFixture<SpaceflightNewsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceflightNewsShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceflightNewsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
