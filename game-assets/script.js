var cookieClicker = {
    cookie: document.querySelector("#cc-img"),
    countContainer: document.querySelector("#cookies-container"),
    click: 1,
    count: 0,

    // **Add variable to store amount of cookies spent on upgrades.
    // **Add variable to combine cookies owned + cookies spent for total cookies baked
    // **Add variable for cookies per second. add value whenever passive is upgraded

    main() {
        //Set bakery name
        var bakery = document.querySelector("#bakery-name")
        function changeName(name) {
            bakery.textContent = name
        }

        bakery.addEventListener("click", async function(){
            let name = prompt("Please enter your bakery name", "Tom's Bakery")  
            await changeName(name)          
        })

        // cookie image event listener
        function cookieImg() {

            // click function
            cookieClicker.cookie.addEventListener("click", function(){
                cookieClicker.count = cookieClicker.count + cookieClicker.click
                cookieClicker.countContainer.textContent = cookieClicker.count + " cookies"
            })

        }
        
        // Function containing all upgrades
        function upgrades() {

            // Click power upgrade tags
            var clickUpgrade = document.querySelector("#click-upgrade")
            var clickUpgradeDesc = document.querySelector("#click-upgrade-desc")

            // Click upgrade cost
            var c1Cost = 10

            // text description for upgrade cost
            clickUpgradeDesc.textContent = "Upgrade Cost: " + c1Cost

            // Click upgrade event listener
            clickUpgrade.addEventListener("click", function(){

                // Check if user has enough cookies for upgrade
                if (cookieClicker.count < c1Cost) {
                    alert("Not enough cookies!")
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
            var p1Upgrade = document.querySelector("#p1-upgrade")
            var p1UpgradeDesc = document.querySelector("#p1-upgrade-desc")

            // 1st passive income upgrade cost
            var p1Cost = 20

            // passive cookie count function
            function p1Clicker() {
                setInterval(function() {
                    cookieClicker.count = cookieClicker.count + 1
                    cookieClicker.countContainer.textContent = cookieClicker.count + " cookies"
                }, 1000);
            }
            // text description for upgrade cost
            p1UpgradeDesc.textContent = "Upgrade Cost: " + p1Cost

            // p1 upgrade event listener
            p1Upgrade.addEventListener("click", function(){

                // check if user has enough cookies for upgrade
                if (cookieClicker.count < p1Cost) {
                    alert("Not enough cookies!")
                } else {
                    // remove cookies for upgrade, update count, update p1 cost, update text
                    cookieClicker.count = cookieClicker.count - p1Cost
                    cookieClicker.countContainer.textContent = cookieClicker.count + " cookies"
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

cookieClicker.main()