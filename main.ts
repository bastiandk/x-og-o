input.onButtonPressed(Button.A, function () {
    led.plot(kanon_x, 0)
    kanon_x = kanon_x + 1
    if (kanon_x == 4) {
        kanon_x = 1
    }
    led.unplot(kanon_x, 0)
})
input.onButtonPressed(Button.AB, function () {
    let taget = false
    if (led.point(kanon_x, kanon_y) != taget) {
        if (kanon_x == 1 && kanon_y == 1 && tal1 == 0) {
            _1 = tal
            if (tal == -1) {
                led.plotBrightness(kanon_x, kanon_y, 150)
            } else {
                led.plotBrightness(kanon_x, kanon_y, 50)
            }
            tal1 = 1
        } else if (kanon_x == 2 && kanon_y == 1) {
            _2 = tal
            if (tal == -1) {
                led.plotBrightness(kanon_x, kanon_y, 150)
            } else {
                led.plotBrightness(kanon_x, kanon_y, 50)
            }
        } else if (kanon_x == 3 && kanon_y == 1) {
            _3 = tal
            if (tal == -1) {
                led.plotBrightness(kanon_x, kanon_y, 150)
            } else {
                led.plotBrightness(kanon_x, kanon_y, 50)
            }
        } else if (kanon_x == 1 && kanon_y == 2) {
            _4 = tal
            if (tal == -1) {
                led.plotBrightness(kanon_x, kanon_y, 150)
            } else {
                led.plotBrightness(kanon_x, kanon_y, 50)
            }
        } else if (kanon_x == 2 && kanon_y == 2) {
            _5 = tal
            if (tal == -1) {
                led.plotBrightness(kanon_x, kanon_y, 150)
            } else {
                led.plotBrightness(kanon_x, kanon_y, 50)
            }
        } else if (kanon_x == 3 && kanon_y == 2) {
            _6 = tal
            if (tal == -1) {
                led.plotBrightness(kanon_x, kanon_y, 150)
            } else {
                led.plotBrightness(kanon_x, kanon_y, 50)
            }
        } else if (kanon_x == 1 && kanon_y == 3) {
            _7 = tal
            if (tal == -1) {
                led.plotBrightness(kanon_x, kanon_y, 150)
            } else {
                led.plotBrightness(kanon_x, kanon_y, 50)
            }
        } else if (kanon_x == 2 && kanon_y == 3) {
            _8 = tal
            if (tal == -1) {
                led.plotBrightness(kanon_x, kanon_y, 150)
            } else {
                led.plotBrightness(kanon_x, kanon_y, 50)
            }
        } else {
            _9 = tal
            if (tal == -1) {
                led.plotBrightness(kanon_x, kanon_y, 150)
            } else {
                led.plotBrightness(kanon_x, kanon_y, 50)
            }
        }
        if (tal == -1) {
            tal = 1
        } else {
            tal = -1
        }
    }
})
input.onButtonPressed(Button.B, function () {
    led.plot(4, kanon_y)
    kanon_y = kanon_y - 1
    if (kanon_y <= 0) {
        kanon_y = 3
    }
    led.unplot(4, kanon_y)
})
let tal = 0
let tal1 = 0
let kanon_y = 0
let kanon_x = 0
let _9 = 0
let _8 = 0
let _7 = 0
let _6 = 0
let _5 = 0
let _4 = 0
let _3 = 0
let _2 = 0
let _1 = 0
led.plot(4, 0)
led.plot(4, 1)
led.plot(4, 2)
led.plot(4, 3)
led.plot(4, 4)
led.plot(3, 4)
led.plot(2, 4)
led.plot(1, 4)
led.plot(0, 4)
led.plot(0, 3)
led.plot(0, 2)
led.plot(0, 1)
led.plot(0, 0)
led.plot(1, 0)
led.plot(2, 0)
led.plot(3, 0)
kanon_x = 1
kanon_y = 3
led.unplot(kanon_x, 0)
led.unplot(4, kanon_y)
basic.forever(function () {
	
})
