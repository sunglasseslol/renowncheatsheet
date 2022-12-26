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

// JSON Objects
let weaponsJson = {
    "2": "t1Cudgel",
    "4": "t2Messer",
    "6": "t3Longsword",
    "7": "t3Messer",
    "8": "t3Halberd",
    "9": "t3Greatsword",
    "11": "sBuckler",
    "12": "sPaviseShield",
    "13": "sKiteShield",
    "15": "bShortbow",
    "16": "bLongbow",
    "17": "bWarbow"
}

let toolsJson = {
    "2": "t1Pick",
    "3": "t1Axe",
    "4": "t1Hoe",
    "5": "t1Mallet",
    "6": "t1CKnife",
    "8": "t2Pick",
    "9": "t2Axe",
    "10": "t2Hoe",
    "11": "t2Mallet",
    "12": "t2CKnife",
    "14": "t3Pick",
    "15": "t3Axe",
    "16": "t3Hoe",
    "17": "t3Mallet",
    "18": "t3CKnife"
}

let placeablesJson = {
    "2": "t1Furnace",
    "3": "t2Furnace",
    "4": "t3Furnace"
}

let buildingsJson = {
    "2": "t1Foundation",
    "3": "t1Wall",
    "4": "t1Roof",
    "5": "t1TRoof",
    "6": "t2Foundation",
    "8": "t2Wall",
    "9": "t2Roof",
    "10": "t2TRoof",
    "11": "t3Foundation",
    "12": "t3Wall",
    "14": "t3Roof",
    "15": "t3TRoof",
}


function main() {
    console.warn("wiki.js loaded")
}

main()

function checkWeapons() {
    let selectedItem = weapons.selectedIndex

    getHtmlForStats(weaponsJson[selectedItem], 'weapons')
}
function checkTools() {
    let selectedItem = tools.selectedIndex

    getHtmlForStats(toolsJson[selectedItem], 'tools')
}
function checkPlaceables() {
    let selectedItem = placeables.selectedIndex

    getHtmlForStats(placeablesJson[selectedItem], 'placeables')
}
function checkBuildings() {
    let selectedItem = buildings.selectedIndex

    getHtmlForStats(buildingsJson[selectedItem])
}

function getHtmlForStats(itemToShow, type) {
    const baseImageLoc = `/imgs/icons/wiki/items/${type}/`

    const item = itemToShow
    const itemName = document.getElementById(item).innerHTML
    console.log(itemName)

    const dmg = 0;
    const resourceGain = 0;
    
    let imageLoc = `${baseImageLoc}` + `${itemName}` + '.png'

    const baseHtml = `
        <img id="statsImg" src="${imageLoc}">

        <ul class="statsItem">
        <span id="itemName">${itemName}</span>
        <br>
            <li>Damage: <span style="color: #FFACE4">${dmg}</span></li>
            <li>Resource Gain: <span style="color: #FFACE4"></span></li>
        
            <br>
            Requirements: <br>
            <span style="color: #FFACE4">●</span> No Requirements
        </ul>
    `

    display.innerHTML = baseHtml
}

weapons.addEventListener(
    'change',
    checkWeapons
)

tools.addEventListener(
    'change',
    checkTools
)

placeables.addEventListener(
    'change',
    checkPlaceables
)

buildings.addEventListener(
    'change',
    checkBuildings
)