import joint from "jointjs";

let Logo = joint.dia.Element.define('examples.Logo',{
        attrs:{
            o: {
                strokeWidth: 1,
                stroke: '#000000',
                fill: 'red'
            },
            i: {
                strokeWidth: 1,
                stroke: '#000000',
                fill: 'green'
            }
        }
},{
    markup : [
        {
            tagName: 'rect',
            selector: 'o'
        },
        {
            tagName:'rect',
            selector: 'i'
        }
    ]
});

export default Logo;