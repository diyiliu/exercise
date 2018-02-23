
// 绑定事件
function addEvent(obj, type, fn) {

    if(typeof obj.addEventListener != 'undefined'){

        obj.addEventListener(type, fn, false);
    }else {
        if (!obj.events){
            obj.events = {};
        }

        if (!obj.events[type]){
            obj.events[type] = [];
        }

        obj.events[type].push(fn);

        obj['on' + type] = function () {
            for (var i in obj.events[type]){
                obj.events[type][i].call(obj, window.event);
            }
        }
    }
}

function removeEvent(obj, type, fn) {

    if (typeof obj.removeEventListener != 'undefined'){

        obj.removeEventListener(type, fn, false);
    }else {

        if (obj.events && obj.events[type]){

            for (var i in obj.events[type]){
                if (obj.events[type][i] == fn){
                    delete obj.events[type][i];
                }
            }
        }
    }
}

