var debread = document.getElementById('db');
var debreadmad = false;
var count = 0
var db_ach = 0
var db_timesclicked = 0
var db_ach_countdown = 0

setInterval(dbcountdown, 1000)
setInterval(db_achcountdown, 1000)
console.log("Your maturnal figure is morbidly obese.")

//Changes the .png to another .png and logs it.

debread.onclick = function animate() {
    if (document.getElementById('db').src == "images/debread/dbmad.png" && debreadmad == false) {
        document.getElementById('db').src = "images/debread/dbmad.png";
    } else {
        document.getElementById('db').src = "images/debread/dbmad.png";

        db_timesclicked += 1;
        debreadmad = true;
        count = 3;
        db_ach += 1;

        if (db_ach == 1) {
            document.getElementsByClassName("ach")[0].style.left = "10px";
            console.log('Achievent Get!');
            db_ach_countdown = 5;
        }
        document.getElementById("clickcounter").innerHTML = db_timesclicked;
        console.log('DeBread Has Been Clicked (', db_timesclicked, ') Times.');
    }
}

//Waits 3 seconds then changes it back.

function dbcountdown() {
    if (count > 0) {
        count -= 1;
    } else return

    if (count == 0 && debreadmad == true) {
        document.getElementById('db').src = "images/debread/db.png";
        debreadmad = true
    }
}

function db_achcountdown() {
    if (db_ach_countdown > 0) {
        db_ach_countdown -= 1;
    } else return

    if (db_ach_countdown == 0) {
        document.getElementsByClassName("ach")[0].style.left = "-200px";
    }
}