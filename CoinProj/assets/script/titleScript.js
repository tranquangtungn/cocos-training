
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        let scale = cc.tween()
            .to(0.5, { scale: 1.2 })
            .to(0.5, { scale: 1 })
        cc.tween(this.node).then(scale).repeatForever().start()
    },

    start() {

    },

    // update (dt) {},
});
