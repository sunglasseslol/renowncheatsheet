const weapons = document.getElementById('weapons')
const tools = document.getElementById('tools')
const placeables = document.getElementById('placeable')
const buildings = document.getElementById('building')

// Tool Options
const t1Pick = document.getElementById('t1Pick')

// Weapon Options
const t2Messer = document.getElementById('t2Messer')

// Placeable Options
const t1Furnace = document.getElementById('t1Furnace')

// Building Options
const t1Wall = document.getElementById('t1Wall')

// Other
const topbar = document.getElementById('topbar')
const display = document.getElementById('display')

function getHtmlForStats(itemToShow) {
    const baseImageLoc = "/imgs/icons/wiki/items/weapons/"
    // weapons/Messer.png
    const item = itemToShow
    const itemId = item.id
    const type = "NULL";

    const itemName = item.innerHTML

    // if(item.contains('Pickaxe')) { console.log("HIII") }

    // for(_ = 0; _ < 5; _++) {console.log(itemId)}
    
    let imageLoc = `${baseImageLoc}` + `${itemId}` + '.png'

    const baseHtml = `
        <img id="statsImg" src="${imageLoc}">

        <ul class="statsItem">
        <span id="itemName">${itemName}</span>
        <br>
            <li>Damage: <span style="color: #FFACE4"></span></li>
            <li>Resource Gain: <span style="color: #FFACE4"></span></li>
            
            This ${type}
            <br>
            Requirements: <br>
            <span style="color: #FFACE4">●</span> No Requirements
        </ul>
    `

    display.innerHTML = baseHtml
}

function main() {
    console.warn("wiki.js loaded")
}

main()

function check() {
    // console.log('CHANGE')

    displayTools()
}

// function displayTool(selected) {
//     toolToDisplay = selected.value

//     // console.log(toolToDisplay)

//     let statWall = `${toolToDisplay}` + "Id"
//     // getHtmlForStats(t2Messer)

//     toolRemoveWhitespace = statWall.replace(/\s/g, '')
//     console.log(toolRemoveWhitespace)

//     getHtmlForStats(toolRemoveWhitespace)
// }



//TEST FUNCTION MAY BE USED IN FUTURE
function displayTools() {
    // itemToDisplay = type.value

    // console.log(toolToDisplay)

    // let statWall = `${itemToDisplay}` + "Id"
    // getHtmlForStats()

    // itemRemoveWhitespace = statWall.replace(/\s/g, '')
    // // console.log(itemRemoveWhitespace)

    getHtmlForStats(t2Messer)
}

weapons.addEventListener(
    'change',
    check
)

tools.addEventListener(
    'change',
    check
)

placeables.addEventListener(
    'change',
    check
)

buildings.addEventListener(
    'change',
    check
)