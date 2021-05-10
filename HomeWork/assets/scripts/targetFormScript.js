
const evt = require("./configEvtEmitter");
const mEmitter = require("./EventEmitter");


cc.Class({
    extends: cc.Component,

    properties: {
        processBar: cc.ProgressBar,
        completedLabel: cc.Label,
        _evtUpdateTarget: null
    },

    onLoad() {
        this._evtUpdateTarget = this.updateTarget.bind(this)
        mEmitter.instance.registerEvent(evt.updateTarget, this._evtUpdateTarget)
    },
    updateTarget(count) {
        cc.log()
        this.processBar.progress += 1 / 8;
        if (this.processBar.progress === 1) {
            this.processBar.node.children[0].color = cc.Color.RED
            this.completedLabel.node.active = true;
            this.completedLabel.string = "ĐẠT CHỈ TIÊU!!!"
        }
    },
    start() {

    },

    // update (dt) {},
});
