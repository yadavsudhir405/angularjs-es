import {Graph,Node,Edge} from "./Book";
import CustomReact from "./CustomReactangle";
import Logo from "./Logo";
class SignupController {
    constructor(joint){
         this.experimentbackbone();
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

        let logo1 = new joint.shapes.examples.Logo();
        logo1.attr({
            o:{
                refWidth: "100%",
                refHeight: "100%",
                refX:"10%",
                refY:"10%"
            },
            i:{
                refWidth:"100%",
                refHeight:"90%",
                refX:"10%",
                refY:"20%"
            }
        });
        logo1.position(10,30);
        logo1.resize(300, 200);

        let logo2 = logo1.clone();
        logo2.translate(600,0);
        logo1.addTo(graph);
        logo2.addTo(graph);
        let link = new joint.shapes.standard.Link();
        link.source(logo1);
        link.target(logo2);

        link.addTo(graph);

    }
    experimentbackbone(){
        let graph = new Graph();
        let node1 = new Node({id: 1, name: "First Node"});
        let node2 = new Node({id: 2, name: "Second Node"});
        let edge1 = new Edge({fromNode: 1, toNode: 2});
        graph.addNode(node1);
        graph.addNode(node2);
        graph.addEdge(edge1);
        console.log("***" + JSON.stringify(graph));
        console.log(JSON.stringify(graph.attributes))
    }
}
export default SignupController;