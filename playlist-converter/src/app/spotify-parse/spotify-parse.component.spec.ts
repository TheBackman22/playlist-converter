import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyParseComponent } from './spotify-parse.component';

describe('SpotifyParseComponent', () => {
  let component: SpotifyParseComponent;
  let fixture: ComponentFixture<SpotifyParseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotifyParseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyParseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
