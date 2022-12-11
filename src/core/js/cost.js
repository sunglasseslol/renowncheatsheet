// Event Handler

stoneToolsBtn = document.getElementById('stoneBtn')
ironToolsBtn = document.getElementById('ironBtn')
steelToolsBtn = document.getElementById('steelBtn')
backBtn = document.getElementById('backBtn')
resetBtn = document.getElementById('resetBtn')

root = document.getElementById("costs")

const rootContainer = document.createElement("div")
rootContainer.className = "costs"

root.appendChild(rootContainer)

function backToIndex() {
    location.href = "index.html"
}

function reset() {
    rootContainer.innerHTML = ""
}

function showStoneCosts() {
    console.warn("STONEBTN CLICKED")
    
    const stone = 40
    const fiber = 100
    const wood = 40
    
    rootContainer.innerHTML = `
        <ul class="costList" id="stoneCostList">
        Stone Tools
            <li>Wood: <span style="color: #FFACE4">${wood}</span></li>
            <li>Fiber: <span style="color: #FFACE4">${fiber}</span></li>
            <li>Stone: <span style="color: #FFACE4">${stone}</span></li>
            <br>
            Requirements: <br>
            <span style="color: #FFACE4">●</span> No Requirements
        </ul>
    `
}
function showIronCosts() {
    console.warn("IRONBTN CLICKED")

    const ironIngots = 75
    const wood = 370
    const cloth = 40

    rootContainer.innerHTML = `
        <ul class="costList" id="ironCostList">
        Iron Tools
            <li>Wood: <span style="color: #FFACE4">${wood}</span></li>
            <li>Cloth: <span style="color: #FFACE4">${cloth}</span></li>
            <li>Iron: <span style="color: #FFACE4">${ironIngots}</span></li>
            <br>
            Requirements: <br>
            <span style="color: #FFACE4">●</span> Workbench (LEVEL 1)
        </ul>
    `
}

function showSteelCosts() {
    console.warn("STEELBTN CLICKED")

    const steel = 75
    const wood = 370
    const cloth = 50

    rootContainer.innerHTML = `
        <ul class="costList" id="steelCostList">
        Steel Tools
            <li>Wood <span style="color: #FFACE4">${wood}</span></li>
            <li>Cloth: <span style="color: #FFACE4">${cloth}</span></li>
            <li>Steel: <span style="color: #FFACE4">${steel}</span></li>
            <br>
            Requirements: <br>
            <span style="color: #FFACE4">●</span> Workbench (LEVEL 3)
        </ul>
    `
}

stoneToolsBtn.addEventListener(
    "click",
    showStoneCosts
)
ironToolsBtn.addEventListener(
    "click", 
    showIronCosts
)
steelToolsBtn.addEventListener(
    "click", 
    showSteelCosts
)
resetBtn.addEventListener(
    "click",
    reset
)
backBtn.addEventListener(
    "click",
    backToIndex
)
