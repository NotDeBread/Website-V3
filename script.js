var debread = document.getElementById('db') ?? new Object()
var debreadmad = false
var count = 0
var db_ach = 0
var db_timesclicked = parseInt(localStorage.getItem('count')?? ('0'))
var ach_countdown = 0
var ach_count = 0
var links = [false, false, false, false, false]
var ach_total = JSON.parse(localStorage.getItem('ach_total')) ?? [false, false, false, false, false]
var start = 0

setInterval(dbcountdown, 1000)
setInterval(db_achcountdown, 1000)
console.log("Your maturnal figure is morbidly obese.")
console.log("%cJavaScript has been loaded!", "color: white; display: block; font-size: 2em; font-weight: 900; text-shadow: 0px 0px 2px #9150BA; padding: 0 0.25em; border-radius: 10px;")

debread.onclick = function animate() {
    if (document.getElementById('db').src == "images/debread/dbmad.png" && debreadmad == false) {
        document.getElementById('db').src = "images/debread/dbmad.png"
    } else {
        document.getElementById('db').src = "images/debread/dbmad.png"

        db_timesclicked += 1
        localStorage.setItem('count', db_timesclicked)
        debreadmad = true
        count = 3

        //Achievement #1 "Great, now he's pissed."

        if (db_timesclicked == 1 && !ach_total[0]) {
            countadd(0)
            document.getElementsByClassName("ach-db")[0].style.left = "0px";
            document.getElementsByClassName("ach-db")[0].style.opacity = "100%";
            console.log('Achievent Get!', ach_count, '/', ach_total.length);
            console.log('↳ "Great, now hes pissed"');
            ach_countdown = 7;
        }
        
        //Achievement #2 "Alright, you should stop now."
        
        if (db_timesclicked == 100 && !ach_total[1]) {
            countadd(1)
            document.getElementsByClassName("ach-db2")[0].style.left = "0px";
            document.getElementsByClassName("ach-db2")[0].style.opacity = "100%";
            console.log('Achievent Get!', ach_count, '/', ach_total.length);
            console.log('↳ "Alright, you should stop now."');
            ach_countdown = 7;
        }
        document.getElementById("clickcounter").innerHTML = db_timesclicked;
    }
}

//Countdown

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
    if (ach_countdown > 0) {
        ach_countdown -= 1;
    } else return

    if (ach_countdown == 2) {
        document.getElementsByClassName("ach-db")[0].style.left = "-250px";
        document.getElementsByClassName("ach-db2")[0].style.left = "-250px";
        document.getElementsByClassName("ach-social")[0].style.left = "-250px";
        document.getElementsByClassName("ach-spin")[0].style.left = "-1250px";
        document.getElementsByClassName("ach-nft")[0].style.left = "-250px";
    }
    
    if (ach_countdown == 0) {
        document.getElementsByClassName("ach-db")[0].style.opacity = "0";
        document.getElementsByClassName("ach-db2")[0].style.opacity = "0"
        document.getElementsByClassName("ach-social")[0].style.opacity = "0"
        document.getElementsByClassName("ach-spin")[0].style.opacity = "0";
        document.getElementsByClassName("ach-nft")[0].style.opacity = "0";
        
    }
}


function linkclicked(index) {
    links[index] = true
    
    if (!links.some(value => !value) && !ach_total[2]) {
        countadd(2)
        document.getElementsByClassName("ach-social")[0].style.left = "0px";
        document.getElementsByClassName("ach-social")[0].style.opacity = "100%";
        console.log('Achievent Get!', ach_count, '/', ach_total.length);
        console.log('↳ "Stalker"');
        ach_countdown = 7;
    }
}

function countadd(index) {
    if (ach_count <= ach_total.length && !ach_total[index]) {
        ach_total[index] = true
        ach_count += 1
        localStorage.setItem('ach_total', JSON.stringify (ach_total))
    }
}

function timerstart() {
    if (!start) {
        start = setTimeout(() => {
            if (!ach_total[3]) {
                countadd(3)
                document.getElementsByClassName("ach-spin")[0].style.left = "0px";
                document.getElementsByClassName("ach-spin")[0].style.opacity = "100%";
                console.log('Achievent Get!', ach_count, '/', ach_total.length);
                console.log('↳ "You spin me right round, baby, right round Like a record, baby, right round, round, round You spin me right round, baby, right round Like a record, baby, right round, round, round');
                ach_countdown = 7;
            }
        }, 1000)
    }
}

function timerstop() {
    clearTimeout(start)
}

function rightclick(event) {
    if (event.button === 2 && !ach_total[4]) {
        countadd(4)
        document.getElementsByClassName("ach-nft")[0].style.left = "0px";
        document.getElementsByClassName("ach-nft")[0].style.opacity = "100%";
        console.log('Achievent Get!', ach_count, '/', ach_total.length);
        console.log('↳ "NFT Stealer."');
        ach_countdown = 7;
    }
}

if(document.getElementById('ach_collected')) {
    document.getElementById('ach_collected').innerText = JSON.parse(localStorage.getItem('ach_total')).filter((value)=>value === true).length
}

if(document.getElementById('clickcounter')) {
    document.getElementById('clickcounter').innerText = db_timesclicked
}

function ach_clear() {
    localStorage.removeItem('ach_total')
    localStorage.removeItem('count')
}

if(document.getElementById('ach-all')) {
    if(ach_total[0]) {
        document.getElementById('ach1-title').innerHTML = "Great Now He's Pissed."
        document.getElementById('ach1-title').style.setProperty('color', 'white')
        document.getElementById('ach1-desc').innerHTML = "-Click DeBread 1 time."
    }
    if(ach_total[1]) {
        document.getElementById('ach2-title').innerHTML = "Alright, you can stop now."
        document.getElementById('ach2-title').style.setProperty('color', 'white')
        document.getElementById('ach2-desc').innerHTML = "-Click DeBread 100 times."
    }
    if(ach_total[2]) {
        document.getElementById('ach3-title').innerHTML = "Stalker."
        document.getElementById('ach3-title').style.setProperty('color', 'white')
        document.getElementById('ach3-desc').innerHTML = "-Click all of my social links."
    }
    if(ach_total[3]) {
        document.getElementById('ach4-title').innerHTML = "You spin me right round, baby, right round Like a record, baby, right round, round, round You spin me right round, baby, right round Like a record, baby, right round, round, round."
        document.getElementById('ach4-title').style.setProperty('color', 'white')
        document.getElementById('ach4-desc').innerHTML = "-Hover over the Nav Image for 5 seconds."
    }
    if(ach_total[4]) {
        document.getElementById('ach5-title').innerHTML = "NFT Stealer."
        document.getElementById('ach5-title').style.setProperty('color', 'white')
        document.getElementById('ach5-desc').innerHTML = "-Right click an art piece in the Gallery."
    }
}