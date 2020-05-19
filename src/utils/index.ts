/** 
 * Sum of 2 numbers
*/
export const sum = (n1:number, n2:number):number => {
    return n1 + n2;
}

/** 
 * Multiply 2 numbers
*/
export const multiply = (n1: number, n2: number):number => {
    return n1*n2;
}

/** 
 * Sum of array
*/
export const sumArr = (arr: number[]): number => { //accept a number arr
    return arr.reduce((acc, item) => {
        return acc += item;
    }, 0);
}