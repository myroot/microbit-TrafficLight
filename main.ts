function turnOn (num: number) {
    if (num < 10) {
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else if (num < 50) {
        pins.digitalWritePin(DigitalPin.P16, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else if (num < 80) {
        pins.digitalWritePin(DigitalPin.P16, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else if (num < 100) {
        pins.digitalWritePin(DigitalPin.P16, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P16, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P15, 1)
    }
}
input.onSound(DetectedSound.Loud, function () {
    for (let index = 0; index < 4; index++) {
        turnOn(input.soundLevel())
        basic.pause(100)
        turnOn(input.soundLevel())
        basic.pause(100)
        turnOn(input.soundLevel())
        basic.pause(100)
    }
})
basic.showIcon(IconNames.Heart)
let color = 0
