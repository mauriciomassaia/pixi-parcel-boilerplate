import { Application, Graphics } from 'pixi.js'
import gsap from 'gsap'
import './index.css'

const app = new Application({
  width: window.innerWidth,
  height: window.innerHeight,
  resolution: window.devicePixelRatio || 1,
  antialias: true,
  backgroundColor: 0x333333
})

const ball = new Graphics()
ball.beginFill(0xff33ff).drawCircle(0, 0, 100)
ball.position.set(app.view.width / 2, app.view.height / 2)
app.stage.addChild(ball)

gsap.to(ball.scale, {
  duration: 1,
  yoyo: true,
  repeat: -1,
  ease: 'power2.inOut',
  x: 2,
  y: 2
})

document.body.appendChild(app.view)
app.start()
