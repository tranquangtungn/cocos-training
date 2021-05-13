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

    properties: {
        label: cc.Label,
        value: 0,
        nextValue: 10000000
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        let scale = cc.tween()
            .to(0.1, { scale: 1.2 })
            .to(0.1, { scale: 1 })
        cc.tween(this.node).then(scale).repeat(30).start()


        cc.tween(this)
            .to(5, { value: this.nextValue })
            .start()

    },

    start() {

    },

    update(dt) {
        this.label.string = Math.round(this.value)
    },
});
