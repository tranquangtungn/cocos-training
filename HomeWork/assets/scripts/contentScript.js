const mEmitter = require("./EventEmitter");
const evt = require("./configEvtEmitter")
cc.Class({
    extends: cc.Component,

    properties: {
        itemprefab: cc.Prefab,
    },

    onLoad() {
        let _addItemEvt = this.addItem.bind(this)
        mEmitter.instance = new mEmitter();
        mEmitter.instance.registerEvent(evt.addItem, _addItemEvt)
    },

    start() {

    },
    addItem(data) {
        let item = cc.instantiate(this.itemprefab)
        item.parent = this.node;
        item.height = 40;
        item.x = 0
        item.y = 0
        item.y -= item.height * this.node.childrenCount
        let richtext = item.getComponent(cc.RichText)
        this.node.height = -item.y + item.height
        richtext.fontSize = 30;
        richtext.fontHeight = 30;
        richtext.string = `<color=red><u>${data}</c> `;
        mEmitter.instance.emit(evt.updateTarget, this.node.childrenCount)
        if (this.node.children.length === 8) {
            mEmitter.instance.detroy();
        }
    }
    // update (dt) {},
});
