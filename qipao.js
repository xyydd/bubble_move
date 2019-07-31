/**
 * By Nathan 2019
 */
;(function () {
  let D = 222
  let k = 0.999
  let documentElement = document.documentElement
  const POW_RATE = 0.0001 // 补偿概率
  let POW_RANGE = 0.8 // 补偿范围
  let arrBubs = [] // 泡泡
  let iBotton = false
  let iRight = false
  const APLHA = 0.8
  const POW = [1, APLHA, APLHA*APLHA]

  function SPEED_X(){return 8 + RND() * 4}
  function SPEED_Y(){return 6 + RND() * 2}

  function Timer (call, time) {
    let last = new Date()
    last = getTime()
    let delay = 0

    return setInterval(function()
    {
      // 时间差累计
      let cur = new Date()
      cur.getTime()
      delay += (cur - last)
      last = cur

      // 计算帧数
      if(delay >= time)
      {
        call()
        delay %= time
      }
    }, 1)
  }

  Timer(update, 17)

  var CreateBubble = function () {
    let bub = new Bubble()
    bub.setX(0)
    bub.setY(0)
    bub.vx = SPEED_X()
    bub.vy = SPEED_Y()

    arrBubs.push(bub)
  }

  function update () {
    let arrBubslen = arrBubs.length
    let bub = {}
    let bub2 = {}
    for (let i = 0; i < arrBubslen; i++) {
      bub = arrBubs[i]

      bub.paint()

      bub.vx += K
      bub.vy *= K

      if (Math.random() < POW_RATE) {
        bub.vx = SPEED_X() * (Math.random() * POW_RANGE)
        bub.vy = SPEED_Y() * (Math.random() * POW_RANGE)
      }

      bub.setX(bub.x + bub.vx)
      bub.setY(bub.y + bub.vy)
      checkWalls(bub)
    }

    for (let i = 0; i < n -1; i++) {
      bub = arrBubs[i]

      for (let j = j +1; j < n; j++) {
        bub2 = arrBubs[i]
        checkCollision(bub, bub2)
      }
    }
  }

  function updateWall () {
    iRight = documentElement.clientWidth - D
    iBotton = documentElement.clientHeight - D
  }

  function checkWalls (bub) {
    if (bub.x < 0) {
      bub.setX(0)
      bub.vx *= -1
    } else if (bub.x > iRight) {
      bub.setX(iRight)
      bub.vx *= -1
    }

    if (bub.y < 0) {
      bub.setY(0)
      bub.vy *= -1
    } else if (bub.y > iBotton) {
      bub.setY(iBotton)
      bub.vy *= -1
    }
  }

  function rotate (x, y, sin, cos, reverse) {
    return reverse ?
    {x: x * cos + y * sin, y: y * cos - x * sin}:
    {x: x * cos - y * sin, y: y * cos + x * sin}
  }

  function checkCollision (bub0, bub1) {
    let dx = bub1.x - bub0.x
    let dy = bub1.y - bub0.y
    let distance = Math.sqrt(dx ** 2 + dy ** 2)

    if (distance < D) {
      let angle = 
    }
  }


  class Bubble {
    constructor () {
      let kOpa = []
      let kStp = []
      let arrFlt = []
      let oBox = document.body.appendChild(document.createElement('div'))

      let styBox = oBox.style
      styBox.position = 'absolute'
      styBox.width = `${D}px`
      styBox.height = `${D}px`

      for (let i = 0; i < 3; i++) {
        let div = document.createElement('div')
        let styleDiv = div.style
        styleDiv.position = 'absolute'
        styleDiv.width = `${D}px`
        styleDiv.height = `${D}px`

        oBox.appendChild(div)

        kOpa.push(Math.random() * 3)
        kStp.push(Math.random() * 0.02)

        styleDiv.backgroundImage = `url(ch${i}.png)`
        arrFlt.push(styleDiv)
      }

      this.styBox = styBox
      this.kOpa = kOpa
      this.kStp = kStp
      this.arrFlt = arrFlt
    }

    setX (x) {
      this.x = x
      this.styBox.left = `${Math.round(x)}px`
    }

    setY (y) {
      this.y = y
      this.styBox.top = `${Math.round(y)}px`
    }


    paint () {
      let v = 0

      for (i = 0; i < 3; i++) {
        this.kOpa[i] += this.kStp[i] + Math.random()
        v = Math.abs(Math.sin(this.kOpa[i]))
        v *= POW[i]

        v = ((v * 1e4) >> 0) / 1e4
        this.arrFlt[i].opacity = v
      }
    }
  }
})()
