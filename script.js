var debread = document.getElementById('db');
var debreadmad = false;
var count = 3
setInterval(dbcountdown, 1000)
console.log("JS has been loaded!")

debread.onclick = function animate() {
    if (document.getElementById('db').src == "images/debread/dbmad.png" && debreadmad == false) {
        document.getElementById('db').src = "images/debread/dbmad.png";
    } else {
        document.getElementById('db').src = "images/debread/dbmad.png";
        debreadmad = true;
        count = 3
        console.log("DeBread Has Been Clicked")
    }
}

function dbcountdown() {
    count -= 1;

    if (count == 0 && debreadmad == true) {
        document.getElementById('db').src = "images/debread/db.png";
        debreadmad = true

    }
}