/* eslint-disable import/no-anonymous-default-export */
const {outerHeight} = window;
const {outerWidth} = window;
export const Width = outerWidth;
export const Height = outerHeight;

export default (topPercent, leftPercent, element) => {
    let elementWidth = element.offsetWidth;
    let elementHeight = element.offsetHeight;

    let {outerHeight} = window;
    let {outerWidth} = window;

    let width = outerWidth - elementWidth;
    let height = outerHeight - elementHeight;
    
    width = width * leftPercent / 100;
    height = height * topPercent / 100;

    return {width, height};
}