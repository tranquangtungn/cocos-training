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
        this._idleTime = 1;

        this._timer = 0.0;
        this._firstPos;
    },
    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },
    jump(dt) {
        this._timer += dt;

        if (this._timer <= this._jumpTime / 2) {
            this.node.scaleX += 1 / (1 / dt);
            //cc.log(this.node.scaleX)
        }
        else if (this._timer <= this._jumpTime) {
            this.node.scaleX -= 2 / (1 / dt);
        }
        else {
            this.node.scaleX = 0.5;
        }
        if (this._timer >= this._jumpTime + this._idleTime) {
            this._timer = 0;
            this.node.scale = 1;
        }

    },


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    // update (dt) {},
});
