import { concatenation } from './concatenation';
const button = document.querySelector('button');
const input = document.querySelector('input');
if (button && input) {
    button.addEventListener('click', () => {
        concatenation(input.value, 'hello!');
    });
}
const total = 100;
const text = 'Greeting, TypeScript!';
const isActive = false;
function add(num, num2) {
    return num + num2;
}
add(1, 1);
//# sourceMappingURL=index.js.map