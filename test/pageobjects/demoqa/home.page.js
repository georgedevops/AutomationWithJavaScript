import BasePage from "./base.page";

class HomePage extends BasePage {
    open() {
        return super.open("");
    }

    get widgetsCard() {
        return $('//h5[contains(text(), "Widgets")]');
    }
}

export default new HomePage();