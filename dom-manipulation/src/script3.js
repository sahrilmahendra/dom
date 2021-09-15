// DOM Manipulation
// 1. document.createElement()
// 2. document.createTektNode()
// 3. node.appendChild()
// buat elemen baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);
// simpan pBaru di akhir section a
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// 4. node.insertBefore()
const listBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('item Baru');
listBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(listBaru, li2);

// 5. parent.removeChild()
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// 6. parent.replaceChild
const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('judul baru')
h2Baru.appendChild(teksH2Baru);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightblue';
h2Baru.style.backgroundColor = 'lightblue';
listBaru.style.backgroundColor = 'lightblue';