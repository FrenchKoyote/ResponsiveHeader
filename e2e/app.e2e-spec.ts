import { ResponsiveHeaderPage } from './app.po';

describe('responsive-header App', () => {
  let page: ResponsiveHeaderPage;

  beforeEach(() => {
    page = new ResponsiveHeaderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
