// Modals object

// **Fix modals close btn**
var modals = {
    // grab tags from html
    bakeryModal: document.getElementById("bakery-modal"),
    upgradeModal: document.getElementById("upgrade-modal"),
    progressModal: document.getElementById("progress-modal"),
    bakeryBtn: document.getElementById("bakery-btn"),
    closeBtn1: document.getElementsByClassName("close")[0],
    closeBtn2: document.getElementsByClassName("close")[1],
    closeBtn3: document.getElementsByClassName("close")[2],
    pmContent: document.getElementById("pm-content"),
    pmTitle: document.getElementById("pm-title"),
    
    // main modal function
    modalMain() {
        // open modal on button click
        modals.bakeryBtn.onclick = function() {
            modals.bakeryModal.style.display = "block";
        }
        // close modal on button click
        modals.closeBtn1.onclick = function() {
            modals.upgradeModal.style.display = "none";
        }
        // close progress modal on click
        modals.closeBtn2.onclick = function() {
            modals.progressModal.style.display = "none";
        }
        // close name change modal on click
        modals.closeBtn3.onclick = function() {
            modals.bakeryModal.style.display = "none";
        }
        // close modal on clicking outside the modal
        window.onclick = function(event) {
            if (event.target == modals.bakeryModal) {
                modals.bakeryModal.style.display = "none";
            }
            if (event.target == modals.upgradeModal) {
                modals.upgradeModal.style.display = "none";
            }
        }
    },

    // progress modal display messages
    prog1: "Your neighbors love your cookies!",
    prog1Title: '"A Good Neighbor"',
    prog2: "Your cookies are becoming famous within the neighborhood.",
    prog2Title: '"Hottest Commodity In Town"',
    prog3: "People are visiting from neighboring towns to taste your cookies.",
    prog3Title: '"A Drive Worthwhile"',
    prog4: "Your bakery now has multiple locations across the state.",
    prog4Title: '"Too Good To Stay Local"',
    prog5: "Your cookies can now be found in any supermarket or convenience store in the country!",
    prog5Title: '"Nationwide Cookie Fever"',
    prog6: "You are now a celebrity and people are asking for your signature on their cookies.",
    prog6Title: '"Cookie Celebrity"',
}

// add sound function
// sounds from https://mixkit.co/
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");//load sound when loading website
    this.sound.setAttribute("controls", "none");//no controls
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    // play function
    this.play = function() {
        this.sound.play();
    }
    // stop function
    this.stop = function() {
        this.sound.pause();
    }
}

// Cookie clicker object
var cookieClicker = {
    // get html tags
    cookie: document.getElementById("cc-img"),
    countContainer: document.getElementById("cookies-container"),
    totalContainer: document.getElementById("total-container"),
    cpsContainer: document.getElementById("cps-container"),
    click: 1,
    count: 0,
    total: 0,
    cps: 0,
    // upgrade counter
    p1Count: 0,
    p1Cps: 0,

    p2Count: 0,
    p2Cps: 0,

    p3Count: 0,
    p3Cps: 0,

    p4Count: 0,
    p4Cps: 0,

    p5Count: 0,
    p5Cps: 0,

    progress: [true, true, true, true, true, true],

    main() {
        var bakery = document.getElementById("bakery-name")
        // many click sounds
        var clickSound = new sound("./Sounds/pop.wav")
        var clickSound2 = new sound("./Sounds/pop.wav")
        var clickSound3 = new sound("./Sounds/pop.wav")
        var clickSound4 = new sound("./Sounds/pop.wav")
        var clickSound5 = new sound("./Sounds/pop.wav")
        var clickSound6 = new sound("./Sounds/pop.wav")
        var clickSound7 = new sound("./Sounds/pop.wav")
        var clickSound8 = new sound("./Sounds/pop.wav")
        var clickSound9 = new sound("./Sounds/pop.wav")
        var clickSound10 = new sound("./Sounds/pop.wav")

        // function to change bakery name
        function changeName(name) {
            bakery.textContent = name
        }
        var newName = document.getElementById("new-name")
        var submitName = document.getElementById("submit-name")
        submitName.addEventListener("click", async function() {
            upgradeSound.play()
            await changeName(newName.value)
            modals.bakeryModal.style.display = "none";
        })

        // cookie image event listener
        function cookieImg() {

            // cookie click event listener
            cookieClicker.cookie.addEventListener("click", function(){
                // brute forcing sound overlaps
                if (clickSound2.sound.currentTime == 0.291655 || clickSound2.sound.currentTime == 0) {
                    clickSound2.play()
                } else if(clickSound3.sound.currentTime == 0.291655 || clickSound3.sound.currentTime == 0) {
                    clickSound3.play()
                } else if(clickSound4.sound.currentTime == 0.291655 || clickSound4.sound.currentTime == 0) {
                    clickSound4.play()
                } else if(clickSound5.sound.currentTime == 0.291655 || clickSound5.sound.currentTime == 0) {
                    clickSound5.play()
                } else if(clickSound6.sound.currentTime == 0.291655 || clickSound6.sound.currentTime == 0) {
                    clickSound6.play()
                } else if(clickSound7.sound.currentTime == 0.291655 || clickSound7.sound.currentTime == 0) {
                    clickSound7.play()
                } else if(clickSound8.sound.currentTime == 0.291655 || clickSound8.sound.currentTime == 0) {
                    clickSound8.play()
                } else if(clickSound9.sound.currentTime == 0.291655 || clickSound9.sound.currentTime == 0) {
                    clickSound9.play()
                } else if(clickSound10.sound.currentTime == 0.291655 || clickSound10.sound.currentTime == 0) {
                    clickSound10.play()
                } else {
                    clickSound.play()
                }
                
                // add count to cookies owned
                cookieClicker.count = cookieClicker.count + cookieClicker.click
                // add count to cookies total
                cookieClicker.total = cookieClicker.total + cookieClicker.click
                // update text
                cookieClicker.countContainer.textContent = cookieClicker.count + " cookies"
                cookieClicker.totalContainer.textContent = cookieClicker.total + " cookies baked total"
            })

        }
        // declare variable for upgrade sound
        var upgradeSound = new sound("./Sounds/box-check.wav")
        // Function containing all upgrades
        function upgrades() {

            // Click power upgrade tags
            var clickUpgrade = document.getElementById("click-upgrade")
            var clickUpgradeDesc = document.getElementById("click-upgrade-desc")

            // Click upgrade cost
            var c1Cost = 100

            // text description for upgrade cost
            clickUpgradeDesc.textContent = "-" + c1Cost

            // Click upgrade event listener
            clickUpgrade.addEventListener("click", function(){

                // Check if user has enough cookies for upgrade
                if (cookieClicker.count < c1Cost) {
                    modals.upgradeModal.style.display = "block";
                } else {
                    // Play Sound 
                    upgradeSound.play()
                    // Update cookie count, update upgrade cost, update click power, update text
                    cookieClicker.count = cookieClicker.count - c1Cost
                    cookieClicker.countContainer.textContent = cookieClicker.count + " cookies"
                    c1Cost = c1Cost * 3
                    clickUpgradeDesc.textContent = "-" + c1Cost 
                    cookieClicker.click = cookieClicker.click * 2
                }
            })

            // ***p1 Upgrade***
            // get tags
            var p1Upgrade = document.getElementById("p1-upgrade")
            var p1UpgradeDesc = document.getElementById("p1-upgrade-desc")
            // upgrade counter tags
            var p1Container = document.getElementById("row1")
            var p1Text = document.getElementById("row1-text")

            // set base upgrade cost
            var p1Cost = 20
            // set text for upgrade cost
            p1UpgradeDesc.textContent = "-" + p1Cost

            // interval function
            function p1Clicker() {
                setInterval(function() {
                    cookieClicker.count = cookieClicker.count + 1
                    cookieClicker.total = cookieClicker.total + 1
                    cookieClicker.countContainer.textContent = cookieClicker.count + " cookies"
                    cookieClicker.totalContainer.textContent = cookieClicker.total + " cookies baked total"
                }, 1000);
            }

            // upgrade btn event listener
            p1Upgrade.addEventListener("click", function(){
                // if (cookieClicker.p1Count == 10) {
                //     console.log("Hello")
                // }
                // check if user has enough cookies for upgrade
                if (cookieClicker.count < p1Cost) {
                    modals.upgradeModal.style.display = "block";
                } else {
                    // Play Sound 
                    upgradeSound.play()
                    // remove cookies for upgrade, update text
                    cookieClicker.count = cookieClicker.count - p1Cost
                    cookieClicker.p1Count = cookieClicker.p1Count + 1
                    cookieClicker.countContainer.textContent = cookieClicker.count + " cookies"
                    // update cps, update cps text
                    cookieClicker.cps = cookieClicker.cps + 1
                    cookieClicker.p1Cps = cookieClicker.p1Cps + 1
                    cookieClicker.cpsContainer.textContent = cookieClicker.cps + " per second"
                    // increase upgrade cost, update text
                    p1Cost = p1Cost + 20
                    p1UpgradeDesc.textContent = "-" + p1Cost
                    // update side bar text
                    if(cookieClicker.p1Cps == 1) {
                        p1Text.textContent = "Generating " + cookieClicker.p1Cps + " cookie per second"
                    } else {
                        p1Text.textContent = "Generating " + cookieClicker.p1Cps + " cookies per second"
                    }
                    // create upgrade image elements
                    let p1img = document.createElement("img");
                    p1img.src = "./Images/cursor.png"
                    p1img.style.margin = "2px"
                    p1img.style.height = "14px"
                    // add image to upgrade container
                    p1Container.appendChild(p1img)
                    // call interval function
                    p1Clicker()
                }
            })

            // ***Chocolatier upgrade***
            // get tags
            var p2Upgrade = document.getElementById("p2-upgrade")
            var p2UpgradeDesc = document.getElementById("p2-upgrade-desc")
            // upgrade counter tags
            var p2Container = document.getElementById("row2")
            var p2Text = document.getElementById("row2-text")

            // set base upgrade cost
            var p2Cost = 100 //*change value later*
            // set text for upgrade cost
            p2UpgradeDesc.textContent = "-" + p2Cost

            // interval function
            function p2Clicker() {
                setInterval(function() {
                    cookieClicker.count = cookieClicker.count + 1
                    cookieClicker.total = cookieClicker.total + 1
                    cookieClicker.countContainer.textContent = cookieClicker.count + " cookies"
                    cookieClicker.totalContainer.textContent = cookieClicker.total + " cookies baked total"
                }, 125);
            }
            // p2 upgrade event listener
            p2Upgrade.addEventListener("click", function() {

                // check if user has enough cookies
                if (cookieClicker.count < p2Cost) {
                    modals.upgradeModal.style.display = "block";
                } else {
                    // Play Sound 
                    upgradeSound.play()
                    // remove cookies for upgrade, update text
                    cookieClicker.count = cookieClicker.count - p2Cost
                    cookieClicker.p2Count = cookieClicker.p2Count + 1
                    cookieClicker.countContainer.textContent = cookieClicker.count + " cookies"
                    // update cps, update cps text
                    cookieClicker.cps = cookieClicker.cps + 8
                    cookieClicker.p2Cps = cookieClicker.p2Cps + 8
                    cookieClicker.cpsContainer.textContent = cookieClicker.cps + " per second"
                    // increase upgrade cost, update text
                    p2Cost = parseInt(p2Cost * 1.15)
                    p2UpgradeDesc.textContent = "-" + p2Cost
                    // update sidebar text
                    p2Text.textContent = "Generating " + cookieClicker.p2Cps + " cookies per second"
                    // create upgrade image elements
                    let p2img = document.createElement("img")
                    p2img.src = "./Images/chocolate.png"
                    p2img.style.margin = "2px"
                    p2img.style.height = "14px"
                    // append image to container
                    p2Container.appendChild(p2img)
                    // call interval function
                    p2Clicker()
                }
            })

            // ***Super Oven Upgrade***
            // get tags
            var p3Upgrade = document.getElementById("p3-upgrade")
            var p3UpgradeDesc = document.getElementById("p3-upgrade-desc")
            // upgrade counter tags
            var p3Container = document.getElementById("row3")
            var p3Text = document.getElementById("row3-text")

            // set base upgrade cost
            var p3Cost = 1000 //*change value later*
            // set text for upgrade cost
            p3UpgradeDesc.textContent = "-" + p3Cost

            // interval function
            function p3Clicker() {
                setInterval(function() {
                    cookieClicker.count = cookieClicker.count + 1
                    cookieClicker.total = cookieClicker.total + 1
                    cookieClicker.countContainer.textContent = cookieClicker.count + " cookies"
                    cookieClicker.totalContainer.textContent = cookieClicker.total + " cookies baked total"
                }, 20);
            }

            // p3 upgrade event listener
            p3Upgrade.addEventListener("click", function() {

                // check if user has enough cookies
                if (cookieClicker.count < p3Cost) {
                    modals.upgradeModal.style.display = "block";
                } else {
                    // Play Sound 
                    upgradeSound.play()
                    // remove cookies for upgrade, update text
                    cookieClicker.count = cookieClicker.count - p3Cost
                    cookieClicker.p3Count = cookieClicker.p3Count + 1
                    cookieClicker.countContainer.textContent = cookieClicker.count + " cookies"
                    // update cps, update cps text
                    cookieClicker.cps = cookieClicker.cps + 50
                    cookieClicker.p3Cps = cookieClicker.p3Cps + 50
                    cookieClicker.cpsContainer.textContent = cookieClicker.cps + " per second"
                    // increase update cost, update text
                    p3Cost = parseInt(p3Cost * 1.15)
                    p3UpgradeDesc.textContent = "-" + p3Cost
                    // update p3Cps text
                    p3Text.textContent = "Generating " + cookieClicker.p3Cps + " cookies per second"
                    // create image elements
                    let p3img = document.createElement("img")
                    p3img.src = "./Images/oven-icon.png"
                    p3img.style.margin = "2px"
                    p3img.style.height = "14px"
                    // append image
                    p3Container.appendChild(p3img)
                    // call interval function
                    p3Clicker()
                }
            })

            // *** 3D Printer Upgrade***
            // get tags
            var p4Upgrade = document.getElementById("p4-upgrade")
            var p4UpgradeDesc = document.getElementById("p4-upgrade-desc")
            // get upgrade count tags
            var p4Container = document.getElementById("row4")
            var p4Text = document.getElementById("row4-text")
            
            // set base upgrade cost
            var p4Cost = 6500 //change value later
            // set text for upgrade cost
            p4UpgradeDesc.textContent = "-" + p4Cost

            // interval function
            function p4Clicker() {
                setInterval(function() {
                    cookieClicker.count = cookieClicker.count + 3
                    cookieClicker.total = cookieClicker.total + 3
                    cookieClicker.countContainer.textContent = cookieClicker.count + " cookies"
                    cookieClicker.totalContainer.textContent = cookieClicker.total + " cookies baked total"
                }, 10);
            }

            // p4 upgrade event listener
            p4Upgrade.addEventListener("click", function() {

                // check if user has enough cookies
                if (cookieClicker.count < p4Cost) {
                    modals.upgradeModal.style.display = "block";
                } else {
                    // Play Sound 
                    upgradeSound.play()
                    // remove cookies for upgrade, update text
                    cookieClicker.count = cookieClicker.count - p4Cost
                    cookieClicker.p4Count = cookieClicker.p4Count + 1
                    cookieClicker.countContainer.textContent = cookieClicker.count + " cookies"
                    // update cps, update cps text
                    cookieClicker.cps = cookieClicker.cps + 300
                    cookieClicker.p4Cps = cookieClicker.p4Cps + 300
                    cookieClicker.cpsContainer.textContent = cookieClicker.cps + " per second"
                    // increase update cost, update text
                    p4Cost = parseInt(p4Cost * 1.15)
                    p4UpgradeDesc.textContent = "-" + p4Cost
                    // update p4Cps text
                    p4Text.textContent = "Generating " + cookieClicker.p4Cps + " cookies per second"
                    // create image elements
                    let p4img = document.createElement("img")
                    p4img.src = "./Images/3d-printer.png"
                    p4img.style.margin = "2px"
                    p4img.style.height = "14px"
                    // append image
                    p4Container.appendChild(p4img)
                    // call interval function
                    p4Clicker()
                }
            })

            // ***Cookie Bot Upgrade***
            // get tags
            var p5Upgrade = document.getElementById("p5-upgrade")
            var p5UpgradeDesc = document.getElementById("p5-upgrade-desc")
            // get upgrade count tags
            var p5Container = document.getElementById("row5")
            var p5Text = document.getElementById("row5-text")
            
            // set base upgrade cost
            var p5Cost = 33000 //change value later
            // set text for upgrade cost
            p5UpgradeDesc.textContent = "-" + p5Cost
            
            // interval function
            function p5Clicker() {
                setInterval(function() {
                    cookieClicker.count = cookieClicker.count + 15
                    cookieClicker.total = cookieClicker.total + 15
                    cookieClicker.countContainer.textContent = cookieClicker.count + " cookies"
                    cookieClicker.totalContainer.textContent = cookieClicker.total + " cookies baked total"
                }, 10);
            }  

            // p5 upgrade event listener
            p5Upgrade.addEventListener("click", function() {

                // check if user has enough cookies
                if (cookieClicker.count < p5Cost) {
                    modals.upgradeModal.style.display = "block";
                } else {
                    // Play Sound 
                    upgradeSound.play()
                    // remove cookies for upgrade, update text
                    cookieClicker.count = cookieClicker.count - p5Cost
                    cookieClicker.p5Count = cookieClicker.p5Count + 1
                    cookieClicker.countContainer.textContent = cookieClicker.count + " cookies"
                    // update cps, update cps text
                    cookieClicker.cps = cookieClicker.cps + 1500
                    cookieClicker.p5Cps = cookieClicker.p5Cps + 1500
                    cookieClicker.cpsContainer.textContent = cookieClicker.cps + " per second"
                    // increase update cost, update text
                    p5Cost = parseInt(p5Cost * 1.15)
                    p5UpgradeDesc.textContent = "-" + p5Cost
                    // update p5Cps text
                    p5Text.textContent = "Generating " + cookieClicker.p5Cps + " cookies per second"
                    // create image elements
                    let p5img = document.createElement("img")
                    p5img.src = "./Images/robot.png"
                    p5img.style.margin = "2px"
                    p5img.style.height = "14px"
                    // append image
                    p5Container.appendChild(p5img)
                    // call interval function
                    p5Clicker()
                }
            })                  
        }
        

        // call functions
        cookieImg()
        upgrades()
    }
}

function statTracker() {
    var progSound = new sound("./Sounds/bling.wav")
    var winSound = new sound("./Sounds/long-bling.wav")
    setInterval(function() {

        // Progress 1
        if (cookieClicker.total >= 100 && cookieClicker.progress[0] == true) {
            progSound.play()
            // change text content, display achievement message
            modals.pmContent.textContent = modals.prog1;
            modals.pmTitle.textContent = modals.prog1Title;
            modals.progressModal.style.display = "block";
            cookieClicker.progress[0] = false;
            setTimeout(() => {
                modals.progressModal.style.display = "none"
            }, 8000);
        } 
        // Progress 2
        if (cookieClicker.total >= 1000 && cookieClicker.progress[1] == true) {
            progSound.play()
            modals.pmContent.textContent = modals.prog2;
            modals.pmTitle.textContent = modals.prog2Title;
            modals.progressModal.style.display = "block";
            cookieClicker.progress[1] = false;
            setTimeout(() => {
                modals.progressModal.style.display = "none"
            }, 8000);
        }
        // Progress 3
        if (cookieClicker.total >= 10000 && cookieClicker.progress[2] == true){
            progSound.play()
            modals.pmContent.textContent = modals.prog3;
            modals.pmTitle.textContent = modals.prog3Title;
            modals.progressModal.style.display = "block";
            cookieClicker.progress[2] = false;
            setTimeout(() => {
                modals.progressModal.style.display = "none"
            }, 8000);
        }
        // Progress 4
        if (cookieClicker.total >= 100000 && cookieClicker.progress[3] == true){
            progSound.play()
            modals.pmContent.textContent = modals.prog4;
            modals.pmTitle.textContent = modals.prog4Title;
            modals.progressModal.style.display = "block";
            cookieClicker.progress[3] = false;
            setTimeout(() => {
                modals.progressModal.style.display = "none"
            }, 8000);
        }
        // Progress 5
        if (cookieClicker.total >= 1000000 && cookieClicker.progress[4] == true){
            progSound.play()
            modals.pmContent.textContent = modals.prog5;
            modals.pmTitle.textContent = modals.prog5Title;
            modals.progressModal.style.display = "block";
            cookieClicker.progress[4] = false;
            setTimeout(() => {
                modals.progressModal.style.display = "none"
            }, 8000);
        }
        // Progress 6
        if (cookieClicker.total >= 10000000 && cookieClicker.progress[5] == true){
            winSound.play()
            modals.pmContent.textContent = modals.prog6;
            modals.pmTitle.textContent = modals.prog6Title;
            modals.progressModal.style.display = "block";
            cookieClicker.progress[5] = false;
            setTimeout(() => {
                modals.progressModal.style.display = "none"
            }, 8000);
        }
    }, 1000)
}

cookieClicker.main()
modals.modalMain()
statTracker()