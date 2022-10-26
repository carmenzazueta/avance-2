input.onButtonPressed(Button.A, function () {
    if (led2.get(LedSpriteProperty.X) == 4) {
        led2.set(LedSpriteProperty.X, 0)
    } else {
        led2.change(LedSpriteProperty.X, 1)
    }
})
input.onButtonPressed(Button.AB, function () {
    imposible = game.createSprite(randint(0, 4), randint(0, 4))
    if (led2.get(LedSpriteProperty.X) == imposible.get(LedSpriteProperty.X) && led2.get(LedSpriteProperty.Y) == imposible.get(LedSpriteProperty.Y)) {
        basic.clearScreen()
        basic.showString("Felicidades eres parte del 4%")
        game.addScore(1)
        basic.showNumber(score)
    } else {
        basic.pause(2000)
        game.gameOver()
    }
})
input.onButtonPressed(Button.B, function () {
    if (led2.get(LedSpriteProperty.Y) == 4) {
        led2.set(LedSpriteProperty.Y, 0)
    } else {
        led2.change(LedSpriteProperty.Y, 1)
    }
})
let imposible: game.LedSprite = null
let led2: game.LedSprite = null
let score = 0
score = game.score()
game.setScore(0)
for (let index = 0; index <= 4; index++) {
    for (let Indey = 0; Indey <= 4; Indey++) {
        led.plot(Indey, index)
        basic.pause(50)
    }
}
basic.clearScreen()
led2 = game.createSprite(2, 2)
basic.forever(function () {
	
})
