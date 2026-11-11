/*
 * PantryPal
 * Reusable UI components
 *
 * Components will be added here as P0 grows.
 */

function createElement(tag, className = "", content = "") {

    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (content) {
        element.textContent = content;
    }

    return element;
}