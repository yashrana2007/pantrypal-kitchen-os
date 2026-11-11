const STORAGE_KEY = "pantryPalState";


function saveState() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(pantryPalState)
    );
}


function loadState() {

    const savedState =
        localStorage.getItem(STORAGE_KEY);

    if (!savedState) {
        saveState();
        return;
    }

    try {

        const parsedState =
            JSON.parse(savedState);

        Object.assign(
            pantryPalState,
            parsedState
        );

    } catch (error) {

        console.error(
            "Unable to load PantryPal state:",
            error
        );

        saveState();
    }
}


function resetState() {

    localStorage.removeItem(STORAGE_KEY);

    window.location.reload();
}