import {customElement, customeElementView} from "./htmlNode"
class SignupController {
    constructor(joint){
        this.draReactangle(joint);
    }
    draReactangle(joint) {
        var graph = new joint.dia.Graph;

        var paper = new joint.dia.Paper({
            el: document.getElementById('diagram-holder'),
            model: graph,
            width: 1500,
            height: 500,
            gridSize: 15,
            drawGrid: true,
            background:{
                color:'rgba(0, 255, 0, 0.3)',

            }
        });

        let e1 = new customElement({
            attrs:{
                rect: {fill: 'red', text: 'Hero',strokeWidth:5}
            },
            position: { x: 80, y: 80 },
            size: { width: 300, height: 100 }
        });
        /*e1.resize(300,100);
        e1.position(100,50);*/
        let e2 = e1.clone();
        e2.translate(500,0);
        e1.addTo(graph);
        e2.addTo(graph);
    }
}
export default SignupController;