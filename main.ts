radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (receivedNumber == 2) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    if (receivedNumber == 3) {
    	
    }
})
basic.showString("hola")
music.playMelody("C5 G A G D F G C ", 120)
basic.forever(function () {
    radio.setGroup(200)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) == 6) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        radio.sendNumber(4)
    }
})
