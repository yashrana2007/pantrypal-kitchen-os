function initializeNavigation() {

    const navItems =
        document.querySelectorAll(".nav-item");

    navItems.forEach(item => {

        item.addEventListener("click", () => {

            navItems.forEach(nav =>
                nav.classList.remove("active")
            );

            item.classList.add("active");

            const destination =
                item.dataset.destination;

            console.log(
                `Navigation requested: ${destination}`
            );
        });

    });
}