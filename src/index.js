module.exports = function check(str, bracketsConfig) {

    let stack = [];
    let openBrackets = [];
    let openBracketsOne = [];

    let pair = {};
    
    for (let bracket of bracketsConfig) {
        if (bracket[0] == bracket[1]) {
            openBracketsOne.push(bracket[0])
        } else {
            openBrackets.push(bracket[0])
        }
        pair[bracket[1]] = bracket[0];
    }


    for (let i = 0; i < str.length; i++) {
        let currentSymbol = str[i];

        if (openBrackets.includes(currentSymbol)) {
            stack.push(currentSymbol);

        } else if (openBracketsOne.includes(currentSymbol)) {
            if (!stack.includes(currentSymbol)) {
                stack.push(currentSymbol);
            }
            else {
                if (stack.length == 0) {
                    return false;
                }

                let topElement = stack[stack.length - 1];

                if (pair[currentSymbol] == topElement) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        } else {
            if (stack.length == 0) {
                return false;
            }

            let topElement = stack[stack.length - 1];

            if (pair[currentSymbol] == topElement) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length == 0;
}


//function searhStack(stack, pair, currentSymbol) {
//    if (stack.length == 0) {
//        return false;
//    }

//    let topElement = stack[stack.length - 1];

//    if (pair[currentSymbol] == topElement) {
//        stack.pop();
//    } else {
//        return false;
//    }
//}





