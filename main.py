def on_forever():
    basic.show_string("Hello World!")
    basic.show_leds("""
        . # # # .
                # # # # #
                # # # # #
                # # # # #
                . # # # .
    """)
    basic.show_icon(IconNames.ANGRY)
    music.play_melody("- C5 B A E B F - ", 115)
basic.forever(on_forever)
