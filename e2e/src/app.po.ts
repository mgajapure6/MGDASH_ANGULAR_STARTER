import { browser, by, element } from "protractor";

export class MgdashPage {
    navigateTo(): Promise<any> {
        return browser.get("/") as Promise<any>;
    }

    getParagraphText(): Promise<string> {
        return element(by.css("app #main")).getText() as Promise<string>;
    }
}
