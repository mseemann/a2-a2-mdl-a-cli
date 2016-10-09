import { A2MdlWebpackPage } from './app.po';

describe('a2-mdl-webpack App', function() {
  let page: A2MdlWebpackPage;

  beforeEach(() => {
    page = new A2MdlWebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
