# react 翻页时钟计时器

> 基于react开发的一个翻页动画效果非常漂亮的计时器


## 从NPM下载包

``` npm
npm i react-flip-clock
```

## 使用实例

### 引入包

``` js
import Clock from 'react-flip-clock'

const Index = () => {
  return (
    <div>
      <Clock />
    </div>
  )
}

render(
  <Index />,
  document.getElementById('app')
)
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```
