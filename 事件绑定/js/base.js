$ = function (_this) {
    return new Base(_this);
};

function Base(_this) {
    this.scope = document;
    this.elements = [];

    if (_this != undefined) {
        this.scope = _this;
    }

    this.get = function () {
        if (_this != undefined) {
            this.elements[0] = _this;
            this.scope = document;
        }

        return this;
    };

    this.getId = function (id) {
        var item = this.scope.getElementById(id);
        if (item) {
            this.elements.push(item);
        }

        return this;
    };

    this.getName = function (name) {
        var item = this.scope.getElementsByName(name);
        for (var i = 0; i < item.length; i++) {
            this.elements.push(item[i]);
        }

        return this;
    };

    this.getTagName = function (tag) {
        var item = this.scope.getElementsByTagName(tag);

        for (var i = 0; i < item.length; i++) {
            this.elements.push(item[i]);
        }

        return this;
    };

    this.getClass = function (clazz) {
        if (this.scope.getElementsByClassName) {
            var item = this.scope.getElementsByClassName(clazz);
            for (var i = 0; i < item.length; i++) {
                this.elements.push(item[i]);
            }
        } else {
            var all = this.scope.getElementsByTagName('*');
            for (var i = 0; i < all.length; i++) {

                if (all[i].className == clazz) {

                    this.elements.push(all[i]);
                }
            }
        }

        return this;
    };

    // 获取/设置css 样式
    this.css = function (attr, val) {
        if (arguments.length == 1) {
            var i = this.elements[0];
            var v;
            if (i.currentStyle) {
                v = i.currentStyle[attr];
            } else {
                v = window.getComputedStyle(i)[attr];
            }
            return v;
        }

        for (var i = 0; i < this.elements.length; i++) {

            this.elements[i].style[attr] = val;
        }

        return this;
    }

    // 获取/设置 标签内容
    this.html = function (val) {
        if (arguments.length == 0) {

            return this.elements[0].innerHTML;
        }

        for (var i = 0; i < this.elements.length; i++) {

            this.elements[i].innerHTML = val;
        }

        return this;
    };

    // 点击事件
    this.click = function (fn) {

        for (var i = 0; i < this.elements.length; i++) {

            this.elements[i].onclick = fn;
        }
    };

    // 鼠标移入移除
    this.hover = function (fn1, fn2) {

        for (var i = 0; i < this.elements.length; i++) {

            this.elements[i].onmouseover = fn1;
        }

        for (var i = 0; i < this.elements.length; i++) {

            this.elements[i].onmouseout = fn2;
        }

        return this;
    };

    // 隐藏
    this.hide = function () {
        for (var i = 0; i < this.elements.length; i++) {

            this.elements[i].style.display = 'none';
        }

        return this;
    };

    // 显示
    this.show = function () {

        for (var i = 0; i < this.elements.length; i++) {

            this.elements[i].style.display = 'block';
        }

        return this;
    };

    // 居中
    this.center = function (w, h) {
        var l = (document.documentElement.clientWidth - w) / 2;
        var t = (document.documentElement.clientHeight - h) / 2;
        for (var i = 0; i < this.elements.length; i++) {

            this.elements[i].style.left = l + 'px';
            this.elements[i].style.top = t + 'px';
        }

        return this;
    };

    // 浏览器窗口事件
    this.resize = function (fn) {

        window.onresize = fn;
    }
}