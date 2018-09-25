import headerTemplate from "./header.html";
class AppHeader {
    constructor(){
        this.template = headerTemplate;
    }
    static directiveFactory(){
        AppHeader.instance = new AppHeader();
        return AppHeader.instance;
    }
}
export default AppHeader.directiveFactory;

