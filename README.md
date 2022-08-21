## 简介

**wmp-navbar** 是一款微信小程序导航栏**自定义组件**，通过简单的属性配置即可使用，同时为了保证可拓展性，预留了slot进行自定义展示。

<br />

## 效果图

[![vyrvCQ.png](https://s1.ax1x.com/2022/08/21/vyrvCQ.png)](https://imgse.com/i/vyrvCQ)

<br />

## 使用

### 初始化项目

```bash
npm init
```



### 安装

```bash
npm i @chenbz/wmp-navbar
```



### 构建npm

**工具** => **构建npm**



### 使用

`/pages/home/index.json`

```json
{
    "usingComponents": {
        "wmp-navbar": "@chenbz/wmp-navbar"
    }
}
```

`/pages/home/index.wxml`

```html
<view>
  <wmp-navbar title="标题"></wmp-navbar>
</view>
```

<br />

## 属性

| 属性        | 描述             | 默认值      |
| ----------- | ---------------- | ----------- |
| title       | 标题             | hello world |
| showGoBack  | 显示返回按钮     | false       |
| showHome    | 显示返回主页按钮 | false       |
| position    | 是否开启绝对定位 | false       |
| bg_color    | 导航栏背景颜色   | transparent |
| title_color | 导航栏标题颜色   | \#000000    |
| showSlot    | 是否开启slot     | false       |

