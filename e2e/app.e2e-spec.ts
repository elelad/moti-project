import { MotiProjectPage } from './app.po';

describe('moti-project App', function() {
  let page: MotiProjectPage;

  beforeEach(() => {
    page = new MotiProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
