radio.onReceivedValue(function (name, value) {
    if (name == "dir") {
        pins.servoWritePin(AnalogPin.P0, value)
    }
})
radio.setGroup(52)
basic.showIcon(IconNames.Happy)
