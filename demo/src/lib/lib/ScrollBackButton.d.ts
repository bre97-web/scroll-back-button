import { LitElement, TemplateResult } from "lit";
export default class ScrollBackButton extends LitElement {
    scroll(): Promise<void>;
    backToTop(): Promise<void>;
    backToBottom(): Promise<void>;
    /**
     * 设置滚动条的位置
     */
    private setScrollTop;
    /**
     * 使用Promise在指定的timeout时间后执行callback
     */
    protected runDelay(callback: () => void, timeout?: number): Promise<void>;
    /**
     * 滚动的方向
     * 默认为start
     */
    direction: "start" | "top" | "end" | "bottom" | "bot";
    /**
     * 滚动的速度
     * 默认为1
     */
    speed: number;
    /**
     * 滚动的步长
     * 默认为0.5
     */
    step: number;
    /**
     * 它应该是一个唯一的类名、ID名
     * 默认值为auto（指document.documentElement对象）
     * @see 参数代表的DOM对象必须唯一
     */
    parent: string;
    /**
     * 默认值为document.documentElement
     * 在connectedCallback中设置默认值
     */
    parentElement: any;
    connectedCallback(): void;
    static styles: import("lit").CSSResult;
    protected render(): TemplateResult<1>;
}
