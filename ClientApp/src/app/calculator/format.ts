import { isOperator } from './model';

export function format(input: string): string {
    if (isOperator(input)) {
        return input;
    } else {
        return input.replace('.', ',');
    }
}
