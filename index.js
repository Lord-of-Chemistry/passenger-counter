let restart = document.getElementById('reset')
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById('count')

let count = 0;
console.log(count);

function increment() {
    count += 1
    countEl.textContent = count
    console.log(count)
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}

function reset() {
    count = 0
    countEl.textContent = count
    saveEl.textContent = "Previous Entries: "
    console.log('Count Reset')
}