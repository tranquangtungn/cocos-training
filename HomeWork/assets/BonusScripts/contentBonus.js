
cc.Class({
    extends: cc.Component,

    properties: {
        itemPrefab: cc.Prefab,
        view: cc.Mask,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        for (let i = 0; i < 15; i++) {
            let item = cc.instantiate(this.itemPrefab)
            item.parent = this.node;
            item.x = 0;
            item.y = -40;
            item.y -= 40 * i;
            this.node.height = -item.y
            let userlabel = item.children[1].getComponent(cc.Label)
            let timelabel = item.children[2].getComponent(cc.Label)
            userlabel.string = `user_${i + 1}`
            let now = new Date(Date.now());
            timelabel.string = `${now.getHours()}:${now.getMinutes() + i}:${now.getSeconds()}`
        }


    },

    start() {

    },

    update(dt) {

        var viewRect = cc.rect(0, -200, 300, 200);
        cc.log(this.node.x)
        // for (let i = 0; i < this.node.children.length; i++) {
        //     const item = this.node.children[i];
        //     //cc.log(item.x)
        //     if (viewRect.intersects(item.getBoundingBox())) {
        //         // item.opacity = 255;

        //     }
        //     else {
        //         //item.opacity = 0;
        //     }
        // }
    },
});
