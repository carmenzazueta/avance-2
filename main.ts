let led2: game.LedSprite = null
let imposible: game.LedSprite = null
let score = 0
input.onPinPressed(TouchPin.P0, function () {
    led2.change(LedSpriteProperty.Y, -1)
})
function nivel4 () {
    imposible = game.createSprite(randint(0, 4), randint(0, 4))
    basic.pause(100)
    imposible.change(LedSpriteProperty.Brightness, -255)
}
function nivel3 () {
    imposible = game.createSprite(randint(0, 4), randint(0, 3))
    basic.pause(200)
    imposible.change(LedSpriteProperty.Brightness, -255)
}
input.onButtonPressed(Button.A, function () {
    led2.change(LedSpriteProperty.X, 1)
})
function nivel2 () {
    imposible = game.createSprite(randint(0, 4), randint(0, 2))
    basic.pause(300)
    imposible.change(LedSpriteProperty.Brightness, -255)
}
input.onButtonPressed(Button.AB, function () {
    if (led2.get(LedSpriteProperty.X) == imposible.get(LedSpriteProperty.X) && led2.get(LedSpriteProperty.Y) == imposible.get(LedSpriteProperty.Y)) {
        basic.clearScreen()
        basic.showString("Nivel 2")
        game.addScore(1)
        basic.showNumber(score)
    } else {
        basic.pause(2000)
        game.gameOver()
    }
})
input.onButtonPressed(Button.B, function () {
    led2.change(LedSpriteProperty.Y, 1)
})
input.onPinPressed(TouchPin.P1, function () {
    led2.change(LedSpriteProperty.X, -1)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    score = game.score()
    game.setScore(0)
    for (let index = 0; index <= 4; index++) {
        for (let Indey = 0; Indey <= 4; Indey++) {
            led.plot(Indey, index)
            basic.pause(50)
        }
    }
    nivel1()
    led2 = game.createSprite(0, 0)
    basic.clearScreen()
})
function nivel1 () {
    imposible = game.createSprite(randint(0, 4), randint(0, 1))
    basic.pause(400)
    imposible.change(LedSpriteProperty.Brightness, -255)
}
