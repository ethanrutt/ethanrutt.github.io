// wait for DOM to load elements before running
document.addEventListener("DOMContentLoaded", (e) => {
    const allDetails = document.getElementsByTagName("details")

    for (let i = 0; i < allDetails.length; i++) {
        // handles horizontal lines on open of details
        allDetails[i].addEventListener("toggle", (event) => {
            if (event.target.open) {
                event.target.getElementsByTagName("hr")[0].className = "visible";
            }
            else {
                event.target.getElementsByTagName("hr")[0].className = "invisible";
            }
        })

        // handles orientation and shadow of dropdown on open of details
        allDetails[i].addEventListener("toggle", (event) => {
            if (event.target.open) {
                event.target.getElementsByTagName("img")[0].className = "dropdown-arrow-up";
            }
            else {
                event.target.getElementsByTagName("img")[0].className = "dropdown-arrow-down";
            }
        })
    }
})
