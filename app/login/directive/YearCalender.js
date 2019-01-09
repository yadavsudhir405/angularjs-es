import yearCalendarHtml from "../template/YearCalendarTemplate.html";
class YearCalender {
    constructor(){
        this.restrict = "E";
        this.template = yearCalendarHtml;
    }
    link(scope){

    }
    static directiveFactory(){
        YearCalender.instance = new YearCalender();
        return YearCalender.instance;
    }
}
export default YearCalender.directiveFactory;