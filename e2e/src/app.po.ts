import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(s: string): Promise<unknown> {
    return browser.get(browser.baseUrl + s);
  }

  getText(s: string): Promise<unknown>{
    return element(by.css(s)).getText() as Promise<string>;
  }
}
