
cc.Class({
    extends: cc.Component,

    properties: {
        itemprefab: cc.Prefab
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        for (let i = 0; i < 5; i++) {
            let item = cc.instantiate(this.itemprefab)
            item.parent = this.node;
            item.y = -80
            item.y -= 80 * i
            cc.log(item.y)
            let richtext = item.getComponent(cc.RichText)
            // cc.log(richtext.string)
            richtext.string = `<color=black>Chào mừng </c><color=red><u></c><color=black>
        đã gia nhập<color=yellow><i></color><color=black> `
        }


    },

    start() {

    },

    // update (dt) {},
});
