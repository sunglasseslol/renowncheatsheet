const backBtn = document.getElementById('backBtn')

function backToIndex() {
    location.href = "index.html"
}

backBtn.addEventListener(
    'click',
    backToIndex
)