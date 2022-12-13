const weapons = document.getElementById('weapons')
const tools = document.getElementById('tools')
const placeables = document.getElementById('placeable')
const buildings = document.getElementById('building')
const guide = document.getElementById('guide')

// Tool Options
const t1Pick = document.getElementById('t1Pick')

const topbar = document.getElementById('topbar')

function checkForChange(item) {
    let statsToDisplay = item
}

tools.addEventListener(
    "change",
    checkForChange
)
