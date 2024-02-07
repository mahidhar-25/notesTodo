import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteTitlesComponent } from './note-titles.component';

describe('NoteTitlesComponent', () => {
  let component: NoteTitlesComponent;
  let fixture: ComponentFixture<NoteTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteTitlesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoteTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
