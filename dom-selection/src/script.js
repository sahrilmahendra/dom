// // DOM selection
// // document.getElementById() => mengembalikan element
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = 'grey';
// judul.innerHTML = 'Sahril Mahendra';


// // document.getElementsByTagName() => mengembalikan HTMLCollection
// const p = document.getElementsByTagName('p');
// for(let i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = 'lightblue';    
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// // document.getElementsByClassName() => mengembalikan HTMLCollection
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'ini diubah dari javascript';


// document.querySelector() => menghasilkan elemen
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '20px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// const p = document.querySelector('p');
// p.innerHTML = 'ini diubah melalui js';


// document.querySelectorAll()
const p = document.querySelectorAll('p');
for(let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
}