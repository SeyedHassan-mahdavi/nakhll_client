// function for add and remove class on tabs
export function clickOnTabs(event) {
    let elements = document.querySelectorAll(".divCustomTab__div--title");
    elements.forEach((value) => {
        value.classList.remove("divCustomTab__div--titleActive");
    });
    event.currentTarget.classList.add("divCustomTab__div--titleActive");
}