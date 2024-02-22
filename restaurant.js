const { chefInventory } = require("./fishMonger")



// this function invokes chefInventory with dailyPriceLimit
//uses that output (chefPurchases) in the for loop to write a menu
const fishMenu = (dailyPriceLimit) => {
    const chefPurchases = chefInventory(dailyPriceLimit)
    console.log(`<h1>Menu</h1>\n
    <article class="menu">`)
    for (const fish of chefPurchases) {
        console.log(`
        <h2>${fish.species}</h2>
        <section class="menu__item"> ${fish.species} Soup</section>
        <section class="menu__item">${fish.species} Sandwich</section>
        <section class="menu__item">Grilled ${fish.species}</section>`)  
    }
    console.log(`</article>)`)
}

module.exports = {fishMenu}

