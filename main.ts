basic.forever(function () {
    basic.showString("Hello World!")
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.showIcon(IconNames.Angry)
    music.playMelody("- C5 B A E B F - ", 115)
})
