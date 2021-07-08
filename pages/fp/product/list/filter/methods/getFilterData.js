// get filter data
export function getFilterData(filterData) {
    let data = {};
    let checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
    for (let i = 0; i < checkedBoxes.length; i++) {
        data[checkedBoxes[i].name] = checkedBoxes[i].value;
    }
    console.log(">...", data);
}