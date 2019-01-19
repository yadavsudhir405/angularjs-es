import {Graph,Node,Edge} from "./Book";
class SignupController {
    constructor(joint){
         this.experimentbackbone();
        this.draReactangle(joint);
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
    }
    draReactangle(joint) {
        var graph = new joint.dia.Graph;

        var paper = new joint.dia.Paper({
            el: document.getElementById('diagram-holder'),
            model: graph,
            width: 600,
            height: 100,
            gridSize: 1
        });

        var rect = new joint.shapes.standard.Rectangle();
        rect.position(100, 30);
        rect.resize(100, 40);
        rect.attr({
            body: {
                fill: 'blue'
            },
            label: {
                text: 'Hello',
                fill: 'white'
            }
        });
        rect.addTo(graph);

        var rect2 = rect.clone();
        rect2.translate(300, 0);
        rect2.attr('label/text', 'World!');
        rect2.addTo(graph);

        var link = new joint.shapes.standard.Link();
        link.source(rect);
        link.target(rect2);
        link.addTo(graph);
    }
}
export default SignupController;