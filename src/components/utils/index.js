export const Utils = {}
Utils.findByAttributeValue = (attr, val, elemType) => {
    elemType = elemType || "*";
    var elems = document.getElementsByTagName(elemType);
    for (let i = 0; i < elems.length; i++) {
        if (parseInt(elems[i].getAttribute(attr)) === val) { return elems[i]  }
    }
}
Utils.focusNext = (e) =>{
    const element = tabIndx => Utils.findByAttributeValue("tabindex", tabIndx,'input')
    let lengthOfValue = e.target.value.length,
        tab = e.target.tabIndex,
        max = parseInt(e.target.getAttribute('maxlength')),
        min = parseInt(e.target.getAttribute('minlength')),
        nextElement = element(tab + 1);
    (lengthOfValue >= min && lengthOfValue <= max) ? e.target.style.backgroundColor = 'transparent' : e.target.style.backgroundColor = '#98a5c5'
    if (lengthOfValue === max) {
        if (nextElement) {
            (nextElement.disabled !== true) ?
                element(tab + 1).focus() : element(tab + 2).focus()
        }
    }
}
Utils.importAll = (file) => {
    let images = {};
    file.keys().map((item) => images[item.replace('./', '')] = file(item));
    return images;
}
export default {Utils}