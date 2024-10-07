input.onButtonPressed(Button.A, function () {
    if (dir == 90) {
        dir = 180
    } else {
        dir = 90
    }
    radio.sendValue("dir", dir)
})
let dir = 0
basic.showIcon(IconNames.Happy)
radio.setGroup(1)
dir = 0
