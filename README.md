# scroll-button

A lit web component. A Web Component for any framework, this component does not provide any style and structure. Please provide the structure inside the scroll-button tag. Provides the function of scrolling up and down to the bottom.

**It's Web Component, work with any framkework, like react, vue, non-framkework.**

See [examples](https://bre97-web.github.io/scroll-button/).

# Quick Start

## Install

```
npm i scroll-button
```

## Import

import from **index.html**
```html
<script src="./node_modules/scroll-button/scroll-button.js"></script>
```

or import from main.**js**
```js
import '/scroll-button/scroll-button.js'
```

(**Recommmand**)
or import from main.**ts**
```ts
import '/scroll-button/scroll-button'
```

## Usage

Using it is as easy as using html, You can go to this site to see [examples](https://bre97-web.github.io/scroll-button/)

```html
<div id="boxOne" class="h-32 overflow-y-scroll">
    <div class="h-[2000px]"></div>
</div>

<scroll-button direction="start" speed="1" step="0.5" parent="#boxOne">
    <button>Go Top</button>
</scroll-button>
```

# Documents

|Property|Type|Default|Document|
|:--|:-|:--|--:|
|direction|'start' \| 'top' \| 'end' \| 'bottom' \| 'bot'|'start'|The direction of scrolling, start and top represent upward, end and bottom and bot represent downward. On some frameworks the default value may not work and a direction needs to be specified|
|speed|number|1|The speed of scrolling, usually you will prefer to set the parameter to 4 or 8, so that it will scroll faster|
|step|number|0.5|step represents the step size, which is the distance scrolled each time|
|parent|string|document.documentElement|It represents a container with scroll bars|