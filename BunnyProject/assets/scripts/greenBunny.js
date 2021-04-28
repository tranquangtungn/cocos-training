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
    jump(jumpTime, idleTime) {
        this._frame++;
        let jumpFrames = 60 * jumpTime;
        let idleFrames = 60 * idleTime;
        if (this._frame <= jumpFrames / 2 && this._frame > 0)
            this.node.scale += 0.5 / (jumpFrames / 2);
        else if (this._frame <= jumpFrames)
            this.node.scale -= 1 / (jumpFrames / 2);
        else if (this._frame === jumpFrames + idleFrames) {
            this._frame = 0;
            this.node.scale = 1;
        }

    },


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    // update (dt) {},
});
