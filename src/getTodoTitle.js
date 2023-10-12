export function isEmptyText(id) {
    const inputElement = document.getElementById(id);
    return (inputElement.value === "");
};

export function getText(id) {
    const inputElement = document.getElementById(id);
    return inputElement.value;
};

export function clearText(id) {
    const inputElement = document.getElementById(id);
    inputElement.value = '';
};