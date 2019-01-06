import codeMirrorDirectiveTemplate from "../template/CodeMirrorFormulaTemplate.html";
import * as CodeMirror from "codemirror";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/lint/javascript-lint";
class CodeMirrorFormulaDirective {
    constructor(){
        this.restrict ="AEC";
        this.require = "ngModel";
        this.template = codeMirrorDirectiveTemplate;
        this.scope = {

        }
    }
    link(scope, element, attrs, ngModel ){
        const textArea = element.find("textarea")[0];
        this.codeMirror =  CodeMirror.fromTextArea(textArea,{
            lineNumbers: true,
            mode: "javascript",
            gutters: ["CodeMirror-linenumbers",""],
            value: "My Test"
        });

    }

    static directiveFactory(){
        CodeMirrorFormulaDirective.instance =  new CodeMirrorFormulaDirective();
        return CodeMirrorFormulaDirective.instance;
    }
}

export default CodeMirrorFormulaDirective.directiveFactory;