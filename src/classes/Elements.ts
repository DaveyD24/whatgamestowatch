interface DocumentElementProps {
    elementType: string;
    id?: string;
    className?: string;
    classList?: string[];
    children?: HTMLElement[];
    innerText?: string;
    style?: Partial<CSSStyleDeclaration>;
    attribute?: {
        name: string;
        value: string;
    };
    listener?: {
        event: string;
        callBack: (event: Event) => void;
    };
}
export function DocumentElement({
                             elementType,
                             id,
                             className,
                             classList = [],
                             children = [],
                             innerText,
                             style,
                             attribute,
                             listener
                         }: DocumentElementProps)
{
    const element = document.createElement(elementType);

    if (id) { element.id = id; }
    if (className) { element.className = className; }
    if (innerText) { element.innerText = innerText; }

    Object.assign(element.style, style);
    for (const className of classList) {
        element.classList.add(className);
    }
    for (const child of children) {
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