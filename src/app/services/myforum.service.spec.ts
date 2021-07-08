import { TestBed } from '@angular/core/testing';

import { MyforumService } from './myforum.service';

describe('MyforumService', () => {
  let service: MyforumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyforumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
