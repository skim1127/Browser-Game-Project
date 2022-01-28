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

        // get modal
        var bakeryModal = document.getElementById("bakery-modal")
        // get button to open modal
        var bakeryBtn = document.getElementById("bakery-btn")
        // get close button
        var closeBtn = document.getElementsByClassName("close")[0];
        // open modal on click
        bakeryBtn.onclick = function() {
            bakeryModal.style.display = "block";
        }
        // close display when close button is pressed
        closeBtn.onclick = function() {
            bakeryModal.style.display = "none";
        }
        // close display when user clicks outside
        window.onclick = function(event) {
            if (event.target == bakeryModal) {
                bakeryModal.style.display = "none";
            }
        }
        // function to change bakery name
        function changeName(name) {
            bakery.textContent = name
        }
        var newName = document.getElementById("new-name")
        var submitName = document.getElementById("submit-name")
        submitName.addEventListener("click", async function() {
            await changeName(newName.value)
            bakeryModal.style.display = "none";
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
            // get modal
            var upgradeModal = document.getElementById("upgrade-modal")
            // get close btn
            closeBtn = document.getElementsByClassName("close")[0];
            // close display when close btn is pressed
            closeBtn.onclick = function() {
                upgradeModal.style.display = "none";
            }
            // close display when user clicks outside
            window.onclick = function(event) {
                if (event.target == upgradeModal) {
                    upgradeModal.style.display = "none";
                }
            }


            // Click power upgrade tags
            var clickUpgrade = document.getElementById("click-upgrade")
            var clickUpgradeDesc = document.getElementById("click-upgrade-desc")

            // Click upgrade cost
            var c1Cost = 10

            // text description for upgrade cost
            clickUpgradeDesc.textContent = "Upgrade Cost: " + c1Cost

            // Click upgrade event listener
            clickUpgrade.addEventListener("click", function(){

                // Check if user has enough cookies for upgrade
                if (cookieClicker.count < c1Cost) {
                    upgradeModal.style.display = "block";
                } else {
                    // Update cookie count, update upgrade cost, update click power, update text 
                    cookieClicker.count = cookieClicker.count - c1Cost
                    cookieClicker.countContainer.textContent = cookieClicker.count + " cookies"
                    c1Cost = c1Cost * 3
                    clickUpgradeDesc.textContent = "Upgrade Cost: " + c1Cost 
                    cookieClicker.click = cookieClicker.click * 2
                }
            })

            // passive income upgrade tags
            var p1Upgrade = document.getElementById("p1-upgrade")
            var p1UpgradeDesc = document.getElementById("p1-upgrade-desc")

            // 1st passive income upgrade cost
            var p1Cost = 20

            // passive cookie count function
            function p1Clicker() {
                setInterval(function() {
                    cookieClicker.count = cookieClicker.count + 1
                    cookieClicker.total = cookieClicker.total + 1
                    cookieClicker.countContainer.textContent = cookieClicker.count + " cookies"
                    cookieClicker.totalContainer.textContent = cookieClicker.total + " cookies baked total"
                }, 1000);
            }
            // text description for upgrade cost
            p1UpgradeDesc.textContent = "Upgrade Cost: " + p1Cost

            // p1 upgrade event listener
            p1Upgrade.addEventListener("click", function(){

                // check if user has enough cookies for upgrade
                if (cookieClicker.count < p1Cost) {
                    upgradeModal.style.display = "block";
                } else {
                    // remove cookies for upgrade, update count, update p1 cost, update text
                    cookieClicker.count = cookieClicker.count - p1Cost
                    cookieClicker.countContainer.textContent = cookieClicker.count + " cookies"
                    cookieClicker.cps = cookieClicker.cps + 1
                    cookieClicker.cpsContainer.textContent = cookieClicker.cps + " per second"
                    p1Cost = p1Cost + 20
                    p1UpgradeDesc.textContent = "Upgrade Cost: " + p1Cost
                    p1Clicker()
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

