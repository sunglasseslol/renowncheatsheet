const weapons = document.getElementById('weapons')
const armor = document.getElementById('armor')
const tools = document.getElementById('tools')
const placeables = document.getElementById('placeable')
const buildings = document.getElementById('building')

// Other
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

let weaponStats = {
    "2": "10",
    "4": "26",
    "6": "35",
    "7": "40",
    "8": "50",
    "9": "37",
    "11": "0",
    "12": "0",
    "13": "0",
    "15": "arrow",
    "16": "arrow",
    "17": "arrow"
}

let armorJson = {
    "2": "t1Hood",
    "3": "t1Arms",
    "4": "t1Shirt",
    "5": "t1Pants",
    "6": "t1Footwear",
    "8": "t2Helm",
    "9": "t2Coif",
    "10": "t2Arms",
    "11": "t2Shirt",
    "12": "t2Breastplate",
    "13": "t2Pants",
    "14": "t2Footwear",
    "15": "t2Gloves",
    "17": "t3Helm",
    "18": "t3Coif",
    "19": "t3Arms",
    "20": "t3Shirt",
    "21": "t3Pants",
    "22": "t3Footwear",
    "23": "t3Gloves",
    "25": "mGloves",
    "26": "mBelt",
}

let armorStats = {
    "2": "",
    "3": "",
    "4": "",
    "5": "",
    "6": "",
    "8": "",
    "9": "",
    "10": "",
    "11": "",
    "12": "",
    "14": "",
    "15": "",
    "17": "",
    "18": "",
    "19": "",
    "20": "",
    "21": "",
    "22": "",
    "23": "",
    "25": "",
    "26": ""
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

let toolsStats = {
    "2": "10",
    "3": "t1Axe",
    "4": "t1Hoe",
    "5": "t1Mallet",
    "6": "t1CKnife",
    "8": "20",
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

    getHtmlForStats(weaponsJson[selectedItem], 'weapons', 0, weaponStats[selectedItem])
}
function checkArmor() {
    let selectedItem = armor.selectedIndex

    getHtmlForStats(armorJson[selectedItem], 'armor', 0, armorStats[selectedItem])
}
function checkTools() {
    let selectedItem = tools.selectedIndex

    getHtmlForStats(toolsJson[selectedItem], 'tools', toolsStats[selectedItem], 0)
}
function checkPlaceables() {
    let selectedItem = placeables.selectedIndex

    getHtmlForStats(placeablesJson[selectedItem], 'placeables', 0, 0)
}
function checkBuildings() {
    let selectedItem = buildings.selectedIndex

    getHtmlForStats(buildingsJson[selectedItem], 'building', 0, 0)
}

function getHtmlForStats(itemToShow, type, resourceGain, damage) {
    const baseImageLoc = `../imgs/icons/wiki/items/${type}/`

    const item = itemToShow
    const itemName = document.getElementById(item).innerHTML
    console.log(itemName)

    const dmg = damage;
    const gain = resourceGain;

    let imageLoc = `${baseImageLoc}` + `${itemName}` + '.png'

    const baseHtml = `
        <img id="statsImg" src="${imageLoc}">

        <ul class="statsItem">
        <span id="itemName">${itemName}</span>
        <br>
            <li id="damage">Damage: <span style="color: #FFACE4">${dmg}</span></li>
            <li id="resourceGain">Resource Gain: <span style="color: #FFACE4">${gain}</span></li>
        
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

armor.addEventListener(
    'change',
    checkArmor
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