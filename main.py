def on_button_pressed_a():
    global age, gender, start
    if start == 1:
        datalogger.log(datalogger.create_cv("Glasses: ", water))
        basic.clear_screen()
        increment_glass()
        basic.show_string("You drank " + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + str(water))))))))))))))) + " times",
            100)
    elif enter_gender == 0 and start == 0:
        age += 1
    elif enter_gender == 1:
        basic.clear_screen()
        gender = "male"
        start = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def increment_glass():
    global water, reminder
    water += 1
    reminder = 0

def on_pin_pressed_p2():
    food_and_glasses_total()
input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)

def increment_food():
    global food, reminder_food
    food += 1
    reminder_food = 0
def food_and_glasses_total():
    if start == 1:
        basic.clear_screen()
        basic.show_string("In total you drank " + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + str(water))))))))))))))) + " times",
            100)
        basic.show_string("In total you ate " + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + str(food))))))))))))))) + " times",
            100)

def on_button_pressed_ab():
    if start == 1:
        led.plot_bar_graph(water, 100)
        serial.write_value("water", water)
        led.plot_bar_graph(food, 100)
        serial.write_value("food", food)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global enter_gender, gender, start
    if start == 1:
        datalogger.log(datalogger.create_cv("Meals: ", food))
        basic.clear_screen()
        increment_food()
        basic.show_string("You ate " + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + str(food))))))))))))))) + " times",
            150)
    elif start == 0 and enter_gender == 0:
        basic.clear_screen()
        basic.show_string("Your age: " + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + ("" + str(age))))))))))))))) + "",
            100)
        basic.show_string("Enter your gender: (male - A, female - B)", 100)
        enter_gender = 1
    elif enter_gender == 1:
        basic.clear_screen()
        gender = "female"
        start = 1
input.on_button_pressed(Button.B, on_button_pressed_b)

time = 0
reminder_food = 0
gender = ""
enter_gender = 0
start = 0
reminder = 0
age = 0
food = 0
water = 0
basic.show_string("How old are you? (Press A to add a year, press B to confirm)",
    100)
age = 0
food = 0
water = 0
reminder = 0

def on_every_interval():
    global reminder, reminder_food, time
    if start == 1:
        reminder += 1
        reminder_food += 1
        time += 1
loops.every_interval(1000, on_every_interval)

def on_forever():
    global reminder, reminder_food
    if reminder >= 3600:
        pins.digital_write_pin(DigitalPin.P0, 1)
        basic.show_string("It's time to drink water", 150)
        reminder = 0
    else:
        pins.digital_write_pin(DigitalPin.P0, 0)
    if reminder_food >= 14400:
        pins.digital_write_pin(DigitalPin.P1, 1)
        basic.show_string("It's time to have a meal")
        reminder_food = 0
    else:
        pins.digital_write_pin(DigitalPin.P1, 0)
    if time >= 57600:
        if gender == "male":
            if age <= 1:
                if water < 1:
                    basic.show_string("You should drink more")
                elif water <= 4:
                    basic.show_string("You drank enough today")
                else:
                    basic.show_string("You should drink less")
            elif age > 1 and age <= 3:
                if water < 3:
                    basic.show_string("You should drink more")
                elif water <= 5:
                    basic.show_string("You drank enough today")
                else:
                    basic.show_string("You should drink less")
            elif age >= 4 and age <= 8:
                if water < 4:
                    basic.show_string("You should drink more")
                elif water <= 6:
                    basic.show_string("You drank enough today")
                else:
                    basic.show_string("You should drink less")
            elif age >= 9 and age <= 13:
                if water < 5:
                    basic.show_string("You should drink more")
                elif water <= 7:
                    basic.show_string("You drank enough today")
                else:
                    basic.show_string("You should drink less")
            elif age >= 14 and age <= 18:
                if water < 7:
                    basic.show_string("You should drink more")
                elif water <= 9:
                    basic.show_string("You drank enough today")
                else:
                    basic.show_string("You should drink less")
            elif age >= 19:
                if water < 9:
                    basic.show_string("You should drink more")
                elif water <= 12:
                    basic.show_string("You drank enough today")
                else:
                    basic.show_string("You should drink less")
        elif gender == "female":
            if age <= 1:
                if water < 1:
                    basic.show_string("You should drink more")
                elif water <= 4:
                    basic.show_string("You drank enough today")
                else:
                    basic.show_string("You should drink less")
            elif age > 1 and age <= 3:
                if water < 3:
                    basic.show_string("You should drink more")
                elif water <= 5:
                    basic.show_string("You drank enough today")
                else:
                    basic.show_string("You should drink less")
            elif age >= 4 and age <= 8:
                if water < 4:
                    basic.show_string("You should drink more")
                elif water <= 6:
                    basic.show_string("You drank enough today")
                else:
                    basic.show_string("You should drink less")
            elif age >= 9 and age <= 13:
                if water < 5:
                    basic.show_string("You should drink more")
                elif water <= 7:
                    basic.show_string("You drank enough today")
                else:
                    basic.show_string("You should drink less")
            elif age >= 14 and age <= 18:
                if water < 6:
                    basic.show_string("You should drink more")
                elif water <= 8:
                    basic.show_string("You drank enough today")
                else:
                    basic.show_string("You should drink less")
            elif age >= 19:
                if water < 7:
                    basic.show_string("You should drink more")
                elif water <= 9:
                    basic.show_string("You drank enough today")
                else:
                    basic.show_string("You should drink less")
        if food < 5:
            basic.show_string("You did not eat enough today")
        elif food <= 6:
            basic.show_string("You ate enough today")
        else:
            basic.show_string("You should consider eating less")
basic.forever(on_forever)
