import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should return string data as 'Hello World!'", () => {
    let data = service.getSimpleData();
    expect(data).toEqual('Hello World!');
  });

  it("should return promise data as 'Promise data'", async () => {
    const result = await service.getPromiseData();
    expect(result).toContain('Promise data');
  });

  it("should return observable data as 'Observable data'", () => {
    service.getObservableData().subscribe((data) => {
      expect(data).toEqual('Observable data');
    });
  });
});
