input.onButtonPressed(Button.A, function () {
    led.unplot(kanon_x, 0)
    kanon_x = kanon_x + 1
    if (kanon_x == 4) {
        kanon_x = 1
    }
    led.plot(kanon_x, 0)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(4, kanon_y)
    kanon_y = kanon_y - 1
    if (kanon_y <= ("" != (false && false))) {
        kanon_y = 3
    }
    led.plot(4, kanon_y)
})
let kanon_y = 0
let kanon_x = 0
kanon_x = 1
kanon_y = 3
led.plot(kanon_x, 0)
led.plot(4, kanon_y)
basic.forever(function () {
	
})
