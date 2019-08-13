import { TestBed } from '@angular/core/testing';

import { AuthGuradService } from './auth-gurad.service';

describe('AuthGuradService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGuradService = TestBed.get(AuthGuradService);
    expect(service).toBeTruthy();
  });
});
