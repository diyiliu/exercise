function Drag(id) {
    var _this = this;
    this.disx = 0;
    this.disy = 0;
    this.oDiv = document.getElementById(id);

    this.oDiv.onmousedown = function (ev) {
        _this.fnDn(ev);

        return false;
    }
}

Drag.prototype.fnDn = function (ev) {
    var _this = this;

    var eEvent = ev || event;
    this.disx = eEvent.clientX - this.oDiv.offsetLeft;
    this.disy = eEvent.clientY - this.oDiv.offsetTop;

    document.onmousemove = function (ev) {

        _this.fnMv(ev);
    }
    document.onmouseup = function () {

        _this.fnUp();
    }
}

Drag.prototype.fnMv = function (ev) {
    var eEvent = ev || event;

    this.oDiv.style.left = eEvent.clientX - this.disx + 'px';
    this.oDiv.style.top = eEvent.clientY - this.disy + 'px';
}

Drag.prototype.fnUp = function () {
    document.onmousemove = null;
    document.onmouseup = null;
}