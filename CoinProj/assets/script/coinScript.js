
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        cc.tween(this.node)
            .by(1, { position: cc.v2(0, - 100) })
            .repeatForever()
            .start()
        cc.tween(this.node)
            .by(3, { position: cc.v2(100, -100) })
            .start()



        //cc.tween(this.node).then(mov1).then(mov2).start()




    },

    start() {

    },

    // update (dt) {},
});
