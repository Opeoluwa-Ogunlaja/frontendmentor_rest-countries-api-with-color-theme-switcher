export const join = (array, delimeter) => {
    if (array.length === 1) {
        return array[0];
    }
    const str = array.join(delimeter);
    const dlen = delimeter.length;
    return str.substr(str.length - dlen, dlen);
}

export const splitNumber = (number) => {
    let num = number.toString();
    let numArray = [];
    const len = num.length;
    const params = {
        remainder: len % 3,
        div: len / 3
    }

    if (params.remainder === 0) {
        for (let i = 0; i < params.div; i++) {
            const str = num.substring(i * 3, (i * 3) + 3);
            numArray.push(str);
        }
    }
    else{
        let newNum = num;
        const prefix = num.substring(0, params.remainder);
        numArray.push(prefix);
        newNum = newNum.replace(prefix, '');
        for (let i = 0; i < params.div; i++) {
            const str = newNum.substring(i * 3, (i * 3) + 3);
            numArray.push(str);
        }
        numArray.pop();
    }
    
    num = numArray.join(',');
    return num;
}