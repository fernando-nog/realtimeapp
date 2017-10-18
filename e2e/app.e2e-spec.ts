import { RealtimeappPage } from './app.po';

describe('realtimeapp App', function() {
  let page: RealtimeappPage;

  beforeEach(() => {
    page = new RealtimeappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
