import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarGitHubComponent } from './buscar-git-hub.component';

describe('BuscarGitHubComponent', () => {
  let component: BuscarGitHubComponent;
  let fixture: ComponentFixture<BuscarGitHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarGitHubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarGitHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
