import { Sample1Page } from './app.po';

describe('sample1 App', () => {
  let page: Sample1Page;

  beforeEach(() => {
    page = new Sample1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
