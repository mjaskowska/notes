// Single responsibility Principle 
// one class is resposible for only one action - here 1 is counting and tracking calories, 2 - is logging out when we exceed maxCalories
// solution: divide the class into modules

import logMessage from './logger.mjs'

class CalorieTracker {
    constructor (maxCalories) {
        this.maxCalories = maxCalories
        this.currentCalories = 0
    }

    trackCalories (calorieCount){
        this.currentCalories += calorieCount
        if(this.currentCalories > this.maxCalories){
           logMessage('Max calories exceeded')
        }
    }
   
}

const calorieTracker = new CalorieTracker(2000)

calorieTracker.trackCalories(500)
calorieTracker.trackCalories(1000)
calorieTracker.trackCalories(700)