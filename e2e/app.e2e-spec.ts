import { StockManagementPage } from './app.po';

describe('stock-management App', () => {
  let page: StockManagementPage;

  beforeEach(() => {
    page = new StockManagementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
