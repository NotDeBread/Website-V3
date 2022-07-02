var debread = document.getElementById('db');
var debreadmad = false;
var count = 3
setInterval(dbcountdown, 1000)

debread.onclick = function animate() {
    if (document.getElementById('db').src == "images/dbmad.png" && debreadmad == false) {
        document.getElementById('db').src = "images/dbmad.png";
    } else {
        document.getElementById('db').src = "images/dbmad.png";
        debreadmad = true;
        count = 3
    }
}

function dbcountdown() {
    count -= 1;

    if (count == 0 && debreadmad == true) {
        document.getElementById('db').src = "images/db.png";
        debreadmad = true
    }
}