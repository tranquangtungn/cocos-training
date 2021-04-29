// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var bunny = require("bunny")
cc.Class({
    extends: bunny,
    ctor() {
        this._jumpTime = 1;
        this._idleTime = 3;

        this._timer = 0.0;
        this._firstPos;
    },
    properties: {

    },
    jump(dt) {

        if (this._timer <= this._jumpTime)
            this.node.angle += 180 / (1 / dt)
        else {
            this.node.angle = Math.round(this.node.angle / 180) * 180;
        }
        if (this._timer >= this._jumpTime + this._idleTime)
            this._timer = 0.0;
        this._timer += dt;

    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },
    update(dt) {

        this.jump(dt)
    },
    // update(dt) {

    // },
});
