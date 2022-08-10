import { MyhoverbtnDirective } from './myhoverbtn.directive';

describe('MyhoverbtnDirective', () => {
  it('should create an instance', () => {
    let elRefMock = {
      nativeElement: document.createElement('div')
    };
    const directive = new MyhoverbtnDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
