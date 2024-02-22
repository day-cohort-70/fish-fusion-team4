const { boatInventory } = require("./fishingBoat.js")

// create a function that filters boatInventory
// boatInventory. must be >10 total fish
// boatInventory. price must be <$7.50
const mongerInventory = (boatInventory) => {
    const mongerSupply = []
    for (const fish of boatInventory) {
        if (fish.amount >= 10 && fish.price <= 7.50) {
            fish.amount = 10
        mongerSupply.push(fish)
        }
    }
    return mongerSupply
}
//declare this variable to be able to use it in chefInventory in forof loop
const optionsForChef = mongerInventory(boatInventory)


// create a function that filters the monger supply (var = optionsForChef)
// compare the monger supply price to the dailyPriceLimit
//create new array of fish that fit this criteria to be returned and used to print menu 
// called in restaurant.js module
const chefInventory = (dailyPriceLimit) => {
    chefSelections = []
    for (const fish of optionsForChef) {
        if (fish.price <= dailyPriceLimit) {
            fish.amount = 5
        chefSelections.push(fish)
        }
    }
    return chefSelections
} 

module.exports = {chefInventory}