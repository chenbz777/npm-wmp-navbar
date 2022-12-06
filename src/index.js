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
    showBlankBlock: { // 是否开启空白块占位
      type: Boolean,
      value: false,
    },
  },

  lifetimes: {
    async attached() {
      const systemInfo = await wx.getSystemInfo()

      const {
        statusBarHeight,
        windowWidth
      } = systemInfo

      const rightCapsule = wx.getMenuButtonBoundingClientRect()

      const {
        top,
        right,
        width,
        height
      } = rightCapsule

      const navBarYPadding = top - statusBarHeight

      const navBarXPadding = windowWidth - right

      const navBarHeight = height + (navBarYPadding * 2)

      const navBarBodyHeight = height

      const rightCapsuleWidth = width

      const styleData = `--bgColor: ${this.properties.bgColor};
        --statusBarHeight: ${statusBarHeight}px;
        --navBarHeight: ${navBarHeight}px;
        --navBarBodyHeight: ${navBarBodyHeight}px;
        --navBarYPadding: ${navBarYPadding}px;
        --navBarXPadding: ${navBarXPadding}px;
        --rightCapsuleWidth: ${rightCapsuleWidth}px;
        --rightCapsuleHeight: ${navBarBodyHeight}px;
        --rightCapsuleRadius: ${navBarBodyHeight / 2}px;
        --titleColor: ${this.properties.titleColor};
        `

      const backIconUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAY9JREFUWEfFl88rBVEUgL/3Lyj/lbLzI6UoSlGEKAsWihBFKUpRFspCSSkWxIJYKIqFYqFYkJWsJJ06V6ep9969c+e9O6upmeb7zo85c6ZE4qOUmE+tBBo0sM9qAdZCYAqYVHAXsFlJomiBaWDCAAUuEmWPIgVmgTFD+gWagMN6CMwDIwb0DbQD+/XogSVg0ICk8QR+VA0u12NLsAL0G9Ab0Aac+cBjBVaBPgN6VviVLzxGYB3oMaAHhd+GwPMKbADdBnQDtAKPofA8AltApwFdAi3ASx54qMA20GFApwp/zwsPEdjRNDuWDBeJ/CsG7iuwAAwb0J7Cf2LhvgKjwFxKAWEnLYELPtuEJ1qKj5hShI7i7Gt4oc1Zl9fQBZp0EDmJNaDXpP5eR/FdaDlCS2Cfn/0YPanEdYhEjIBwloEBA3xViXNfiVgB4SwCQwYoC4nsBMc+EkUICCfpSuYCnQHGTdSylDYDB5UyUVQGHCO7lu/qsCrrULSAgJL+mLhIG/Wk6q5Qiwz4NP//PckF/gCIUUwhlNMi4AAAAABJRU5ErkJggg=='

      const homeIconUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAidJREFUWEft10+oD1EUwPHPW2BlI5KdkiQ7C2+l2LDxr+SxIJSQEiURCyz0ZEFECPm78KdeSVYSKcXKBjslxYJkJRtJ53VH86aZ38xv3u+3+53Vnbn3nPO95557zsyQ9rIJuzAdj3GijamhNkrYjUsF3TM40K29NgCHMZocHcXf3PNV7OwGoluAUziUHOzD+TTeg4tpfA9b8KcJSDcAV3K724HrBQebcQ3T8CRB/KyDaAIwFXcwgt/YjvsVhtckiFl4mSA+d4KoA5iN21iB78l57K6TLMUNzMPbBPG+SqETwILkfAk+IUL8qi6kaX4h7mIxPibd12W6VQDDKezz8Q5x5yt3UQE1Ew+xDN8SxNPi2jKAlcl5nOMbrMeXhjsvW/YIkRuRPxHFsfyiIsDG5HwKnmEtfk3CeaYaSRzOQ7bhVjaRB4iyejlNBPW6HjjOmziL/enFXlyIcQYQxSWKTEjQBWU/5AhOJsMxHg2AVamZxPtzOcp+AITNKNVR1EJWB8BxHCvpZvG+l1K0N+4zACLcUTjy8gLLe+kdz9OVzJsdyXJgAxalmSDrJ0D23fAAH4rXMIpGkPYTICIb9selDUAc2daK44kbdLNiLjuCSQEcxOma3IgQlyVwTwDyRso4Oh1fTwHKekhd/gwABhEYRGAQgUYRmIEfNaW2qlHNwdcGLXxCESuraNFsoiXPLTEWzqPW/+9mhTXxfxitPb6oixJw8fM6oU/8A8+oq0Iv6rN4AAAAAElFTkSuQmCC'

      this.setData({
        statusBarHeight,
        navBarHeight,
        navBarBodyHeight,
        navBarYPadding,
        navBarXPadding,
        rightCapsuleWidth,
        styleData,
        backIconUrl,
        homeIconUrl,
      })
    },
  },

  data: {
    statusBarHeight: 20, // 状态栏高度
    navBarHeight: 40, // 导航栏高度
    navBarBodyHeight: 32, // 导航栏内容高度
    navBarYPadding: 4, // 导航栏Y轴内间距
    navBarXPadding: 8, // 导航栏X轴内间距
    rightCapsuleWidth: 87, // 右边胶囊宽度
    styleData: '', // 样式变量
    backIconUrl: '', // 返回icon
    homeIconUrl: '', // 主页icon
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
    },

    backTop() {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      })
    },
  }
})
