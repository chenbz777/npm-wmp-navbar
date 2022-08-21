## 简介

**wmp-watermark** 是一款微信小程序水印**自定义组件**，通过canvas合成图片和文字水印，自动铺满水印至整个图片，结合了懒加载一起使用，可大大优化加载速度。

<br />

## 效果图

[<img src="https://s1.ax1x.com/2022/05/08/OlHkMF.png" alt="OlHkMF.png" style="zoom: 33%;" />](https://imgtu.com/i/OlHkMF)

<br />

## 使用

### 初始化项目

```bash
npm init
```



### 安装

```bash
npm i @chenbz/wmp-watermark
```



### 构建npm

**工具** => **构建npm**



### 使用

`/pages/home/index.json`

```json
{
    "usingComponents": {
        "wmp-watermark": "@chenbz/wmp-watermark"
    }
}
```



`/pages/home/index.wxml`

```html
<view>
  <wmp-watermark imageUrl="https://s1.ax1x.com/2022/05/08/OlHYdA.png"></wmp-watermark>
</view>
```

<br />

## 属性

| 属性名       | 类型    | 默认值                                    | 描述              |
| ------------ | ------- | ----------------------------------------- | ----------------- |
| imageUrl     | String  | https://s1.ax1x.com/2022/05/08/OlbiFI.gif | 图片url（必传！） |
| lazyImageUrl | String  | https://s1.ax1x.com/2022/05/08/OlbiFI.gif | "加载中"图片url   |
| content      | String  | 请勿外传,盗版必究                         | 水印文字          |
| contentColor | String  | rgba(255,255,255,.5)                      | 水印字体颜色      |
| contentSize  | Number  | 15                                        | 水印字体大小      |
| level        | Number  | 60                                        | 水印水平间距      |
| vertical     | Number  | 150                                       | 水印垂直间距      |
| lazy         | Boolean | true                                      | 懒加载            |

