function getElementWidth (content, padding, border) {
    let res1 = Number.parseFloat (content);
    let res2 = Number.parseFloat (padding);
    let res3 = Number.parseFloat (border);
    
    return  res1 + (res2*2) + (res3*2);
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
