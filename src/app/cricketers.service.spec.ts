import { TestBed, inject } from '@angular/core/testing';

import { CricketersService } from './cricketers.service';

describe('CricketersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CricketersService]
    });
  });

  it('should be created', inject([CricketersService], (service: CricketersService) => {
    expect(service).toBeTruthy();
  }));
});
