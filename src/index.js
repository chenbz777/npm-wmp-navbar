// components/NavBar/index.ts
Component({
  properties: {
    title: { // 标题
      type: String,
      value: 'hello world',
    },
    showGoBack: { // 显示返回按钮
      type: Boolean,
      value: false,
    },
    showHome: { // 显示返回主页按钮
      type: Boolean,
      value: false,
    },
    position: { // 是否开启绝对定位
      type: Boolean,
      value: false,
    },
    bgColor: { // 导航栏背景颜色
      type: String,
      value: 'transparent',
    },
    titleColor: { // 导航栏标题颜色
      type: String,
      value: '#000000',
    },
    showSlot: { // 是否开启slot
      type: Boolean,
      value: false,
    },
  },

  lifetimes: {
    async attached() {
      // console.log(await wx.getSystemInfo());
      // console.log(wx.getMenuButtonBoundingClientRect());

      const systemInfo = await wx.getSystemInfo()

      const {
        statusBarHeight, windowWidth
      } = systemInfo

      const rightCapsule = wx.getMenuButtonBoundingClientRect()

      const {
        top, right, width, height
      } = rightCapsule

      const navBarYPadding = top - statusBarHeight

      const navBarXPadding = windowWidth - right

      const navBarHeight = height + (navBarYPadding * 2)

      const navBarBodyHeight = height

      const rightCapsuleWidth = width

      this.setData({
        statusBarHeight,
        navBarYPadding,
        navBarHeight,
        navBarBodyHeight,
        navBarXPadding,
        rightCapsuleWidth,
      })
    },
  },

  data: {
    statusBarHeight: 20,
    navBarPadding: 4,
    navBarHeight: 40,
    navBarBodyHeight: 32,
    navBarXPadding: 8,
    rightCapsuleWidth: 87,
  },

  methods: {
    goBack() {
      // console.log('goBack');

      const pages = getCurrentPages()

      // 单曲页面栈小于等于一个页面，直接返回首页
      if (pages.length <= 1) {
        this.goHome()
      } else {
        wx.navigateBack()
      }
    },
    goHome() {
      // console.log('goHome');

      // 小程序中页面栈最多十层
      // 返回的页面数，如果 delta 大于现有页面数，则返回到首页。
      wx.navigateBack({
        delta: 10
      })
    }
  }
})
