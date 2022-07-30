var debread = document.getElementById('db');
var debreadmad = false;
var count = 0

setInterval(dbcountdown, 1000)
console.log("Your maturnal figure is morbidly obese.")

//Changes the .png to another .png and logs it.

debread.onclick = function animate() {
    if (document.getElementById('db').src == "images/debread/dbmad.png" && debreadmad == false) {
        document.getElementById('db').src = "images/debread/dbmad.png";
    } else {
        document.getElementById('db').src = "images/debread/dbmad.png";
        debreadmad = true;
        count = 3
        console.log('DeBread Has Been Clicked')
    }
}

//Waits 3 seconds then changes it back.

function dbcountdown() {
    if (count > 0) {
        count -= 1;
        console.log('DeBread', count)
    } else return

    if (count == 0 && debreadmad == true) {
        document.getElementById('db').src = "images/debread/db.png";
        debreadmad = true

    }
}