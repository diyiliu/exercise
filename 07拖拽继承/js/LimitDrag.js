function LimitDrag(id) {
    Drag.call(this, id);
}

for (var i in Drag.prototype) {

    LimitDrag.prototype[i] = Drag.prototype[i];
}

LimitDrag.prototype.fnMv = function (ev) {
    var eEvent = ev || event;

    var l = eEvent.clientX - this.disx;
    var t = eEvent.clientY - this.disy;

    if (l < 0){
        l = 0;
    }else if(l > document.documentElement.clientWidth - this.oDiv.offsetWidth){
        l = document.documentElement.clientWidth - this.oDiv.offsetWidth;
    }

    if (t < 0){
        t = 0;
    }else if(t > document.documentElement.clientHeight - this.oDiv.offsetHeight){
        t = document.documentElement.clientHeight - this.oDiv.offsetHeight;
    }

    this.oDiv.style.left = l + 'px';
    this.oDiv.style.top = t + 'px';
}