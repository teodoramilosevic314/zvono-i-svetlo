input.onButtonPressed(Button.A, function () {
    Zvono()
})
function svetlo () {
    sija = !(sija)
}
function ekran () {
    if (sija) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.clearScreen()
    }
}
input.onButtonPressed(Button.B, function () {
    svetlo()
    sijalica()
    ekran()
})
input.onPinPressed(TouchPin.P1, function () {
    svetlo()
    sijalica()
    ekran()
})
input.onSound(DetectedSound.Loud, function () {
    Klepklep()
    sijalica()
    ekran()
})
function Zvono () {
    basic.showIcon(IconNames.Heart)
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.playTone(880, music.beat(BeatFraction.Whole))
    music.playTone(988, music.beat(BeatFraction.Whole))
    basic.clearScreen()
}
function sijalica () {
    if (sija) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
}
function Klepklep () {
    if (vreme > input.runningTime()) {
        svetlo()
    }
    vreme = input.runningTime() + pauza
}
let vrata = false
let vreme = 0
let sija = false
let pauza = 0
pins.digitalWritePin(DigitalPin.P0, 0)
pauza = 700
basic.forever(function () {
    if (vrata != !(input.pinIsPressed(TouchPin.P1))) {
        vrata = !(input.pinIsPressed(TouchPin.P1))
        sija = vrata
        sijalica()
        ekran()
    }
    basic.pause(500)
})
