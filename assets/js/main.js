let PunktestandNeu = 0;
let i = 0;


let TimeId1 = setInterval(() => {
    let XAchse = Math.floor(Math.random() * 87);
    console.log(XAchse)

    document.getElementById("flyingBird").style.display = "block";
    document.getElementById("flyingBird").style.position = "absolute";
    document.getElementById("flyingBird").style.top = XAchse + "vh";
    i++;

    let horizontal = 0;
    let TimeID2 = setInterval(() => {
        document.getElementById("flyingBird").style.left = horizontal + "%";
        horizontal++;
        if (horizontal == 97) {
            document.getElementById("flyingBird").style.display = "none";
            clearInterval(TimeID2)
        }
    }, 100)

    if (i == 1000) {
        document.getElementById("flyingBird").style.display = "none";
        clearInterval(TimeId1)
    }
}, 2000)




document.getElementById("flyingBird").addEventListener("click", () => {
    PunktestandNeu = PunktestandNeu + 100;
    document.getElementById("Ausgabe").innerHTML = PunktestandNeu;
}
)