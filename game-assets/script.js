// Modals object
var modals = {
    // grab tags from html
    bakeryModal: document.getElementById("bakery-modal"),
    upgradeModal: document.getElementById("upgrade-modal"),
    bakeryBtn: document.getElementById("bakery-btn"),
    closeBtn: document.getElementsByClassName("close")[0],
    
    // main modal function
    modalMain() {
        // open modal on button click
        modals.bakeryBtn.onclick = function() {
            modals.bakeryModal.style.display = "block";
        }
        // close modal on button click
        modals.closeBtn.onclick = function() {
            modals.bakeryModal.style.display = "none";
            modals.upgradeModal.style.display = "none";
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
    }
}

// Cookie clicker object
var cookieClicker = {
    cookie: document.getElementById("cc-img"),
    countContainer: document.getElementById("cookies-container"),
    totalContainer: document.getElementById("total-container"),
    cpsContainer: document.getElementById("cps-container"),
    click: 1,
    count: 0,
    total: 0,
    cps: 0,
    progress: [true, true, true],
    // **Add variable to store amount of cookies spent on upgrades.
    // **Add variable to combine cookies owned + cookies spent for total cookies baked
    // **Add variable for cookies per second. add value whenever passive is upgraded

    main() {
        var bakery = document.getElementById("bakery-name")

        // function to change bakery name
        function changeName(name) {
            bakery.textContent = name
        }
        var newName = document.getElementById("new-name")
        var submitName = document.getElementById("submit-name")
        submitName.addEventListener("click", async function() {
            await changeName(newName.value)
            modals.bakeryModal.style.display = "none";
        })

        // cookie image event listener
        function cookieImg() {

            // click function
            cookieClicker.cookie.addEventListener("click", function(){
                // add count to cookies owned
                cookieClicker.count = cookieClicker.count + cookieClicker.click
                // add count to cookies total
                cookieClicker.total = cookieClicker.total + cookieClicker.click
                // update text
                cookieClicker.countContainer.textContent = cookieClicker.count + " cookies"
                cookieClicker.totalContainer.textContent = cookieClicker.total + " cookies baked total"
            })

        }
        
        // Function containing all upgrades
        function upgrades() {

            // Click power upgrade tags
            var clickUpgrade = document.getElementById("click-upgrade")
            var clickUpgradeDesc = document.getElementById("click-upgrade-desc")

            // Click upgrade cost
            var c1Cost = 10

            // text description for upgrade cost
            clickUpgradeDesc.textContent = "-" + c1Cost

            // Click upgrade event listener
            clickUpgrade.addEventListener("click", function(){

                // Check if user has enough cookies for upgrade
                if (cookieClicker.count < c1Cost) {
                    modals.upgradeModal.style.display = "block";
                } else {
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

                // check if user has enough cookies for upgrade
                if (cookieClicker.count < p1Cost) {
                    modals.upgradeModal.style.display = "block";
                } else {
                    // remove cookies for upgrade, update text
                    cookieClicker.count = cookieClicker.count - p1Cost
                    cookieClicker.countContainer.textContent = cookieClicker.count + " cookies"
                    // update cps, update cps text
                    cookieClicker.cps = cookieClicker.cps + 1
                    cookieClicker.cpsContainer.textContent = cookieClicker.cps + " per second"
                    // increase upgrade cost, update text
                    p1Cost = p1Cost + 20
                    p1UpgradeDesc.textContent = "-" + p1Cost
                    // call interval function
                    p1Clicker()
                }
            })

            // ***Chocolatier upgrade***
            // get tags
            var p2Upgrade = document.getElementById("p2-upgrade")
            var p2UpgradeDesc = document.getElementById("p2-upgrade-desc")

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
                    // remove cookies for upgrade, update text
                    cookieClicker.count = cookieClicker.count - p2Cost
                    cookieClicker.countContainer.textContent = cookieClicker.count + " cookies"
                    // update cps, update cps text
                    cookieClicker.cps = cookieClicker.cps + 8
                    cookieClicker.cpsContainer.textContent = cookieClicker.cps + " per second"
                    // increase upgrade cost, update text
                    p2Cost = parseInt(p2Cost * 1.15)
                    p2UpgradeDesc.textContent = "-" + p2Cost
                    // call interval function
                    p2Clicker()
                }
            })

            // ***Super Oven Upgrade***
            // get tags
            var p3Upgrade = document.getElementById("p3-upgrade")
            var p3UpgradeDesc = document.getElementById("p3-upgrade-desc")

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
                    // remove cookies for upgrade, update text
                    cookieClicker.count = cookieClicker.count - p3Cost
                    cookieClicker.countContainer.textContent = cookieClicker.count + " cookies"
                    // update cps, update cps text
                    cookieClicker.cps = cookieClicker.cps + 50
                    cookieClicker.cpsContainer.textContent = cookieClicker.cps + " per second"
                    // increase update cost, update text
                    p3Cost = parseInt(p3Cost * 1.15)
                    p3UpgradeDesc.textContent = "-" + p3Cost
                    // call interval function
                    p3Clicker()
                }
            })
        }
        

        // call functions
        cookieImg()
        upgrades()
    }
}

function statTracker() {
    setInterval(function() {
        if (cookieClicker.total >= 10 && cookieClicker.progress[0] == true) {
        alert("Your neighbors and their kids love your cookies!")
        cookieClicker.progress[0] = false
        } 
        if(cookieClicker.total >= 100 && cookieClicker.progress[1] == true) {
            alert("Your cookies are becoming famous within the neighborhood.")
            cookieClicker.progress[1] = false
        }
    }, 1000)
}
statTracker()
cookieClicker.main()
modals.modalMain()
