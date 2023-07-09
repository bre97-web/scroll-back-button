import { LitElement, TemplateResult, css, html } from "lit";
import { property } from "lit/decorators.js";

export default class ScrollBackToTopButton extends LitElement {

    public async scroll() {
        if (['start', 'top'].includes(this.direction)) {
            this.backToTop()
        } else if (['end', 'bottom', 'bot'].includes(this.direction)) {
            this.backToBottom()
        }
    }
    public async backToTop() {
        for (let obj = {
            num: document.documentElement.scrollTop,
            step: 1
        }; document.documentElement.scrollTop > 0; obj.num = obj.num - obj.step) {
            await this.runDelay(() => this.setScrollTop(obj.num))
            obj.step += this.step * this.speed
        }
    }
    public async backToBottom() {
        for (let obj = {
            num: document.documentElement.scrollTop,
            step: 1,
            lastScrollTop: document.documentElement.scrollTop
        }; true; obj.lastScrollTop = obj.num, obj.num = obj.num + obj.step) {
            await this.runDelay(() => this.setScrollTop(obj.num))
            if (obj.lastScrollTop - obj.step >= document.documentElement.scrollTop) {
                break
            }
            obj.step += this.step * this.speed
        }
    }

    /**
     * 设置滚动条的位置
     */
    private setScrollTop(scrollTop: number) {
        document.body.scrollTop = scrollTop
        document.documentElement.scrollTop = scrollTop
    }

    /**
     * 使用Promise在指定的timeout时间后执行callback
     */
    protected async runDelay(callback: () => void, timeout: number = 5) {
        await new Promise<void>(resolve => setTimeout(() => {
            callback()
            resolve()
        }, timeout))
    }

    /**
     * 滚动的方向
     * 默认为start
     */
    @property({ type: String }) direction = "start" as 'start' | 'top' | 'end' | 'bottom' | 'bot'

    /**
     * 滚动的速度
     * 默认为1
     */
    @property({ type: Number }) speed = 1 as number
    /**
     * 滚动的步长
     * 默认为0.5
     */
    @property({ type: Number }) step = 0.5 as number


    static styles = css`
        .relative {
            position: relative;
        }
    `

    protected override render(): TemplateResult<1> {
        return html`
            <div
                class="relative"
                @click="${this.scroll}"
            >
                <slot></slot>
            </div>
        `
    }
}
