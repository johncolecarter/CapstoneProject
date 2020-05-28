import { isOperator } from './model';

export function yard(infix: string[]): string[] {
    const ops = { '+': 1, '-': 1, '*': 2, '/': 2 };
    const peek = arr => arr[arr.length - 1];
    const stack = [];

    return infix.reduce((output, token) => {
        if (!isOperator(token)) {
            output.push(token);
        } else {
            if (token in ops) {
                while (peek(stack) && ops[token] <= ops[peek(stack)]) {
                    output.push(stack.pop());
                }

                stack.push(token);
            }

            if (token === '(') {
                stack.push(token);
            }

            if (token === ')') {
                while (stack.length > 0 && peek(stack) !== '(') {
                    output.push(stack.pop());
                }

                stack.pop();
            }
        }

        return output;
    }, []).concat(stack.reverse());
}
