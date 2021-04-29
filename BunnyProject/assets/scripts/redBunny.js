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

    properties: {

    },
    jump(dt) {
        this._timer += dt;

        if (this._timer <= 1.0) {
            this.node.skewX += 60 / (1 / dt);
            //this.node.x += 100 / (1 / dt);
            //         cc.log(this.node.x)
        }
        else if (this._timer <= 1.5) {
            this.node.skewX -= 60 / (1 / dt);

            //this.node.x -= 100 / (1 / dt);
        }
        if (this._timer >= 2.5) {
            this._timer = 0;
            this.node.skewX = -30;
        }

    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },
    update(dt) {

        this.jump(dt)
    },
    // update (dt) {},
});
