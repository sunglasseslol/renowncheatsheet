const weapons = document.getElementById('weapons')
const tools = document.getElementById('tools')
const placeables = document.getElementById('placeable')
const buildings = document.getElementById('building')

// Tool Options
const t1Pick = document.getElementById('t1Pick')

const topbar = document.getElementById('topbar')

function check() {
    modifyClassStyle("dropdown-option", "dropdown-title", t1Pick)
}

function modifyClassStyle(className, idName, sel) {
    let classNameToModify = document.getElementsByClassName(className)
    let classToAvoid = document.getElementsByClassName(idName)
    if(sel.className == classNameToModify) {
        console.log('test')
        let selId = sel.id
        if(selId == idName) {
            sel.style.color = "white";
        }
    }
}

tools.addEventListener(
    'change',
    check
)