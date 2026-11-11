const pantryPalState = {

    user: {
        name: "Yash"
    },

    inventory: [
        {
            id: 1,
            name: "Paneer",
            quantity: "250g",
            status: "available"
        },
        {
            id: 2,
            name: "Tomatoes",
            quantity: "4",
            status: "available"
        },
        {
            id: 3,
            name: "Milk",
            quantity: "1L",
            status: "available"
        },
        {
            id: 4,
            name: "Rice",
            quantity: "2kg",
            status: "available"
        },
        {
            id: 5,
            name: "Coriander",
            quantity: "1 bunch",
            status: "expiring"
        }
    ],

    mealPlan: [
        {
            id: 1,
            name: "Paneer Tikka Masala",
            pantryMatch: 82
        }
    ],

    shopping: {
        items: [
            {
                id: 1,
                name: "Cream",
                quantity: "1 pack"
            },
            {
                id: 2,
                name: "Kasuri Methi",
                quantity: "1 pack"
            }
        ],

        cart: []
    },

    analytics: {
        kitchenReady: 86
    },

    preferences: {
        theme: "light"
    },

    kitchenReady: 86
};


/* =========================
   STATE ACCESS
   ========================= */

function getState() {
    return pantryPalState;
}


/* =========================
   STATE UPDATE
   ========================= */

function updateState(updates) {

    Object.assign(pantryPalState, updates);

    saveState();

    window.dispatchEvent(
        new CustomEvent("pantryPalStateChanged")
    );
}