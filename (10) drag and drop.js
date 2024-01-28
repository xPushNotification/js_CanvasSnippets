

//> drag & drop:
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    let cw = canvas.width;
    let ch = canvas.height;

    let offsetX = null;
    let offsetY = null;

    //
    // relate canvas to the window:
    function reOffset()
    {
        let BB = canvas.getBoundingClientRect();
        offsetX = BB.left;
        offsetY = BB.top;

    } //f:reOffset

    reOffset();
    window.onscroll = function(e) {reOffset();}
    window.onresize = function(e) {reOffset();}
    window.onresize = function(e) {reOffset();}

    //
    // logic representation of the shapes and dragging:
    let shapes = [];
    shapes.push( {x:30,  y:30, width:75, height:50, color:'blue'}  );
    shapes.push( {x:100, y:20, width:60, height:75, color:'red'}  );

    let isDragging = false;
    let startX = -1;
    let startY = -1;
    let selectedShapeIndex = -1;

    //
    // drawing routine:
    function drawAll()
    {
        ctx.clearRect(0,0,cw,ch);
        for(let i=0; i<shapes.length; i++)
        {
            let shape = shapes[i];

            ctx.fillStyle = shape.color;
            ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
        }

    } //f:drawAll
    drawAll();

    //
    // определение мыши в фигуре:
    function isMouseInShape(mx, my, shape)
    {
        let rLeft = shape.x;
        let rRight = shape.x + shape.width;
        let rTop = shape.y;
        let rBott = shape.y + shape.height;

        if(mx>rLeft && mx<rRight && my>rTop && my<rBott) {return true;}
        return false;

    } //f:isMouseInShape

    //
    // mouse events:
    function handleMouseDown(e)
    {
        e.preventDefault();
        e.stopPropagation();

        startX = parseInt(e.clientX-offsetX);
        startY = parseInt(e.clientY-offsetY);

        for(let i=0; i<shapes.length; i++)
        {
            if(isMouseInShape(startX, startY, shapes[i]))
            {
                selectedShapeIndex = i;
                isDragging = true;
                return;
            }
        }

    } //f:handleMouseDown

    function handleMouseUp(e)
    {
        if(!isDragging) {return;}

        e.preventDefault();
        e.stopPropagation();

        isDragging = false;

    } //f:handleMouseUp

    function handleMouseOut(e)
    {
        if(!isDragging) {return;}

        e.preventDefault();
        e.stopPropagation();

        isDragging = false;

    } //f:handleMouseOut

    function handleMouseMove(e)
    {
        if(!isDragging) {return;}

        e.preventDefault();
        e.stopPropagation();

        mouseX = parseInt(e.clientX - offsetX);
        mouseY = parseInt(e.clientY - offsetY);

        let dx = mouseX - startX;
        let dy = mouseY - startY;

        let selectedShape = shapes[selectedShapeIndex];
        selectedShape.x += dx;
        selectedShape.y += dy;

        drawAll();

        startX = mouseX;
        startY = mouseY;

    } //f:handleMouseMove

    canvas.onmousedown = handleMouseDown;
    canvas.onmousemove = handleMouseMove;
    canvas.onmouseup = handleMouseUp;
    canvas.onmouseout = handleMouseOut;

} //if:example