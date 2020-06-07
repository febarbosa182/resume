import { AppPage } from "./app.po";
import { browser, logging } from "protractor";

export const getCurrentRouteUrl = () =>
  browser.getCurrentUrl().then(url => url.substr(url.lastIndexOf("/") + 1));

describe("workspace-project App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should display welcome message", () => {
    page.navigateTo();
    expect(getCurrentRouteUrl()).toEqual("");
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});
