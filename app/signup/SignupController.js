import {customElement, customeElementView} from "./htmlNode"
class SignupController {
    constructor(joint){
        this.draReactangle(joint);
        this.joint = joint;
    }
    draReactangle(joint) {
        var graph = new joint.dia.Graph;

        var paper = new joint.dia.Paper({
            el: document.getElementById('diagram-holder'),
            model: graph,
            width: 1500,
            height: 1000,
            gridSize: 15,
            drawGrid: true,
            interactive: true,
            background:{
                color:'rgba(0, 255, 0, 0.3)',

            }
        });
        paper.on('cell:pointerdown', function (cellView) {
            cellView.highlight(null,{
                highlighter: {
                    name: 'stroke',
                    options: {
                        padding: 30,
                        attrs:{
                            'stroke-width': 2,
                        }
                    }
                }
            });
           // cellView.highlight();
        });
        let nodes = this.create11Node();
        let cells = this.createCells(nodes,joint);
        let links = [];
        links.push(this.makeLink(joint,6,7));
        links.push(this.makeLink(joint,7,8));

        links.push(this.makeLink(joint,9,10));
        links.push(this.makeLink(joint,10,11));

        links.push(this.makeLink(joint,12,13));
        links.push(this.makeLink(joint,13,14));

        links.push(this.makeLink(joint,1,6));
        links.push(this.makeLink(joint,2,6));
        links.push(this.makeLink(joint,3,6));
        links.push(this.makeLink(joint,4,6));
        links.push(this.makeLink(joint,5,6));

        links.push(this.makeLink(joint,1,9));
        links.push(this.makeLink(joint,2,9));
        links.push(this.makeLink(joint,3,9));
        links.push(this.makeLink(joint,4,9));
        links.push(this.makeLink(joint,5,9));

        links.push(this.makeLink(joint,1,12));
        links.push(this.makeLink(joint,2,12));
        links.push(this.makeLink(joint,3,12));
        links.push(this.makeLink(joint,4,12));
        links.push(this.makeLink(joint,5,12));


        let ele = graph.getCells();
        ele = ele.concat(cells);
        ele =  ele.concat(links);
        graph.resetCells(ele);
        let rect1 = joint.layout.DirectedGraph.layout(graph,{
            setLinkVertices: false,
            rankDir: 'LR',
            nodeSep:60,
            marginY:40,
            marginX:40,
            setPosition:function (element, glNode) {
                let row = element.attributes.row;
                element.set({
                    position:{
                        x: glNode.x - glNode.width / 2,
                        y: (element.attributes.row === 0 )?  (glNode.y - glNode.height / 2) : row*100
                    }
                });

            }
        });
       /* let computedHeight = graph.getSources()*length*110;
        let paperHeight = rect1.height > computedHeight ? rect1.height : computedHeight;
        let paperwidth = rect1.width > 2000 ? rect1.width : 2000;
        paper.setDimensions(paperwidth, paperHeight > 100 ? paperHeight: 100);*/
       // paper.scaleContentToFit();
    }

    createCells(nodes, joint) {
        let cells = [];
        /*nodes.forEach(node=>{
            cells.push(this.makeRectElement(joint,node.id));
        });*/
        for(let i=1;i<=14;i++ ){
            if(i===6 || i===7 || i=== 8){
                cells.push(this.makeRectElement(joint,nodes[i-1].id,1));
            }else if(i===9 || i===10 || i===11){
                cells.push(this.makeRectElement(joint,nodes[i-1].id,2));
            }else if(i===12 || i===13 || i===14){
                cells.push(this.makeRectElement(joint,nodes[i-1].id,3));
            }
            else{
                cells.push(this.makeRectElement(joint,nodes[i-1].id,0));
            }
        }

        return cells;
    }

    create11Node(joint) {
        let nodes = [];
        for(let i=1;i<=14;i++){
            nodes.push(this.createNode(i))
        }
        return nodes;
    }
    createNode(id){
        let node = {};
        node['id'] = id;
        return node;
    }

    makeLink(joint,parent, child){
        return new joint.dia.Link({
            source:{id: parent},
            target:{id: child},
            router:{name:'manhattan'},
            connector:{name: 'normal'},
            attrs:{
                '.connection': {
                    stroke: '#333333',
                    'stroke-width':1
                },
                '.marker-target':{
                    fill:'#333333',
                    d: 'M 10 0 L 0 5 L 10 10 Z'
                },
                '.link-tools':{
                    display: 'none'
                },
                '.marker-arrowheads': {
                    display: 'none'
                }
            },
            smooth: true
        });
    }
    makeRectElement(joint,id, row) {
        let textColor = 'black';
        let width = 100;
        let height = 32;
        let wrapText = id;
        let rectElement = new joint.shapes.basic.Rect({
            id: id,
            size:{
                width: width,
                height: height
            },
            attrs:{
                text:{text: wrapText, fill: textColor, 'font-size':11, 'font-weight': 'normal'},
                rect:{width: width, height: height, rx: 0, ry: 0, stroke: textColor, strokeWidth: 2
                }
            },
            row: row
        });
        return rectElement;
    }
}
export default SignupController;