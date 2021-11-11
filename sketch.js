var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite,
    Bodies = Matter.Bodies;

var engine = Engine.create(),
    world = engine.world;


var render = Render.create({
    element : document.body,
    engine : engine,
    options : {
        width : 2000,
        height : 600,
        wireframes : false,
        background : "#FFE3E3"
    }
});

Render.run(render);


var runner = Runner.create();
Runner.run(runner, engine);



// Create Stacks
var squareStack = Composites.stack(40,60,4,4,0,0,(x,y)=>{
    return Bodies.rectangle(x,y,30,30,{
        render : {
            fillStyle : "#fcba03",
            strokeStyle : "#5a03fc",
            lineWidth : 3,
           
        },
        timeScale : 0.3
    });
})

var trapezoidStack = Composites.stack(950,60,5,4,0,0,(x,y)=>{
    return Bodies.trapezoid(x,y,50,55,0.7,{
        render:{
            fillStyle : "#fc0522",
            strokeStyle : "#0905fc",
            lineWidth : 3
        },
        timeScale : 0.2
    });
})

var triangleStack = Composites.pyramid(1280,60,11,6,0,0,(x,y)=>{
    return Bodies.polygon(x,y,3,20,{
        render:{
            fillStyle : "#17f502",
            strokeStyle : "#f57702",
            lineWidth : 3
        },
        timeScale : 0.2
    });
})
var circleStack = Composites.stack(280,60,4,5,0,0,(x,y)=>{
    return Bodies.circle(x,y,20,{
        render:{
            fillStyle : "#02eef2",
            strokeStyle : "#0251ed",
            lineWidth : 3
        },
        timeScale : 0.2
    });
})
var octagonStack = Composites.pyramid(530,60,11,6,0,0,(x,y)=>{
    return Bodies.polygon(x,y,8,20,{
        render:{
            fillStyle : "#00ed77",
            strokeStyle : "#ce00ed",
            lineWidth : 3
        },
        timeScale : 0.2
    });
})
var quardrilateralStack = Composites.pyramid(1650,60,5,10,0,0,(x,y)=>{
    return Bodies.trapezoid(x,y,60,50,0.3,{
        render:{
            fillStyle : "#01080d",
            strokeStyle : "white",
            lineWidth : 3
        },
        timeScale : 0.2
    });
})



// Create ground
var ground = Bodies.rectangle(1000,590,2100,20,{isStatic:true})

Composite.add(world, [ground,squareStack,trapezoidStack,triangleStack,circleStack,octagonStack,quardrilateralStack]);


var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });

Composite.add(world, mouseConstraint);


render.mouse = mouse;
