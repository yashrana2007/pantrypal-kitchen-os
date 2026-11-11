document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadState();

        initializeNavigation();

        renderDashboard();

    }
);


/* =========================
   DASHBOARD
   ========================= */

function renderDashboard() {

    const state = getState();

    /* User */

    const greetingName =
        document.getElementById("greeting-name");

    if (greetingName) {
        greetingName.textContent =
            state.user.name;
    }


    /* Kitchen Ready */

    const kitchenReady =
        document.getElementById("kitchen-ready-value");

    if (kitchenReady) {

        kitchenReady.textContent =
            `${state.kitchenReady}%`;
    }


    /* Meal */

    const mealName =
        document.getElementById("meal-name");

    if (
        mealName &&
        state.mealPlan.length > 0
    ) {

        mealName.textContent =
            state.mealPlan[0].name;
    }


    /* Meal match */

    const mealMatch =
        document.getElementById("meal-match");

    if (
        mealMatch &&
        state.mealPlan.length > 0
    ) {

        mealMatch.textContent =
            `${state.mealPlan[0].pantryMatch}% pantry match`;
    }

}