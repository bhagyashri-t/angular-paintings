import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingDialogComponent } from './painting-dialog.component';

describe('PaintingDialogComponent', () => {
  let component: PaintingDialogComponent;
  let fixture: ComponentFixture<PaintingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintingDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
