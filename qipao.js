class Bubble {
  constructor (dom, num = 10, speed = 10) {
    this.dom = dom
    this.num = num;
    this.speed = speed;
    // 记录id
    this.paoId = []
    this.addClasStyle()
    this.init()
  }
  // 初始化
  init () {
    for (let i = 0; i < this.num; i++) {
      let pDom = document.createElement('div')
      pDom.setAttribute('id', i)
      pDom.className = 'bubble'
      this.paoId.push({ id: i, timer: 0, movex: 0, movey: 0})
      this.dom.appendChild(pDom)
    }
  }
  // 加类 style
  addClasStyle () {
    let s = document.createElement('style')
    let sc = document.createTextNode(`.bubble{position: absolute;width: 100px;height: 100px;border-radius: 50px;box-shadow: 0 -0.285vw 0.48vw #fff inset, 0 -0.765vw 1.92vw #88f inset, 0 0.15vw 0.15vw #88f inset, 0.15vw 0 0.48vw #fff inset, -0.15vw 0 0.48vw #fff inset, 0 0.39vw 1.92vw white inset;}.bubble:after{opacity: 0.1;background: radial-gradient(rgba(0, 0, 0, 0), #000000 60%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0));}`)
    s.appendChild(sc)
    document.head.appendChild(s)
  }
  // 移动
  move (bub) {
    bub.timer = setInterval(() => {

    })
  }
}