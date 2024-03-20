input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (start == 1) {
        datalogger.log(datalogger.createCV("Glasses: ", water))
        basic.clearScreen()
        increment_glass()
        basic.showString("You drank " + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + water))))))))))))))) + " times", 100)
    } else if (enter_gender == 0 && start == 0) {
        age += 1
    } else if (enter_gender == 1) {
        basic.clearScreen()
        gender = "male"
        start = 1
    }
    
})
function increment_glass() {
    
    water += 1
    reminder = 0
}

input.onPinPressed(TouchPin.P2, function on_pin_pressed_p2() {
    food_and_glasses_total()
})
function increment_food() {
    
    food += 1
    reminder_food = 0
}

function food_and_glasses_total() {
    if (start == 1) {
        basic.clearScreen()
        basic.showString("In total you drank " + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + water))))))))))))))) + " times", 100)
        basic.showString("In total you ate " + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + food))))))))))))))) + " times", 100)
    }
    
}

input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    if (start == 1) {
        led.plotBarGraph(water, 100)
        serial.writeValue("water", water)
        led.plotBarGraph(food, 100)
        serial.writeValue("food", food)
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (start == 1) {
        datalogger.log(datalogger.createCV("Meals: ", food))
        basic.clearScreen()
        increment_food()
        basic.showString("You ate " + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + food))))))))))))))) + " times", 150)
    } else if (start == 0 && enter_gender == 0) {
        basic.clearScreen()
        basic.showString("Your age: " + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + age))))))))))))))) + "", 100)
        basic.showString("Enter your gender: (male - A, female - B)", 100)
        enter_gender = 1
    } else if (enter_gender == 1) {
        basic.clearScreen()
        gender = "female"
        start = 1
    }
    
})
let time = 0
let reminder_food = 0
let gender = ""
let enter_gender = 0
let start = 0
let reminder = 0
let age = 0
let food = 0
let water = 0
basic.showString("How old are you? (Press A to add a year, press B to confirm)", 100)
age = 0
food = 0
water = 0
reminder = 0
loops.everyInterval(1000, function on_every_interval() {
    
    if (start == 1) {
        reminder += 1
        reminder_food += 1
        time += 1
    }
    
})
basic.forever(function on_forever() {
    
    if (reminder >= 3600) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showString("It's time to drink water", 150)
        reminder = 0
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    
    if (reminder_food >= 14400) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showString("It's time to have a meal")
        reminder_food = 0
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    
    if (time >= 57600) {
        if (gender == "male") {
            if (age <= 1) {
                if (water < 1) {
                    basic.showString("You should drink more")
                } else if (water <= 4) {
                    basic.showString("You drank enough today")
                } else {
                    basic.showString("You should drink less")
                }
                
            } else if (age > 1 && age <= 3) {
                if (water < 3) {
                    basic.showString("You should drink more")
                } else if (water <= 5) {
                    basic.showString("You drank enough today")
                } else {
                    basic.showString("You should drink less")
                }
                
            } else if (age >= 4 && age <= 8) {
                if (water < 4) {
                    basic.showString("You should drink more")
                } else if (water <= 6) {
                    basic.showString("You drank enough today")
                } else {
                    basic.showString("You should drink less")
                }
                
            } else if (age >= 9 && age <= 13) {
                if (water < 5) {
                    basic.showString("You should drink more")
                } else if (water <= 7) {
                    basic.showString("You drank enough today")
                } else {
                    basic.showString("You should drink less")
                }
                
            } else if (age >= 14 && age <= 18) {
                if (water < 7) {
                    basic.showString("You should drink more")
                } else if (water <= 9) {
                    basic.showString("You drank enough today")
                } else {
                    basic.showString("You should drink less")
                }
                
            } else if (age >= 19) {
                if (water < 9) {
                    basic.showString("You should drink more")
                } else if (water <= 12) {
                    basic.showString("You drank enough today")
                } else {
                    basic.showString("You should drink less")
                }
                
            }
            
        } else if (gender == "female") {
            if (age <= 1) {
                if (water < 1) {
                    basic.showString("You should drink more")
                } else if (water <= 4) {
                    basic.showString("You drank enough today")
                } else {
                    basic.showString("You should drink less")
                }
                
            } else if (age > 1 && age <= 3) {
                if (water < 3) {
                    basic.showString("You should drink more")
                } else if (water <= 5) {
                    basic.showString("You drank enough today")
                } else {
                    basic.showString("You should drink less")
                }
                
            } else if (age >= 4 && age <= 8) {
                if (water < 4) {
                    basic.showString("You should drink more")
                } else if (water <= 6) {
                    basic.showString("You drank enough today")
                } else {
                    basic.showString("You should drink less")
                }
                
            } else if (age >= 9 && age <= 13) {
                if (water < 5) {
                    basic.showString("You should drink more")
                } else if (water <= 7) {
                    basic.showString("You drank enough today")
                } else {
                    basic.showString("You should drink less")
                }
                
            } else if (age >= 14 && age <= 18) {
                if (water < 6) {
                    basic.showString("You should drink more")
                } else if (water <= 8) {
                    basic.showString("You drank enough today")
                } else {
                    basic.showString("You should drink less")
                }
                
            } else if (age >= 19) {
                if (water < 7) {
                    basic.showString("You should drink more")
                } else if (water <= 9) {
                    basic.showString("You drank enough today")
                } else {
                    basic.showString("You should drink less")
                }
                
            }
            
        }
        
        if (food < 5) {
            basic.showString("You did not eat enough today")
        } else if (food <= 6) {
            basic.showString("You ate enough today")
        } else {
            basic.showString("You should consider eating less")
        }
        
    }
    
})
