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
        editboxUsername: cc.EditBox,
        tooltipUsername: cc.Label,
        editboxPassword: cc.EditBox,
        tooltipPassword: cc.Label,
        inputUsername: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        cc.log(this.inputUsername.tooltip)
        //cc.log(this)

    },
    checkInput() {
        //cc.log(this)
        this.checkUsername(this.editboxUsername, this.tooltipUsername);
        //checkPassword();
    },
    checkUsername(username, tooltip) {
        let inputRegex = /^[a-zA-Z0-9]+$/;
        var validInput = username.string.match(inputRegex);
        if (!validInput) {

            tooltip.string = "Tên tài khoản không được có ký tự đặc biệt";
        }
        else if (username.string.length > 10) {
            tooltip.string = "Tên tàn khoản không được quá 10 ký tự";
        }
    }
    // update (dt) {},
});
