const textInput = document.getElementById("textInput");
const showBtn = document.getElementById("showBtn");
const colorBtn = document.getElementById("colorBtn");
const displayArea = document.getElementById("displayArea");
const tableBody = document.getElementById("tableBody");

const colors = [
"lightblue",
"lightgreen",
"lightcoral"
];

let colorIndex = 0;
let addCount = 0;

// 表示ボタン
showBtn.addEventListener("click", () => {

const text = textInput.value;

if (text === "") {
alert("入力値が空です");
return;
}

displayArea.textContent = text;

displayArea.classList.toggle("highlight");

addRow(text);
});

// 背景色変更
colorBtn.addEventListener("click", () => {

document.body.style.backgroundColor =
colors[colorIndex];

colorIndex++;

if (colorIndex >= colors.length) {
colorIndex = 0;
}
});

// テーブル追加
function addRow(text) {

const tr = document.createElement("tr");

const tdText = document.createElement("td");
tdText.textContent = text;

const tdBtn = document.createElement("td");

const deleteBtn =
document.createElement("button");

deleteBtn.textContent = "削除";

deleteBtn.addEventListener("click", () => {

tr.remove();

addCount--;

});
tdBtn.appendChild(deleteBtn);

tr.appendChild(tdText);
tr.appendChild(tdBtn);

tableBody.appendChild(tr);
if (tableBody.rows.length >3) {
    tableBody.deleteRow(0);
}
addCount++;

}

window.addEventListener("load", () => {
    for(let i =1; i <=5; i++){
        console.log(i);
    }
});