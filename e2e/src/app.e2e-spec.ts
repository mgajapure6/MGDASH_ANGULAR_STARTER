import { MgdashPage } from "./app.po";
import { browser, logging } from "protractor";

describe("Mgdash App", () => {
    let page: MgdashPage;

    beforeEach(() => {
        page = new MgdashPage();
    });

    it("should display welcome message", () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual("Welcome to Mgdash!");
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(
            jasmine.objectContaining({
                level: logging.Level.SEVERE,
            } as logging.Entry)
        );
    });
});
