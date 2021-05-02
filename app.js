// set initial count value
let count = 0;

// select value and btn
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        }
        else if (styles.contains('increase')) {
            count++;
        }
        else{
            count = 0;
        }
        // change text color
        if (count === 0) {
            value.style.color = 'black';
        }
        else if (count < 0){
            value.style.color = 'red';
        }
        else {
            value.style.color = 'green';
        }
        // assign count to #value span
        value.textContent = count;
        
    });
});