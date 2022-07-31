basic.showIcon(IconNames.Heart)
let color = 0
basic.forever(function () {
    color += 1
    if (color % 3 == 0) {
        pins.digitalWritePin(DigitalPin.P16, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
        basic.showIcon(IconNames.No)
        basic.pause(10000)
    } else if (color % 3 == 1) {
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(1000)
    } else {
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        basic.showLeds(`
            . # # . .
            # . . # .
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.pause(5000)
        for (let index = 0; index < 10; index++) {
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.showLeds(`
                . # # . .
                # . . # .
                # . . . .
                # . . . #
                . # # # .
                `)
            basic.pause(500)
        }
    }
})
