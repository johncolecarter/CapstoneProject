import { isOperator } from './model';
import Big from 'big.js';

export function rpn(tokens: string[]): Big {
    const stack: Big[] = [];

    tokens.forEach(token => {
        if (!isOperator(token)) {
            stack.push(Big(token));
        } else if (stack.length < 2) {
            throw new Error('Syntax error.');
        } else {
            const val2 = stack.pop();
            const val1 = stack.pop();

            switch (token) {
                case '+':
                    stack.push(val1.add(val2));
                    break;
                case '*':
                    stack.push(val1.mul(val2));
                    break;
                case '/':
                    if (val2.eq(0)) {
                        throw new Error('Division by zero.');
                    }

                    stack.push(val1.div(val2));
                    break;
                case '-':
                    stack.push(val1.minus(val2));
                    break;
            }
        }
    });

    return stack.pop().round(10);
}
