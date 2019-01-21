import {customElement, customeElementView} from "./htmlNode"
class SignupController {
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
                rect: {fill: 'white', text: 'Hero',strokeWidth:5},

            },
            label: "<i class=\"far fa-clock fa-3x breach\"></i>"
            //position: { x: 80, y: 80 },
            //size: { width: 300, height: 100 }
        });
        e1.resize(300,180);
        e1.position(100,50);
        let e2 = e1.clone();
        e2.set({
            label: "<i class=\"fas fa-check fa-1x su\"></i>"
        }
    );
        e2.translate(500,0);
        let e3 = e2.clone();
        e3.translate(500,0);
        e1.addTo(graph);
        e2.addTo(graph);
        e3.addTo(graph);
        let link = new joint.shapes.standard.Link();
        let link1 = new joint.shapes.standard.Link();
        link.source(e1);
        link.target(e2);

        link1.source(e2);
        link1.target(e3);

        link.addTo(graph);
        link1.addTo(graph);

    }
    constructor(joint){
        this.draReactangle(joint);
    }
}
export default SignupController;