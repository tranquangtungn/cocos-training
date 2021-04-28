// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,
    ctor() {
        this.jumpTime = 1;
        this.idleTime = 0;
        this._width = 50;
        this._height = 50;
        this._frame = 0;
    },
    properties: {
        width: {
            get: function () {
                return this._width;
            },
            set: function (value) {
                this._width = value;
            }
        },
        height: {
            get: function () {
                return this._height;
            },
            set: function (value) {
                this._height = value;
            }
        },

    },
    jump(jumpTime, idleTime) {
        this._frame++;
        let jumpFrames = 60 * jumpTime;
        let idleFrames = 60 * idleTime;
        if (this._frame <= jumpFrames / 2 && this._frame > 0)
            this.node.y += 5;
        else if (this._frame <= jumpFrames)
            this.node.y -= 5;
        else if (this._frame === jumpFrames + idleFrames)
            this._frame = 0;

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    update(dt) {

        this.jump(1, 1)
    },
});
