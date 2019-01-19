import joint from "jointjs";

let CustomReact = joint.shapes.standard.Rectangle.define('examples.CustomReact',
    {
        attrs:{
            body:{
                rx: 1, // add a corner radius
                ry: 1,
                strokeWidth: 1,
                fill: 'red'
            },
            label:{
                textAnchor: 'left', // align text to left
                refX: 10, // offset text from right edge of model bbox
                fill: 'white',
                fontSize: 18
            }
        }
    },
    {

    },
    {});

export default CustomReact;