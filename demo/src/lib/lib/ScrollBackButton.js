var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html } from "lit";
import { property, state } from "lit/decorators.js";
class ScrollBackButton extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * 滚动的方向
         * 默认为start
         */
        this.direction = "start";
        /**
         * 滚动的速度
         * 默认为1
         */
        this.speed = 1;
        /**
         * 滚动的步长
         * 默认为0.5
         */
        this.step = 0.5;
        /**
         * 它应该是一个唯一的类名、ID名
         * 默认值为auto（指document.documentElement对象）
         * @see 参数代表的DOM对象必须唯一
         */
        this.parent = 'auto';
    }
    async scroll() {
        if (['start', 'top'].includes(this.direction)) {
            this.backToTop();
        }
        else if (['end', 'bottom', 'bot'].includes(this.direction)) {
            this.backToBottom();
        }
    }
    async backToTop() {
        for (let obj = {
            num: this.parentElement.scrollTop,
            step: 1
        }; this.parentElement.scrollTop > 0; obj.num = obj.num - obj.step) {
            await this.runDelay(() => this.setScrollTop(obj.num));
            obj.step += this.step * this.speed;
        }
    }
    async backToBottom() {
        for (let obj = {
            num: this.parentElement.scrollTop,
            step: 1,
            lastScrollTop: this.parentElement.scrollTop
        }; true; obj.lastScrollTop = obj.num, obj.num = obj.num + obj.step) {
            await this.runDelay(() => this.setScrollTop(obj.num));
            if (obj.lastScrollTop - obj.step >= this.parentElement.scrollTop) {
                break;
            }
            obj.step += this.step * this.speed;
        }
    }
    /**
     * 设置滚动条的位置
     */
    setScrollTop(scrollTop) {
        this.parentElement.scrollTop = scrollTop;
    }
    /**
     * 使用Promise在指定的timeout时间后执行callback
     */
    async runDelay(callback, timeout = 5) {
        await new Promise(resolve => setTimeout(() => {
            callback();
            resolve();
        }, timeout));
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.parent === 'auto') {
            this.parentElement = document.documentElement;
        }
        else {
            this.parentElement = document.querySelector(this.parent);
            console.log(this.parentElement);
        }
    }
    render() {
        return html `
            <div
                class="box"
                @click="${this.scroll}"
            >
                <slot></slot>
            </div>
        `;
    }
}
ScrollBackButton.styles = css `
        .box {
            position: relative;
            max-width: max-content;
        }
    `;
export default ScrollBackButton;
__decorate([
    property({ type: String })
], ScrollBackButton.prototype, "direction", void 0);
__decorate([
    property({ type: Number })
], ScrollBackButton.prototype, "speed", void 0);
__decorate([
    property({ type: Number })
], ScrollBackButton.prototype, "step", void 0);
__decorate([
    property({ type: String })
], ScrollBackButton.prototype, "parent", void 0);
__decorate([
    state()
], ScrollBackButton.prototype, "parentElement", void 0);
