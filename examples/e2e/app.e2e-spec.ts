import { ExamplesPage } from './app.po';

describe('examples App', () => {
  let page: ExamplesPage;

  beforeEach(() => {
    page = new ExamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
