const { boatInventory } = require("./fishingBoat.js")
const { mongerInventory, chefInventory } = require("./fishMonger.js")
// const { fishMenu } = require("./restaurant.js")




const dailyPriceLimit = 3.99





const optionsForChef = mongerInventory(boatInventory)
console.log(optionsForChef)

const chefChoice = chefInventory(optionsForChef)
console.log(chefChoice)

// const menu = fishMenu(dailyPriceLimit)
// console.log(menu)

// module.exports = { dailyPriceLimit }