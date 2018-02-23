$ = function (_this) {
    return new Base(_this);
};

function Base(_this) {
    this.elements = [];

    if (_this != undefined) {
        this.elements[0] = _this;
    }

    this.getId = function (id) {
        var item = document.getElementById(id);
        if (item) {
            this.elements.push(item);
        }

        return this;
    };

    this.getName = function (name) {
        var item = document.getElementsByName(name);
        for (var i = 0; i < item.length; i++) {
            this.elements.push(item[i]);
        }

        return this;
    };

    this.getTagName = function (tag) {
        var item = document.getElementsByTagName(tag);

        for (var i = 0; i < item.length; i++) {
            this.elements.push(item[i]);
        }

        return this;
    };

    this.getClass = function (clazz) {
        if (document.getElementsByClassName) {
            var item = document.getElementsByClassName(clazz);
            for (var i = 0; i < item.length; i++) {
                this.elements.push(item[i]);
            }
        } else {
            var all = document.getElementsByTagName('*');
            for (var i = 0; i < all.length; i++) {

                if (all[i].className == clazz){

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
    }

    // 浏览器窗口事件
    this.resize = function (fn) {

        window.onresize = fn;
    }
}