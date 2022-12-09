// Event Handler

stoneToolsBtn = document.getElementById('stonebtn')
ironToolsBtn = document.getElementById('ironbtn')
steelToolsBtn = document.getElementById('steelbtn')

stoneToolsBtn.addEventListener('click', showStoneCosts)
ironToolsBtn.addEventListener('click', showIronCosts)
steelToolsBtn.addEventListener('click', showSteelCosts)

function showStoneCosts() {
    const cont = document.createElement("div")
    cont.id = "stoneCosts"
    cont.className = "costs"

    document.body.appendChild(cont)
}

function showIronCosts() {

}

function showSteelCosts() {

}