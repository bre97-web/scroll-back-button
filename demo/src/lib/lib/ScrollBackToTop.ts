import { LitElement, TemplateResult, css, html } from "lit";
import { property, state } from "lit/decorators.js";

export default class ScrollBackButton extends LitElement {

    public async scroll() {
        if (['start', 'top'].includes(this.direction)) {
            this.backToTop()
        } else if (['end', 'bottom', 'bot'].includes(this.direction)) {
            this.backToBottom()
        }
    }
    public async backToTop() {
        for (let obj = {
            num: this.parentElement.scrollTop,
            step: 1
        }; this.parentElement.scrollTop > 0; obj.num = obj.num - obj.step) {
            await this.runDelay(() => this.setScrollTop(obj.num))
            obj.step += this.step * this.speed
        }
    }
    public async backToBottom() {
        for (let obj = {
            num: this.parentElement.scrollTop,
            step: 1,
            lastScrollTop: this.parentElement.scrollTop
        }; true; obj.lastScrollTop = obj.num, obj.num = obj.num + obj.step) {
            await this.runDelay(() => this.setScrollTop(obj.num))
            if (obj.lastScrollTop - obj.step >= this.parentElement.scrollTop) {
                break
            }
            obj.step += this.step * this.speed
        }
    }

    /**
     * 设置滚动条的位置
     */
    private setScrollTop(scrollTop: number) {
        this.parentElement.scrollTop = scrollTop
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

    /**
     * 它应该是一个唯一的类名、ID名
     * 默认值为auto（指document.documentElement对象）
     * @see 参数代表的DOM对象必须唯一
     */
    @property({ type: String}) parent = 'auto'
    
    /**
     * 默认值为document.documentElement
     * 在connectedCallback中设置默认值
     */
    @state() parentElement: any

    connectedCallback() {
        super.connectedCallback()
        
        if(this.parent === 'auto') {
            this.parentElement = document.documentElement
        } else {
            this.parentElement = document.querySelector(this.parent)
        }
    }


    static styles = css`
        .box {
            position: relative;
            max-width: max-content;
        }
    `

    protected override render(): TemplateResult<1> {
        return html`
            <div
                class="box"
                @click="${this.scroll}"
            >
                <slot></slot>
            </div>
        `
    }
}
