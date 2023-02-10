function move_img(str) {
    var step=100;
    switch(str){
    case "down":
    var x=document.getElementById('i1').offsetTop;
    x= x + step;
    document.getElementById('i1').style.top= x + "px";
    break;
    
    case "up":
    var x=document.getElementById('i1').offsetTop;
    x= x -step;
    document.getElementById('i1').style.top= x + "px";
    break;
    
    case "left":
    var y=document.getElementById('i1').offsetLeft;
    y= y - step;
    document.getElementById('i1').style.left= y + "px";
    break;
    
    case "right":
    var y=document.getElementById('i1').offsetLeft;
    y= y + step;
    document.getElementById('i1').style.left= y + "px";
    break;
    }
    }