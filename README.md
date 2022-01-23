## Project Description

My Browser game is a cookie clicker. It is a simple game where you click on a cookie image to gain cookies. With those cookies, you can buy upgrades to either gain passive cookie income or make your clicks give you more cookies. Your goal is to get as many cookies as possible, becoming more and more famous in the process and eventually being recognized worldwide.

## Game Logic

Program start(load webpage)

Event listener for whenever user clicks on Cookie image.
    
    Display number of cookies gained on every click. ex: +1
    
    Update cookies count

Cookie count trackers,
    
    Total cookies made:
    
    Cookies owned currently:
    - (total cookies made - cookies spent on upgrades)
    passive cookies gained per second:
    - upgrade A + upgrade B + ...

event listeners for upgrades done by the user
    
    Upgrading passive income
    - update cookies per second
    - add image corresponding to the upgrade
    
    Upgrading click power
    - update cookies per click

Announcements for achievements
    
    based on total cookies made, display announcement that your cookies are becoming more famous

    At a certain point(ex: total cookies made = 10million), Make announcement that your cookies are known worldwide and you are victorious


Store data on Local Storage

    update local storage data every few seconds.
    Add a button to wipe save state.(delete data from local storage)

### MVP Criteria

- Display correct amount of cookies.
- Have upgrades working properly.
- Allow re-naming of the cookie factory
- autosave userdata for later
- Victory condition at a certain point(ex: 10 million cookies)
- Display the upgrades you have so far with images or gifs.
- Option to wipe the current save state.


### Post-MVP Plans

- Achievements System, based on: total cookies made, cookies per second, how many cookies you own currently, how many clicks done total
- button to sell upgrades that you have purchased
- Sound effect for every click
- gif of cookies raining in the background
- Cooldown based skills(ex: cookies earned x3 for 1 minute! can only be used once every 10 minutes)
- Upgrade synergy: having a certain combination of upgrades will further increase cookies per second
- Stats page


## Project Planning

| Date | Goals |
| ---- | ----- |
| Sun. 01/23 | Create GitHub repository. Complete README.md. |

| Tue. 01/25 | Create basic HTML layout. Have the cookie counter working, with minimum 1 passive cookie income working. Have re-naming functionality |

| Thu. 01/27 | Save data in local storage, have all upgrades working, have button to wipe save state. Add victory condition |

| Sun. 01/30 | Upload necessary images. Add/remove images based on upgrades. Add CSS styling|

| Tue. 02/01 | Play test for any bugs, add any post MVP plans |

| Thu. 02/03 | Deploy to GitHub Pages. Submit completed project. Project presentations. |



