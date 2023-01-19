input.onButtonPressed(Button.A, function () {
    basic.showString("MARTIN")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("MARTIN QUILILAN")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("QUILILAN")
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # # # # #
        . . # # .
        `)
})
music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Forever)
basic.showString("HI! MY NAME IS")
