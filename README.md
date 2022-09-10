## 简介

**wmp-navbar** 是一款微信小程序导航栏**自定义组件**，通过简单的属性配置即可使用，同时为了保证可拓展性，预留了slot进行自定义展示。

<br />

## 效果图

![效果图](https://s1.ax1x.com/2022/09/07/vbZj29.png)

<br />

## 亮点

1. ✅保证`安卓`和`IOS`显示效果一致
2. 拓展🉑️同时显示`返回上一页`和`返回首页`
3. 点击标题🉑️返回顶部
4. 预留slot进行拓展

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

```
/pages/home/index.json
{
    "usingComponents": {
        "wmp-navbar": "@chenbz/wmp-navbar"
    }
}
/pages/home/index.wxml
<view>
  <wmp-navbar title="标题"></wmp-navbar>
</view>
```

<br />

## 属性

| 属性       | 描述             | 默认值      |
| ---------- | ---------------- | ----------- |
| title      | 标题             | hello world |
| showGoBack | 显示返回按钮     | false       |
| showHome   | 显示返回主页按钮 | false       |
| position   | 是否开启绝对定位 | false       |
| bgColor    | 导航栏背景颜色   | white |
| titleColor | 导航栏标题颜色   | \#000000    |
| showSlot   | 是否开启slot     | false       |

<br />

## 更新日志

- 2022-08-21 初次提交
- 2022-09-07 优化顶部导航栏粘性定位顶部
- 2022-09-10 新增点击标题返回顶部

