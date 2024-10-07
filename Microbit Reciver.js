input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 126)
    pins.digitalWritePin(DigitalPin.P1, 90)
})
radio.onReceivedValue(function (name, value) {
    if (name == "dir") {
        pins.servoWritePin(AnalogPin.P0, value)
    }
    if (name == "turn") {
        pins.servoWritePin(AnalogPin.P1, value)
    }
})
radio.setGroup(1)
basic.showIcon(IconNames.Happy)
