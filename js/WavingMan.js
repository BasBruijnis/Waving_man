/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var img = document.querySelector('.img1');
var gif = document.querySelector('.img2');
var button = document.querySelector('button');

function wave() {
    img.classList.remove('show');
    gif.classList.add('show')
    setTimeout(() => {
        gif.classList.remove('show');
        img.classList.add('show');
    }, 1900)
}

button.addEventListener('click', wave);
