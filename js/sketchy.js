
//var _gaq=_gaq||[];
//_gaq.push(["_setAccount","UA-86951-7"]);
//_gaq.push(["_trackPageview"]);
//(function(){
//    var a=document.createElement("script");
//    a.type="text/javascript";
//    a.async=true;
//    a.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";
//    (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(a)
//})();

function sketchy(a) {
    this.init(a)
}
sketchy.prototype = {
    context: null,
    prevMouseX: null,
    prevMouseY: null,
    points: null,
    count: null,
    init: function (a) {
        this.context = a;
        this.context.globalCompositeOperation = "source-over";
        this.points = new Array();
        this.count = 0
    },
    destroy: function () {},
    strokeStart: function (b, a) {
        this.prevMouseX = b;
        this.prevMouseY = a
    },
    stroke: function (f, c) {
        var e, b, a, g;
        this.points.push([f, c]);
        this.context.lineWidth = BRUSH_SIZE;
        this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + 0.05 * BRUSH_PRESSURE + ")";
        this.context.beginPath();
        this.context.moveTo(this.prevMouseX, this.prevMouseY);
        this.context.lineTo(f, c);
        this.context.stroke();
        for (e = 0; e < this.points.length; e++) {
            b = this.points[e][0] - this.points[this.count][0];
            a = this.points[e][1] - this.points[this.count][1];
            g = b * b + a * a;
            if (g < 4000 && Math.random() > (g / 2000)) {
                this.context.beginPath();
                this.context.moveTo(this.points[this.count][0] + (b * 0.3), this.points[this.count][1] + (a * 0.3));
                this.context.lineTo(this.points[e][0] - (b * 0.3), this.points[e][1] - (a * 0.3));
                this.context.stroke()
            }
        }
        this.prevMouseX = f;
        this.prevMouseY = c;
        this.count++
    },
    strokeEnd: function () {}
};

var REV = 6,
        BRUSHES = ["sketchy"],
        USER_AGENT = navigator.userAgent,
        SCREEN_WIDTH = window.innerWidth,
        SCREEN_HEIGHT = window.innerHeight,
        BRUSH_SIZE = 1, BRUSH_PRESSURE = 1,
        COLOR = [0, 0, 0],
        //
        STORAGE = window.localStorage,
        brush,
        wacom, i,
        mouseX = 0,
        mouseY = 0,
        container,
        canvas,
        flattenCanvas,
        context,
        shiftKeyIsDown = false,
        altKeyIsDown = false;

init();
function init() {

    container = document.createElement("div");
    document.body.appendChild(container);
    canvas = document.createElement("canvas");
    canvas.width = SCREEN_WIDTH;
    canvas.height = SCREEN_HEIGHT;
    canvas.style.position = 'fixed';
    canvas.style.cursor = "crosshair";
//    canvas.style.background=[255,255,255];
    canvas.style.background = "url(../img/nuevo_fondo.jpg)";
    container.appendChild(canvas);
    context = canvas.getContext("2d");
    flattenCanvas = document.createElement("canvas");
    flattenCanvas.width = SCREEN_WIDTH;
    flattenCanvas.height = SCREEN_HEIGHT;

//    hash=window.location.hash.substr(1,window.location.hash.length);

    brush = eval("new " + BRUSHES[0] + "(context)");

    //    window.addEventListener("mousemove",onWindowMouseMove,false);
    //    window.addEventListener("resize",onWindowResize,false);
    //    window.addEventListener("keydown",onWindowKeyDown,false);
    //    window.addEventListener("keyup",onWindowKeyUp,false);
    //    window.addEventListener("blur",onWindowBlur,false);
    document.addEventListener("mousedown", onDocumentMouseDown, false);
    document.addEventListener("mouseout", onDocumentMouseOut, false);
    canvas.addEventListener("mousedown", onCanvasMouseDown, false);
    canvas.addEventListener("touchstart", onCanvasTouchStart, false);
    onWindowResize(null)
}
function onWindowMouseMove(a) {
    mouseX = a.clientX;
    mouseY = a.clientY
}
function onWindowResize() {
    SCREEN_WIDTH = window.innerWidth;
    SCREEN_HEIGHT = window.innerHeight;

}
function onWindowKeyDown(a) {
    if (shiftKeyIsDown) {
        return
    }
    switch (a.keyCode) {
        case 16:
            shiftKeyIsDown = true;
            break;
        case 18:
            altKeyIsDown = true;
            break;
        case 68:
            if (BRUSH_SIZE > 1) {
                BRUSH_SIZE--
            }
            break;
        case 70:
            BRUSH_SIZE++;
            break
    }
}
function onWindowKeyUp(event) {
    switch (event.keyCode) {
        case 16:
            shiftKeyIsDown = false;
            break;
        case 18:
            altKeyIsDown = false;
            break;
        case 82:
            brush.destroy();
            break
    }
    context.lineCap = BRUSH_SIZE == 1 ? "butt" : "round"
}
function onWindowBlur(a) {
    shiftKeyIsDown = false;
    altKeyIsDown = false
}
function onDocumentMouseDown() {

}
function onDocumentMouseOut() {
    onCanvasMouseUp()
}

function onCanvasMouseDown(b) {
    if (altKeyIsDown) {
        c = flattenCanvas.getContext("2d").getImageData(0, 0, flattenCanvas.width, flattenCanvas.height).data;
        a = (b.clientX + (b.clientY * canvas.width)) * 4;
        return
    }
    BRUSH_PRESSURE = wacom && wacom.isWacom ? wacom.pressure : 1;
    brush.strokeStart(b.clientX, b.clientY);
    window.addEventListener("mousemove", onCanvasMouseMove, false);
    window.addEventListener("mouseup", onCanvasMouseUp, false)
}
function onCanvasMouseMove(a) {
    BRUSH_PRESSURE = wacom && wacom.isWacom ? wacom.pressure : 1;
    brush.stroke(a.clientX, a.clientY)
}
function onCanvasMouseUp() {
    brush.strokeEnd();
    window.removeEventListener("mousemove", onCanvasMouseMove, false);
    window.removeEventListener("mouseup", onCanvasMouseUp, false);
}
function onCanvasTouchStart(a) {
    if (a.touches.length == 1) {
        a.preventDefault();
        brush.strokeStart(a.touches[0].pageX, a.touches[0].pageY);
        window.addEventListener("touchmove", onCanvasTouchMove, false);
        window.addEventListener("touchend", onCanvasTouchEnd, false)
    }
}
function onCanvasTouchMove(a) {
    if (a.touches.length == 1) {
        a.preventDefault();
        brush.stroke(a.touches[0].pageX, a.touches[0].pageY)
    }
}
function onCanvasTouchEnd(a) {
    if (a.touches.length == 0) {
        a.preventDefault();
        brush.strokeEnd();
        window.removeEventListener("touchmove", onCanvasTouchMove, false);
        window.removeEventListener("touchend", onCanvasTouchEnd, false)
    }
}
