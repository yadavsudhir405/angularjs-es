import Backbone from "backbone";

let Node = Backbone.Model.extend({
        attributes:{
            id:"",
            name:""
        },
        initialize: function(args) {
            console.log("Object got Created "+JSON.stringify(args));
        },
        display: function() {
            console.log("******"+JSON.stringify(this.attributes));
        }
    }
);
let Edge = Backbone.Model.extend({
    attributes:{
        fromNode:"",
        toNode:""
    }
});

let NodeCollection = Backbone.Collection.extend({
    model:Node
});

let EdgeCollection = Backbone.Collection.extend({
    model:Edge
});

let Graph = Backbone.Model.extend({
    initialize: function (attrs, opt) {
        opt = opt || {};
        this.set("nodes",new NodeCollection([]));
        this.set("edges", new EdgeCollection([]))
    },
    addNode: function (node) {
        this.get("nodes").add(node);
    },
    addEdge: function (edge) {
        this.get("edges").add(edge);
    }
});


export {Node,Edge, Graph};