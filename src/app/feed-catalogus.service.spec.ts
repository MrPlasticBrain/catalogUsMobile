import { TestBed, inject } from '@angular/core/testing';

import { FeedCatalogusService } from './feed-catalogus.service';

describe('FeedCatalogusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedCatalogusService]
    });
  });

  it('should be created', inject([FeedCatalogusService], (service: FeedCatalogusService) => {
    expect(service).toBeTruthy();
  }));
});
