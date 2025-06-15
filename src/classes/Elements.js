"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentElement = DocumentElement;
function DocumentElement(_a) {
    var elementType = _a.elementType, id = _a.id, className = _a.className, _b = _a.classList, classList = _b === void 0 ? [] : _b, _c = _a.children, children = _c === void 0 ? [] : _c, innerText = _a.innerText, style = _a.style, attribute = _a.attribute, listener = _a.listener;
    var element = document.createElement(elementType);
    if (id) {
        element.id = id;
    }
    if (className) {
        element.className = className;
    }
    if (innerText) {
        element.innerText = innerText;
    }
    Object.assign(element.style, style);
    for (var _i = 0, classList_1 = classList; _i < classList_1.length; _i++) {
        var className_1 = classList_1[_i];
        element.classList.add(className_1);
    }
    for (var _d = 0, children_1 = children; _d < children_1.length; _d++) {
        var child = children_1[_d];
        element.appendChild(child);
    }
    if (attribute) {
        element.setAttribute(attribute.name, attribute.value);
    }
    if (listener) {
        element.addEventListener(listener.event, listener.callBack);
    }
    return element;
}
