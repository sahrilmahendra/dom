// element.innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Sahril Mahendra</em>';

// element.style.<propertiCSS>
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

// element.setAttribute() => menambah atribut pada elemen
const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('name', 'sahril');
const a = document.querySelector('section#a a');
a.setAttribute('class', 'link');
// element.getAttribute() => mengetahui isi atribut pada elemen
a.getAttribute('href');
// element.removeAtteibut() => menghilangkan atribut pada elemen
a.removeAttribute('href');
