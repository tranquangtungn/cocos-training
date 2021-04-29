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
        this._idleTime = 1;
        this.objname = "red bunny";
        this._timer = 0.0;

    },
    properties: {
        redBunnyPreFab: cc.Prefab
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        for (let i = 0; i < 7; i++) {
            let redBunny = cc.instantiate(this.redBunnyPreFab)
            redBunny.parent = this.node;
            redBunny.x = -400 + 100 * (i + 1)
            redBunny.y = -200;

        }
    },

    // update (dt) {},
});
