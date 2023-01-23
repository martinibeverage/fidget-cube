input.onButtonPressed(Button.A, function () {
    basic.showString("MARTIN")
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . . . .
        # . # . .
        . . # . .
        # . # . .
        . . . . .
        `)
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
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . . .
        . . # . #
        . . # . .
        . . # . #
        . . . . .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . # . # .
        `)
})
music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Forever)
basic.showString("HI! MY NAME IS")
