import BasePage from "./base.page";

class WidgetsPage extends BasePage {
    open() {
        return super.open("widgets");
    }

    get title() {
        return $('div.main-header');
    }

    get accordianLink() {
        return $('//span[contains(text(), "Accordian")]');
    }
    
    get tabsLink() {
        return $('//span[contains(text(), "Tabs")]');
    }

    get activePanel() {
        return $('.collapse.show div');
    }

    get activeTab() {
        return $('.nav-item.nav-link.active');
    }
    
    get tabWhatBody() {
        return $('#demo-tabpane-what');
    }

    get tabOrigin() {
        return $('#demo-tab-origin');
    }

    get tabOriginBody() {
        return $('#demo-tabpane-origin');
    }

    get tabUse() {
        return $('#demo-tab-use');
    }

    get tabUseBody() {
        return $('#demo-tabpane-use');
    }

    get tabMore() {
        return $('#demo-tab-more');
    }   
}

export default new WidgetsPage();