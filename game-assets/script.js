var cookieClicker = {
    cookie: document.querySelector("#cc-img"),
    countContainer: document.querySelector("#cookies-container"),
    click: 1,
    count: 0,
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
        function cookieClick() {
            cookieClicker.cookie.addEventListener("click", function(){
                cookieClicker.count = cookieClicker.count + cookieClicker.click
                cookieClicker.countContainer.textContent = cookieClicker.count + " cookies"
            })
        }
        
        // upgrade event listener
        function upgrades() {
            // Click power upgrade
            var clickUpgrade = document.querySelector("#click-upgrade")

            clickUpgrade.addEventListener("click", function(){
                if (cookieClicker.count < 10) {
                    alert("Not enough cookies!")
                } else {
                    cookieClicker.count = cookieClicker.count - 10
                    cookieClicker.click = 2
                    cookieClicker.countContainer.textContent = cookieClicker.count + " cookies"
                    clickUpgrade.remove()
                }
            })

            // passive cookies upgrade
            var passiveUpgrade = document.querySelector("#passive-upgrade")
            var passiveUpgradeDesc = document.querySelector("#passive-upgrade-desc")
            var p1Cost = 20
            // passive cookie count function
            function passiveClicker() {
                setInterval(function() {
                    cookieClicker.count = cookieClicker.count + 1
                    cookieClicker.countContainer.textContent = cookieClicker.count + " cookies"
                }, 1000);
            }

            passiveUpgradeDesc.textContent = "Upgrade Cost: " + p1Cost

            passiveUpgrade.addEventListener("click", function(){
                if (cookieClicker.count < p1Cost) {
                    alert("Not enough cookies!")
                } else {
                    cookieClicker.count = cookieClicker.count - p1Cost
                    cookieClicker.countContainer.textContent = cookieClicker.count + " cookies"
                    p1Cost = p1Cost + 20
                    passiveUpgradeDesc.textContent = "Upgrade Cost: " + p1Cost
                    passiveClicker()
                }
            })
        }
        cookieClick()
        upgrades()
    }
}

cookieClicker.main()