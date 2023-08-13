# scroll-back-button

A lit web component. A Web Component for any framework, this component does not provide any style and structure. Please provide the structure inside the scroll-back-button tag. Provides the function of scrolling up and down to the bottom.

**It's Web Component, work with any framkework, like react, vue, non-framkework.**

See [examples](https://bre97-web.github.io/scroll-back-button/).

# Quick Start

## Install

```
npm i scroll-back-button
```

## Import

import from **index.html**
```html
<script src="./node_modules/scroll-back-button/scroll-back-button.js"></script>
```

or import from main.**js**
```js
import '/scroll-back-button/scroll-back-button.js'
```

(**Recommmand**)
or import from main.**ts**
```ts
import '/scroll-back-button/scroll-back-button'
```

## Usage

Using it is as easy as using html, You can go to this site to see [examples](https://bre97-web.github.io/scroll-back-button/)

```html
<div id="boxOne" class="h-32 overflow-y-scroll">
    <div class="h-[2000px]"></div>
</div>

<scroll-back-button direction="start" speed="1" step="0.5" parent="#boxOne">
    <button>Go Top</button>
</scroll-back-button>
```

# Documents

|Property|Type|Default|Document|
|:--|:-|:--|--:|
|direction|'start' \| 'top' \| 'end' \| 'bottom' \| 'bot'|'start'|The direction of scrolling, start and top represent upward, end and bottom and bot represent downward. On some frameworks the default value may not work and a direction needs to be specified|
|speed|number|1|The speed of scrolling, usually you will prefer to set the parameter to 4 or 8, so that it will scroll faster|
|step|number|0.5|step represents the step size, which is the distance scrolled each time|
|parent|string|document.documentElement|It represents a container with scroll bars|