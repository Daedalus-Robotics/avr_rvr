input.onButtonPressed(Button.A, function () {
    Send()
})
function Send () {
    if (dir == 90) {
        dir = 360
    } else {
        dir = 90
    }
    radio.sendValue("dir", dir)
}
let dir = 0
basic.showIcon(IconNames.Happy)
dir = 0
radio.setGroup(52)
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
basic.forever(function () {
    if (serial.readString() == "move") {
        Send()
    }
})
