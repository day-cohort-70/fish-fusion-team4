const { boatInventory } = require("./fishingBoat.js")
// const { dailyPriceLimit } = require("./main.js")


const dailyPriceLimit = 3.99
// create a function that filters boatInventory
// boatInventory. must be >10 total fish
// boatInventory. price must be <$7.50
const mongerInventory = (boatInventory) => {
    mongerSupply = []
    for (const fish of boatInventory) {
        if (fish.amount >= 10 && fish.price <= 7.50) {
            fish.amount = 10
        mongerSupply.push(fish)
        }
    }
    return mongerSupply
}

const chefInventory = (options) => {
    chefSelections = []
    for (const fish of options) {
        if (fish.price <= dailyPriceLimit) {
            fish.amount = 5
        chefSelections.push(fish)
        }
    }
    return chefSelections
}

/* const fishMenu = (dailyPriceLimit) => {
    const finalSelection = chefInventory(optionsForChef)
    return finalSelection
} */

module.exports = {mongerInventory, chefInventory}