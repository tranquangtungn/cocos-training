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
        this._jumpTime = 1;
        this._idleTime = 0;
        this._jumpRange = 5;
        this._timer = 0.0;
        this._timeToTalk = 0.0;
        this._firstPos;
    },
    properties: {

        objName: {
            default: "bunny",
        },
        jumpRange: {
            get: function () {
                return this._jumpRange;
            },
            set: function (value) {
                this._jumpRange = value;
            }
        },
        jumpTime: {
            get: function () {
                return this._jumpTime;
            },
            set: function (value) {
                this._jumpTime = value;
            }
        },
        idleTime: {
            get: function () {
                return this._idleTime;
            },
            set: function (value) {
                this._idleTime = value;
            }
        },

    },
    jump(dt) {
        this._timer += dt;

        if (this._timer <= this._jumpTime / 2)
            this.node.y += this._jumpRange;
        else if (this._timer <= this._jumpTime)
            this.node.y -= this._jumpRange;
        else {
            this.node.y = this._firstPos;

        }
        if (this._timer >= this._jumpTime + this._idleTime)
            this._timer = 0;


    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    talk(dt) {
        this._timeToTalk += dt;
        if (this._timeToTalk >= 1) {
            cc.log("hello im a bunny")
            this._timeToTalk = 0;
        }
    },

    start() {
        this._firstPos = this.node.y;
    },

    update(dt) {

        this.jump(dt)
        this.talk(dt)
    },
});
