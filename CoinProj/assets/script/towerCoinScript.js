
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {


        let anim = cc.tween()
            .by(0.5, { position: cc.v2(0, 20) })
            .by(0.5, { position: cc.v2(0, -20) })
        cc.tween(this.node).then(anim).repeatForever().start()
    },

    start() {

    },

    // update (dt) {},
});
