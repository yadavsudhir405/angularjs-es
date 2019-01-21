import joint from "jointjs";
import $ from "jquery";

joint.shapes.html = {};
let customElement = joint.shapes.html.Element = joint.shapes.basic.Rect.extend({
    defaults: joint.util.deepSupplement({
        type: 'html.Element'
    }, joint.shapes.basic.Rect.prototype.defaults)
});

let customeElementView = joint.shapes.html.ElementView = joint.dia.ElementView.extend({
    template: [
        '<div class="html-view-header">',
        '<label></label>',
        '</div>'
    ].join(''),
    initialize: function () {
        _.bindAll(this, 'updateBox');
        joint.dia.ElementView.prototype.initialize.apply(this, arguments);

        this.$box = $(_.template(this.template)());
        this.model.on('change', this.updateBox, this);
        this.updateBox();
    },
    render: function() {
        joint.dia.ElementView.prototype.render.apply(this, arguments);
        this.paper.$el.prepend(this.$box);
        this.updateBox();
        return this;
    },
    updateBox: function() {
        // Set the position and dimension of the box so that it covers the JointJS element.
        var bbox = this.model.getBBox();
            this.$box.find('label').html(this.model.get("label"));
        // Example of updating the HTML with a data stored in the cell model.
        this.$box.css({
            width: bbox.width,
            height: bbox.height,
            left: bbox.x,
            top: bbox.y,
            transform: 'rotate(' + (this.model.get('angle') || 0) + 'deg)'
        });
    }
});

export {customElement, customeElementView};