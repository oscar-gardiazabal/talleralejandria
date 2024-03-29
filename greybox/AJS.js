if(!window.AJS){
    var AJS={
        BASE_URL:"",
        ajaxErrorHandler:null,
        getQueryArgument:function(f){
            var b=window.location.search.substring(1);
            var c=b.split("&");
            for(var a=0;a<c.length;a++){
                var d=c[a].split("=");
                if(d[0]==f){
                    return d[1]
                    }
                }
            return null
        },
    _agent:navigator.userAgent.toLowerCase(),
    _agent_version:navigator.productSub,
    isIe:function(){
        return(AJS._agent.indexOf("msie")!=-1&&AJS._agent.indexOf("opera")==-1)
        },
    isIe8:function(){
        return AJS._agent.indexOf("msie 8")!=-1
        },
    isSafari:function(a){
        if(a){
            return AJS._agent.indexOf("khtml")
            }
            return(AJS._agent.indexOf("khtml")!=-1&&AJS._agent.match(/3\.\d\.\d safari/)==null)
        },
    isOpera:function(){
        return AJS._agent.indexOf("opera")!=-1
        },
    isMozilla:function(){
        return(AJS._agent.indexOf("gecko")!=-1&&AJS._agent_version>=20030210)
        },
    isMac:function(){
        return(AJS._agent.indexOf("macintosh")!=-1)
        },
    isCamino:function(){
        return(AJS._agent.indexOf("camino")!=-1)
        },
    createArray:function(a){
        if(AJS.isArray(a)&&!AJS.isString(a)){
            return a
            }else{
            if(!a){
                return[]
                }else{
                return[a]
                }
            }
    },
forceArray:function(a){
    var c=[];
    for(var b=0;b<a.length;b++){
        c.push(a[b])
        }
        return c
    },
join:function(d,b){
    try{
        return b.join(d)
        }catch(c){
        var a=b[0]||"";
        AJS.map(b,function(f){
            a+=d+f
            },1);
        return a+""
        }
    },
isIn:function(c,b){
    var a=AJS.getIndex(c,b);
    if(a!=-1){
        return true
        }else{
        return false
        }
    },
getIndex:function(d,b,c){
    for(var a=0;a<b.length;a++){
        if(c&&c(b[a])||d==b[a]){
            return a
            }
        }
    return -1
},
getFirst:function(a){
    if(a.length>0){
        return a[0]
        }else{
        return null
        }
    },
getLast:function(a){
    if(a.length>0){
        return a[a.length-1]
        }else{
        return null
        }
    },
getRandom:function(a){
    return a[Math.floor(Math.random()*a.length)]
    },
update:function(b,a){
    for(var c in a){
        b[c]=a[c]
        }
        return b
    },
flattenList:function(g){
    var f=false;
    var a=[];
    for(var b=0;b<g.length;b++){
        var h=g[b];
        if(AJS.isArray(h)){
            f=true;
            break
        }
        if(h!=null){
            a.push(h)
            }
        }
    if(!f){
    return a
    }
    var c=[];
var d=function(j,i){
    AJS.map(i,function(l){
        if(l==null){}else{
            if(AJS.isArray(l)){
                d(j,l)
                }else{
                j.push(l)
                }
            }
    })
};

d(c,g);
return c
},
flattenElmArguments:function(a){
    return AJS.flattenList(AJS.forceArray(a))
    },
map:function(g,f,b,d){
    var c=0,a=g.length;
    if(b){
        c=b
        }
        if(d){
        a=d
        }
        for(c;c<a;c++){
        var h=f(g[c],c);
        if(h!=undefined){
            return h
            }
        }
    },
rmap:function(d,c){
    var b=d.length-1,a=0;
    for(b;b>=a;b--){
        var f=c.apply(null,[d[b],b]);
        if(f!=undefined){
            return f
            }
        }
    },
filter:function(f,c,a,b){
    var d=[];
    AJS.map(f,function(g){
        if(c(g)){
            d.push(g)
            }
        },a,b);
return d
},
partial:function(b){
    var a=AJS.$FA(arguments);
    a.shift();
    return function(){
        a=a.concat(AJS.$FA(arguments));
        return b.apply(window,a)
        }
    },
getElement:function(a){
    if(AJS.isString(a)||AJS.isNumber(a)){
        return document.getElementById(a)
        }else{
        return a
        }
    },
getElements:function(){
    var a=AJS.flattenElmArguments(arguments);
    var d=new Array();
    for(var c=0;c<a.length;c++){
        var b=AJS.getElement(a[c]);
        d.push(b)
        }
        return d
    },
getElementsByTagAndClassName:function(a,b,n,h){
    var g=[];
    if(!AJS.isDefined(n)){
        n=document
        }
        if(!AJS.isDefined(a)){
        a="*"
        }
        var f,d;
    if(b&&document.getElementsByClassName){
        var c=n.getElementsByClassName(b);
        if(a=="*"){
            g=AJS.forceArray(c)
            }else{
            var m=c.length;
            for(f=0;f<m;f++){
                if(c[f].nodeName.toLowerCase()==a){
                    g.push(c[f])
                    }
                }
            }
    }else{
    var c=n.getElementsByTagName(a);
    if(!b){
        g=AJS.forceArray(c)
        }else{
        var m=c.length;
        var l=new RegExp("(^|\\s)"+b+"(\\s|$)");
        for(f=0;f<m;f++){
            if(l.test(c[f].className)||!b){
                g.push(c[f])
                }
            }
        }
}
if(h){
    return g[0]
    }else{
    return g
    }
},
nodeName:function(a){
    return a.nodeName.toLowerCase()
    },
_nodeWalk:function(g,d,b,f){
    var c=f(g);
    var a;
    if(d&&b){
        a=function(h){
            return AJS.nodeName(h)==d&&AJS.hasClass(h,b)
            }
        }else{
    if(d){
        a=function(h){
            return AJS.nodeName(h)==d
            }
        }else{
    a=function(h){
        return AJS.hasClass(h,b)
        }
    }
}
if(a(g)){
    return g
    }while(c){
    if(a(c)){
        return c
        }
        c=f(c)
    }
    return null
},
getParentBytc:function(c,b,a){
    return AJS._nodeWalk(c,b,a,function(d){
        if(d){
            return d.parentNode
            }
        })
},
getChildBytc:function(d,c,b){
    var a=AJS.$bytc(c,b,d);
    if(a.length>0){
        return a[0]
        }else{
        return null
        }
    },
hasParent:function(c,b,a){
    if(c==b){
        return true
        }
        if(a==0){
        return false
        }
        return AJS.hasParent(c.parentNode,b,a-1)
    },
getPreviousSiblingBytc:function(c,b,a){
    return AJS._nodeWalk(c,b,a,function(d){
        return d.previousSibling
        })
    },
getNextSiblingBytc:function(c,b,a){
    return AJS._nodeWalk(c,b,a,function(d){
        return d.nextSibling
        })
    },
getBody:function(){
    return AJS.$bytc("body")[0]
    },
getFormElement:function(c,a){
    c=AJS.$(c);
    var b=null;
    AJS.map(c.elements,function(d){
        if(d.name&&d.name==a){
            b=d
            }
        });
if(b){
    return b
    }
    AJS.map(AJS.$bytc("select",null,c),function(d){
    if(d.name&&d.name==a){
        b=d
        }
    });
return b
},
getSelectValue:function(a){
    var a=AJS.$(a);
    return a.options[a.selectedIndex].value
    },
documentInsert:function(a){
    if(typeof(a)=="string"){
        a=AJS.HTML2DOM(a)
        }
        document.write('<span id="dummy_holder"></span>');
    AJS.swapDOM(AJS.$("dummy_holder"),a)
    },
appendChildNodes:function(a){
    if(arguments.length>=2){
        AJS.map(arguments,function(b){
            if(AJS.isString(b)){
                b=AJS.TN(b)
                }
                if(AJS.isDefined(b)){
                a.appendChild(b)
                }
            },1)
    }
    return a
},
appendToTop:function(d){
    var b=AJS.flattenElmArguments(arguments).slice(1);
    if(b.length>=1){
        var c=d.firstChild;
        if(c){
            while(true){
                var a=b.shift();
                if(a){
                    AJS.insertBefore(a,c)
                    }else{
                    break
                }
            }
        }else{
    AJS.ACN.apply(null,arguments)
    }
}
return d
},
replaceChildNodes:function(b){
    var a;
    while((a=b.firstChild)){
        AJS.swapDOM(a,null)
        }
        if(arguments.length<2){
        return b
        }else{
        return AJS.appendChildNodes.apply(null,arguments)
        }
        return b
    },
insertAfter:function(b,a){
    a.parentNode.insertBefore(b,a.nextSibling);
    return b
    },
insertBefore:function(b,a){
    a.parentNode.insertBefore(b,a);
    return b
    },
swapDOM:function(a,c){
    a=AJS.getElement(a);
    var b=a.parentNode;
    if(c){
        c=AJS.getElement(c);
        b.replaceChild(c,a)
        }else{
        b.removeChild(a)
        }
        return c
    },
removeElement:function(){
    var a=AJS.flattenElmArguments(arguments);
    try{
        AJS.map(a,function(c){
            if($(c)){
                AJS.swapDOM(c,null)
                }
            })
    }catch(b){}
},
createDOM:function(f,d){
    var g=0,a;
    var l=document.createElement(f);
    var b=d[0];
    if(AJS.isDict(d[g])){
        for(k in b){
            a=b[k];
            if(k=="style"||k=="s"){
                l.style.cssText=a
                }else{
                if(k=="c"||k=="class"||k=="className"){
                    l.className=a
                    }else{
                    l.setAttribute(k,a)
                    }
                }
        }
        g++
}
if(b==null){
    g=1
    }
    for(var c=g;c<d.length;c++){
    var a=d[c];
    if(a){
        var h=typeof(a);
        if(h=="string"||h=="number"){
            a=AJS.TN(a)
            }
            l.appendChild(a)
        }
    }
return l
},
_createDomShortcuts:function(){
    var b=["ul","li","td","tr","th","tbody","table","input","span","b","a","div","img","button","h1","h2","h3","h4","h5","h6","br","textarea","form","p","select","option","optgroup","iframe","script","center","dl","dt","dd","small","pre","i","label","thead"];
    var a=function(c){
        AJS[c.toUpperCase()]=function(){
            return AJS.createDOM.apply(null,[c,arguments])
            }
        };
    
AJS.map(b,a);
AJS.TN=function(c){
    return document.createTextNode(c)
    }
},
setHTML:function(){
    var a=AJS.flattenElmArguments(arguments);
    var b=a.pop();
    AJS.map(a,function(c){
        if(c){
            c.innerHTML=b
            }
        });
return a[0]
},
setVisibility:function(){
    var a=AJS.flattenElmArguments(arguments);
    var b=a.pop()&&"visible"||"hidden";
    AJS.setStyle(a,"visibility",b)
    },
showElement:function(){
    AJS.setStyle(AJS.flattenElmArguments(arguments),"display","")
    },
hideElement:function(a){
    AJS.setStyle(AJS.flattenElmArguments(arguments),"display","none")
    },
isElementHidden:function(a){
    return((a.style.display=="none")||(a.style.visibility=="hidden"))
    },
isElementShown:function(a){
    return !AJS.isElementHidden(a)
    },
setStyle:function(){
    var b=AJS.flattenElmArguments(arguments);
    var d=b.pop();
    var a=["top","left","right","width","height"];
    if(AJS.isObject(d)){
        AJS.map(b,function(f){
            AJS.map(AJS.keys(d),function(h){
                var g=d[h];
                if(AJS.isIn(h,a)){
                    g=AJS.isString(g)&&g||g+"px"
                    }
                    f.style[h]=g
                })
            })
        }else{
        var c=b.pop();
        AJS.map(b,function(f){
            if(AJS.isIn(c,a)){
                d=AJS.isString(d)&&d||d+"px"
                }
                f.style[c]=d
            })
        }
    },
__cssDim:function(a,b){
    var a=AJS.$FA(a);
    a.splice(a.length-1,0,b);
    AJS.setStyle.apply(null,a)
    },
setWidth:function(){
    return AJS.__cssDim(arguments,"width")
    },
setHeight:function(){
    return AJS.__cssDim(arguments,"height")
    },
setLeft:function(){
    return AJS.__cssDim(arguments,"left")
    },
setRight:function(){
    return AJS.__cssDim(arguments,"right")
    },
setTop:function(){
    return AJS.__cssDim(arguments,"top")
    },
setClass:function(){
    var a=AJS.flattenElmArguments(arguments);
    var b=a.pop();
    AJS.map(a,function(c){
        c.className=b
        })
    },
addClass:function(){
    var b=AJS.flattenElmArguments(arguments);
    var a=b.pop();
    var c=function(d){
        if(!new RegExp("(^|\\s)"+a+"(\\s|$)").test(d.className)){
            d.className+=(d.className?" ":"")+a
            }
        };
    
AJS.map(b,function(d){
    c(d)
    })
},
hasClass:function(c,a){
    if(!c||!c.className){
        return false
        }
        var b=c.className;
    return(b.length>0&&(b==a||new RegExp("(^|\\s)"+a+"(\\s|$)").test(b)))
    },
removeClass:function(){
    var c=AJS.flattenElmArguments(arguments);
    var a=c.pop();
    var b=function(d){
        d.className=d.className.replace(new RegExp("(^|\\s)"+a,"g"),"")
        };
        
    AJS.map(c,function(d){
        b(d)
        })
    },
setOpacity:function(b,a){
    if(a==1){
        b.style.opacity=1;
        b.style.filter=""
        }else{
        b.style.opacity=a;
        b.style.filter="alpha(opacity="+a*100+")"
        }
    },
HTML2DOM:function(a,c){
    var b=AJS.DIV();
    b.innerHTML=a;
    if(c){
        return b.childNodes[0]
        }else{
        return b
        }
    },
preloadImages:function(){
    AJS.AEV(window,"load",AJS.$p(function(a){
        AJS.map(a,function(c){
            var b=new Image();
            b.src=c
            })
        },arguments))
    },
RND:function(a,d,c){
    c=c||window;
    var b=function(f,l){
        l=l.split("|");
        var j=d[l[0]];
        for(var h=1;h<l.length;h++){
            j=c[l[h]](j)
            }
            if(j==""){
            return""
            }
            if(j==0||j==-1){
            j+=""
            }
            return j||f
        };
        
    return a.replace(/%\(([A-Za-z0-9_|.]*)\)/g,b)
    },
getXMLHttpRequest:function(){
    var b=[function(){
        return new XMLHttpRequest()
        },function(){
        return new ActiveXObject("Msxml2.XMLHTTP")
        },function(){
        return new ActiveXObject("Microsoft.XMLHTTP")
        },function(){
        return new ActiveXObject("Msxml2.XMLHTTP.4.0")
        },function(){
        throw"Browser does not support XMLHttpRequest"
        }];
    for(var a=0;a<b.length;a++){
        var c=b[a];
        try{
            return c()
            }catch(d){}
    }
    },
getRequest:function(a,c){
    var b=AJS.getXMLHttpRequest();
    if(a.match(/^https?:\/\//)==null){
        if(AJS.BASE_URL!=""){
            if(AJS.BASE_URL.lastIndexOf("/")!=AJS.BASE_URL.length-1){
                AJS.BASE_URL+="/"
                }
                a=AJS.BASE_URL+a
            }
        }
    if(!c){
    c="POST"
    }
    return new AJSDeferred(b,c,a)
},
serializeJSON:function(j){
    var a=typeof(j);
    if(a=="undefined"){
        return"null"
        }else{
        if(a=="number"||a=="boolean"){
            return j+""
            }else{
            if(j===null){
                return"null"
                }
            }
    }
if(a=="string"){
    return AJS._reprString(j)
    }
    if(a=="object"&&j.getFullYear){
    return AJS._reprDate(j)
    }
    var f=arguments.callee;
if(a!="function"&&typeof(j.length)=="number"){
    var d=[];
    for(var c=0;c<j.length;c++){
        var h=f(j[c]);
        if(typeof(h)!="string"){
            h="undefined"
            }
            d.push(h)
        }
        return"["+d.join(",")+"]"
    }
    if(a=="function"){
    return null
    }
    d=[];
for(var b in j){
    var g;
    if(typeof(b)=="number"){
        g='"'+b+'"'
        }else{
        if(typeof(b)=="string"){
            g=AJS._reprString(b)
            }else{
            continue
        }
    }
    h=f(j[b]);
    if(typeof(h)!="string"){
    continue
}
d.push(g+":"+h)
    }
    return"{"+d.join(",")+"}"
},
loadJSON:function(b,c,a){
    var g=AJS.getRequest(b,c);
    var f=function(h,d){
        var i=d.responseText;
        if(i=="Error"){
            g.errback(d)
            }else{
            return AJS.evalTxt(i)
            }
        };
    
g.addCallback(f);
return g
},
evalTxt:function(txt){
    try{
        return eval("("+txt+")")
        }catch(e){
        return eval(txt)
        }
    },
evalScriptTags:function(html){
    var script_data=html.match(/<script.*?>((\n|\r|.)*?)<\/script>/g);
    if(script_data!=null){
        for(var i=0;i<script_data.length;i++){
            var script_only=script_data[i].replace(/<script.*?>/g,"");
            script_only=script_only.replace(/<\/script>/g,"");
            eval(script_only)
            }
        }
    },
encodeArguments:function(a){
    var b=[];
    for(k in a){
        b.push(k+"="+AJS.urlencode(a[k]))
        }
        return b.join("&")
    },
_reprString:function(a){
    return('"'+a.replace(/(["\\])/g,"\\$1")+'"').replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r")
    },
_reprDate:function(c){
    var d=c.getUTCFullYear();
    var a=c.getUTCDate();
    var f=c.getUTCMonth()+1;
    var b=function(g){
        if(g<10){
            g="0"+g
            }
            return g
        };
        
    return'"'+d+"-"+f+"-"+a+"T"+b(c.getUTCHours())+":"+b(c.getUTCMinutes())+":"+b(c.getUTCSeconds())+'"'
    },
getMousePos:function(b){
    var a=0;
    var c=0;
    if(!b){
        var b=window.event
        }
        if(b.pageX||b.pageY){
        a=b.pageX;
        c=b.pageY
        }else{
        if(b.clientX||b.clientY){
            a=b.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;
            c=b.clientY+document.body.scrollTop+document.documentElement.scrollTop
            }
        }
    return{
    x:a,
    y:c
}
},
getScrollTop:function(){
    var a;
    if(document.documentElement&&document.documentElement.scrollTop){
        a=document.documentElement.scrollTop
        }else{
        if(document.body){
            a=document.body.scrollTop
            }
        }
    return a
},
absolutePosition:function(c){
    if(!c){
        return{
            x:0,
            y:0
        }
    }
    if(c.scrollLeft){
    return{
        x:c.scrollLeft,
        y:c.scrollTop
        }
    }else{
    if(c.clientX){
        return{
            x:c.clientX,
            y:c.clientY
            }
        }
}
var b={
    x:c.offsetLeft,
    y:c.offsetTop
    };
    
if(c.offsetParent){
    var a=c.offsetParent;
    while(a){
        b.x+=a.offsetLeft;
        b.y+=a.offsetTop;
        a=a.offsetParent
        }
    }
if(AJS.isSafari()&&c.style.position=="absolute"){
    b.x-=document.body.offsetLeft;
    b.y-=document.body.offsetTop
    }
    return b
},
getWindowSize:function(c){
    c=c||document;
    var b,a;
    if(self.innerHeight){
        b=self.innerWidth;
        a=self.innerHeight
        }else{
        if(c.documentElement&&c.documentElement.clientHeight){
            b=c.documentElement.clientWidth;
            a=c.documentElement.clientHeight
            }else{
            if(c.body){
                b=c.body.clientWidth;
                a=c.body.clientHeight
                }
            }
    }
return{
    w:b,
    h:a
}
},
isOverlapping:function(g,c){
    var j=AJS.absolutePosition(g);
    var i=AJS.absolutePosition(c);
    var m=j.y;
    var o=j.x;
    var f=o+g.offsetWidth;
    var d=m+g.offsetHeight;
    var l=i.y;
    var n=i.x;
    var b=n+c.offsetWidth;
    var a=l+c.offsetHeight;
    var h=function(p){
        if(p>0){
            return"+"
            }else{
            if(p<0){
                return"-"
                }else{
                return 0
                }
            }
    };

if((h(m-a)!=h(d-l))&&(h(o-b)!=h(f-n))){
    return true
    }
    return false
},
getEventElm:function(b){
    if(b&&!b.type&&!b.keyCode){
        return b
        }
        var a;
    if(!b){
        var b=window.event
        }
        if(b.target){
        a=b.target
        }else{
        if(b.srcElement){
            a=b.srcElement
            }
        }
    if(a&&a.nodeType==3){
    a=a.parentNode
    }
    return a
},
setEventKey:function(a){
    if(!a){
        a=window.event
        }
        a.key=a.keyCode?a.keyCode:a.charCode;
    a.ctrl=a.ctrlKey;
    a.alt=a.altKey;
    a.meta=a.metaKey;
    a.shift=a.shiftKey
    },
onEvent:function(c,b,a,d){
    c=AJS.$A(c);
    AJS.map(c,function(f){
        if(f.events){
            f.events[b]={}
        }
    });
return AJS.AEV(c,b,a,d)
},
ready_bound:false,
is_ready:false,
bindReady:function(){
    if(AJS.ready_bound){
        return
    }
    AJS.ready_bound=true;
    if(document.addEventListener){
        document.addEventListener("DOMContentLoaded",function(){
            document.removeEventListener("DOMContentLoaded",arguments.callee,false);
            AJS.ready()
            },false)
        }else{
        if(document.attachEvent){
            document.attachEvent("onreadystatechange",function(){
                if(document.readyState==="complete"){
                    document.detachEvent("onreadystatechange",arguments.callee);
                    AJS.ready()
                    }
                });
        if(document.documentElement.doScroll&&window==window.top){
            (function(){
                if(AJS.is_ready){
                    return
                }
                try{
                    document.documentElement.doScroll("left")
                    }catch(a){
                    setTimeout(arguments.callee,0);
                    return
                }
                AJS.ready()
                })()
            }
        }
}
AJS.AEV(window,"load",AJS.ready)
},
ready_list:[],
ready:function(a){
    if(AJS.is_ready){
        return
    }
    AJS.is_ready=true;
    AJS.map(AJS.ready_list,function(b){
        b.call(window)
        });
    AJS.ready_list=[]
    },
_f_guid:0,
_wipe_guid:0,
addEventListener:function(c,a,b,d){
    c=AJS.$A(c);
    a=AJS.$A(a);
    AJS.map(c,function(f){
        if(d){
            b.listen_once=true
            }
            if(!b.$f_guid){
            b.$f_guid=AJS._f_guid++
        }
        if(!f.events){
            f.events={}
        }
        AJS.map(a,function(h){
        var g=f.events[h];
        if(f==window&&h=="load"){
            AJS.ready_list.push(b)
            }else{
            if(h=="lazy_load"){
                h="load"
                }
                if(!g){
                g=f.events[h]={};
                
                if(f["on"+h]){
                    g[0]=f["on"+h]
                    }
                }
            if(!f._wipe_guid){
            f._wipe_guid=AJS._wipe_guid++
        }
        g[b.$f_guid]=b;
        f["on"+h]=AJS.handleEvent
        }
    });
f=null
})
},
handleEvent:function(h){
    var g=this;
    h=h||window.event;
    if(!h){
        return
    }
    if(!h.ctrl&&h.type.indexOf("key")!=-1){
        AJS.setEventKey(h)
        }
        var b=this.events[h.type];
    var a=[];
    var d=true;
    for(var c in b){
        var f=this.$$handleEvent=b[c];
        if(f==AJS.handleEvent){
            continue
        }
        d=f(h);
        if(f.listen_once){
            a.push(f)
            }
        }
    if(a.length>0){
    AJS.map(a,function(i){
        delete g.events[h.type][i.$f_guid]
    })
    }
    return d
},
removeEventListener:function(c,b,a){
    c=AJS.$A(c);
    map(c,function(d){
        if(d.events&&d.events[b]){
            delete d.events[b][a.$f_guid]
        }
    })
},
bind:function(b,a,c){
    b._cscope=a;
    return AJS._getRealScope(b,c)
    },
bindMethods:function(b){
    for(var a in b){
        var c=b[a];
        if(typeof(c)=="function"){
            b[a]=AJS.$b(c,b)
            }
        }
    },
preventDefault:function(a){
    if(AJS.isIe()){
        window.event.returnValue=false
        }else{
        a.preventDefault()
        }
    },
_listenOnce:function(d,b,a){
    var c=function(){
        AJS.removeEventListener(d,b,c);
        a(arguments)
        };
        
    return c
    },
_getRealScope:function(b,c){
    c=AJS.$A(c);
    var a=b._cscope||window;
    return function(){
        try{
            var d=AJS.$FA(arguments).concat(c);
            return b.apply(a,d)
            }catch(f){}
    }
},
_reccruing_tos:{},
setSingleTimeout:function(b,c,a){
    var d=AJS._reccruing_tos[b];
    if(d){
        clearTimeout(d)
        }
        AJS._reccruing_tos[b]=setTimeout(c,a)
    },
keys:function(b){
    var a=[];
    for(var c in b){
        a.push(c)
        }
        return a
    },
values:function(b){
    var a=[];
    for(var c in b){
        a.push(b[c])
        }
        return a
    },
urlencode:function(a){
    return encodeURIComponent(AJS.isDefined(a)&&a.toString()||"")
    },
urldecode:function(b){
    var a=decodeURIComponent(AJS.isDefined(b)&&b.toString()||"");
    return a.replace(/\+/g," ")
    },
isDefined:function(a){
    return(a!="undefined"&&a!=null)
    },
isArray:function(b){
    try{
        return b instanceof Array
        }catch(a){
        return false
        }
    },
isString:function(a){
    return(typeof a=="string")
    },
isNumber:function(a){
    return(typeof a=="number")
    },
isObject:function(a){
    return(typeof a=="object")
    },
isFunction:function(a){
    return(typeof a=="function")
    },
isDict:function(b){
    var a=String(b);
    return a.indexOf(" Object")!=-1
    },
exportToGlobalScope:function(a){
    a=a||window;
    for(e in AJS){
        if(e!="addEventListener"){
            a[e]=AJS[e]
            }
        }
    },
log:function(b){
    try{
        if(window._firebug){
            window._firebug.log(b)
            }else{
            if(window.console){
                console.log(b)
                }
            }
    }catch(a){}
},
strip:function(a){
    return a.replace(/^\s+/,"").replace(/\s+$/g,"")
    },
trim_if_needed:function(c,a,b){
    if(c.length>a){
        return c.substring(0,a)+(b||"...")
        }
        return c
    }
};

AJS.Class=function(a){
    var b=function(){
        if(arguments[0]!="no_init"){
            return this.init.apply(this,arguments)
            }
        };
    
b.prototype=a;
AJS.update(b,AJS.Class.prototype);
    return b
    };
    
AJS.Class.prototype={
    extend:function(a){
        var b=new this("no_init");
        for(k in a){
            var c=b[k];
            var d=a[k];
            if(c&&c!=d&&typeof d=="function"){
                d=this._parentize(d,c)
                }
                b[k]=d
            }
            return new AJS.Class(b)
        },
    implement:function(a){
        AJS.update(this.prototype,a)
        },
    _parentize:function(b,a){
        return function(){
            this.parent=a;
            return b.apply(this,arguments)
            }
        }
};

AJS.$=AJS.getElement;
AJS.$$=AJS.getElements;
AJS.$f=AJS.getFormElement;
AJS.$b=AJS.bind;
AJS.$p=AJS.partial;
AJS.$FA=AJS.forceArray;
AJS.$A=AJS.createArray;
AJS.DI=AJS.documentInsert;
AJS.ACN=AJS.appendChildNodes;
AJS.RCN=AJS.replaceChildNodes;
AJS.AEV=AJS.addEventListener;
AJS.REV=AJS.removeEventListener;
AJS.$bytc=AJS.getElementsByTagAndClassName;
AJS.$AP=AJS.absolutePosition;
AJS.loadJSONDoc=AJS.loadJSON;
AJS.queryArguments=AJS.encodeArguments;
AJS.$gp=AJS.getParentBytc;
AJS.$gc=AJS.getChildBytc;
AJS.$sv=AJS.setVisibility;
AJS.generalErrorback=null;
AJS.generalCallback=null;
AJSDeferred=function(b,c,a){
    this.callbacks=[];
    this.errbacks=[];
    this.req=b;
    this.http_method=c;
    this.http_url=a
    };
    
AJSDeferred.prototype={
    excCallbackSeq:function(c,f){
        var d=c.responseText;
        if(AJS.generalCallback){
            d=AJS.generalCallback(c,f);
            if(!d){
                return
            }
        }while(f.length>0){
        var b=f.pop();
        var a=b(d,c);
        if(a){
            d=a
            }else{
            if(a==false){
                break
            }
        }
    }
},
callback:function(){
    this.excCallbackSeq(this.req,this.callbacks)
    },
errback:function(){
    if(this.errbacks.length==0){
        if(AJS.ajaxErrorHandler){
            AJS.ajaxErrorHandler(req.responseText,req)
            }else{
            var b=this.req.responseText.substring(0,200);
            if(AJS.strip(b)&&b.indexOf("<html")==-1){
                alert("Error encountered:\n"+b)
                }
            }
    }
if(AJS.generalErrorback){
    var a=AJS.generalErrorback(this.req);
    if(!a){
        return
    }
}
this.excCallbackSeq(this.req,this.errbacks)
},
addErrback:function(a){
    this.errbacks.unshift(a)
    },
addCallback:function(a){
    this.callbacks.unshift(a)
    },
abort:function(){
    this.req.abort()
    },
addCallbacks:function(b,a){
    this.addCallback(b);
    this.addErrback(a)
    },
_onreadystatechange:function(){
    var b=this.req;
    var f=this;
    if(b.readyState==4){
        var a="";
        try{
            a=b.status
            }catch(c){}
        if(a==200||a==304||b.responseText==null){
            this.callback()
            }else{
            this.errback()
            }
        }
},
sendReq:function(d){
    var c=this.req;
    var b=this.http_method;
    var a=this.http_url;
    if(b=="POST"){
        c.open(b,a,true);
        c.onreadystatechange=AJS.$b(this._onreadystatechange,this);
        c.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        if(AJS.isObject(d)){
            c.send(AJS.encodeArguments(d))
            }else{
            if(AJS.isDefined(d)){
                c.send(d)
                }else{
                c.send("")
                }
            }
    }else{
    c.open("GET",a,true);
    c.onreadystatechange=AJS.$b(this._onreadystatechange,this);
    c.send(null)
    }
}
};

AJS._createDomShortcuts()
    }
    script_loaded=true;
AJS.exportToGlobalScope();
AJS.bindReady();
script_loaded=true;