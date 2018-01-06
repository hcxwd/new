# rework.less

> 一种面向浏览器用户代理样式（user agent stylesheet）兼容的解决方案

## 特色

- 支持 [Less](http://lesscss.org/)，使你更出色。
- 从 User Agent Style Sheets 视角出发，让你更懂 CSS。
- 集成了常用 CSS 工具集，使用更舒心。
- 全面的浏览器支持，基于 [autoprefixer](https://github.com/postcss/autoprefixer) 开发，可使用 [clean-css](https://github.com/jakubpawlowicz/clean-css#how-to-set-a-compatibility-mode)，让你的 CSS 更灵活。

## 使用

```less
@import "/rework.less/rework.less";
```

## 浏览器兼容性

IE(Trident) | Firefox(Gecko) | Chrome/Opera(Blink) | Safari/Edge(WebKit)
---|---|---|---
6+ | Latest | Latest| Latest

注意：集成 CSS 工具具体兼容性查阅具体模块内部说明。

## 参考

- [html5doctor.com](http://html5doctor.com/element-index/)
- [getbootstrap.com](http://getbootstrap.com/css/)
- [normalize.css](https://github.com/necolas/normalize.css)

## LICENSE

MIT License

Copyright (c) 2016 yincw

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
