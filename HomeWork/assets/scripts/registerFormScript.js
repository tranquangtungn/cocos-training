// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html

const evt = require("./configEvtEmitter");
const mEmitter = require("./EventEmitter");

//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
mEmitter
cc.Class({
    extends: cc.Component,

    properties: {
        editboxUsername: cc.EditBox,
        tooltipUsername: cc.Label,
        editboxPassword: cc.EditBox,
        tooltipPassword: cc.Label,
        richtext: cc.RichText,
        isValidatedUser: false,
        isValidatedPass: false,
    },


    // onLoad () {},

    start() {


    },
    initTooltipUsername() {
        this.tooltipUsername.node.active = true;
        this.tooltipUsername.string = "Tên tài khoản không ký tự đặc biệt và không được quá 10 ký tự"
        this.tooltipUsername.node.color = cc.Color.GREEN

    },
    initTooltipPassword() {
        this.tooltipPassword.node.active = true;
        this.tooltipPassword.string = "Mật khẩu không ký tự đặc biệt,6-10 ký tự," + '\n' + "ít nhất 1 chữ thường 1 chữ in hoa 1 số"
        this.tooltipPassword.node.color = cc.Color.GREEN
    },
    checkUsername() {
        this.tooltipUsername.node.color = cc.Color.RED
        let inputRegex = /^[a-zA-Z0-9]+$/;
        var validInput = this.editboxUsername.string.match(inputRegex);
        if (this.editboxUsername.string.length === 0)
            this.tooltipUsername.string = "Vui lòng nhập tên tài khoản";
        else if (!validInput) {

            this.tooltipUsername.string = "Tên tài khoản không được có ký tự đặc biệt";
        }
        else if (this.editboxUsername.string.length > 10) {
            this.tooltipUsername.string = "Tên tài khoản không được quá 10 ký tự";
        }
        else {
            this.tooltipUsername.node.active = false;
            this.isValidatedUser = true;
        }
    },
    checkPassword() {
        this.tooltipPassword.node.color = cc.Color.RED
        let inputRegex = /^[a-zA-Z0-9]+$/;
        var validInput = this.editboxPassword.string.match(inputRegex);
        if (this.editboxPassword.string.length === 0)
            this.tooltipPassword.string = "Vui lòng nhập mật khẩu";
        else if (!validInput) {

            this.tooltipPassword.string = "Mật khẩu không được có ký tự đặc biệt";
        }
        else if (this.editboxPassword.string.length < 6 || this.editboxPassword.string.length > 10) {
            this.tooltipPassword.string = "Mật khẩu từ 6 đến 10 ký tự";
        }
        else if (!this.editboxPassword.string.match(/[a-z]/)
            || !this.editboxPassword.string.match(/[A-Z]/)
            || !this.editboxPassword.string.match(/[0-9]/)) {
            this.tooltipPassword.string = "Mật khẩu cần có ít nhất 1 chữ thường 1 chữ in hoa 1 số";
        }
        else {
            this.tooltipPassword.node.active = false;
            this.isValidatedPass = true;
        }
    },
    showNoti() {
        if (!mEmitter.instance) {
            this.richtext.string = "<color=black>đã đủ số lượng đăng ký</c>"
        }
        else if (this.isValidatedUser && this.isValidatedPass) {
            let now = new Date(Date.now());
            let time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
            this.richtext.string =
                `<color=black>Chào mừng </c><color=red><u>${this.editboxUsername.string}</c><color=black> đã gia nhập<color=yellow><i>${time}</color><color=black> `
            mEmitter.instance.emit(evt.addItem, this.editboxUsername.string, time)
        }


    }
    // update (dt) {},
});
