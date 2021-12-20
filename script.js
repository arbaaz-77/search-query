const input = document.getElementById("searchInput")

input.addEventListener("keyup", function (e) {
    let searchQuery = e.target.value.toLowerCase();
    let allNames = document.getElementsByClassName("name")

    for (let i = 0; i < allNames.length; i++) {
        const currentName = allNames[i].textContent.toLowerCase();

        if (currentName.includes(searchQuery)) {
            allNames[i].style.display = "block";
        } else {
            allNames[i].style.display = "none";
        }
    }
})



