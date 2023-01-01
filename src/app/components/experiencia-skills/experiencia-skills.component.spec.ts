import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaSkillsComponent } from './experiencia-skills.component';

describe('ExperienciaSkillsComponent', () => {
  let component: ExperienciaSkillsComponent;
  let fixture: ComponentFixture<ExperienciaSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
