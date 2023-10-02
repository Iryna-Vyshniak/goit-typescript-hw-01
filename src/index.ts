import { concatenation } from './concatenation';

const button = document.querySelector('button')!;
const input = document.querySelector('input')!;

if (button && input) {
    button.addEventListener('click', () => {
        concatenation(input.value, 'hello!');
    });
}

const total: number = 100;
const text: string = 'Greeting, TypeScript!';
const isActive: boolean = false;


function add(num: number, num2: number): number {
    return num + num2;
}

add(1, 1);

