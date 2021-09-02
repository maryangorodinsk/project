music.playMelody("E G C5 C5 B E B G ", 120)
basic.showNumber(56312)
basic.showArrow(ArrowNames.SouthWest)
music.setBuiltInSpeakerEnabled(true)
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Yes)
}
basic.showLeds(`
    # . . . #
    . # . # .
    # . # . #
    # . . . #
    # # # # #
    `)
basic.pause(5000)
basic.forever(function () {
    music.playMelody("- C5 B A E B F - ", 115)
    basic.showString("Hello World!")
    basic.showNumber(1000)
    basic.showIcon(IconNames.Angry)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
})
