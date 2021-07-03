export function largeImage(id) {

    let image = document.querySelector(`#${id}`);
    let orginal = document.querySelector("#orginal");

    orginal.src = image.src;

}