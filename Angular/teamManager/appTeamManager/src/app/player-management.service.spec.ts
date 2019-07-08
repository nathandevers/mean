import { TestBed } from '@angular/core/testing';

import { PlayerManagementService } from './player-management.service';

describe('PlayerManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerManagementService = TestBed.get(PlayerManagementService);
    expect(service).toBeTruthy();
  });
});
