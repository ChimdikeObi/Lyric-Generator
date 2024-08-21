//variables

let btn = document.querySelector('#new-lyric');
let lyric = document.querySelector('.lyric');
let person = document.querySelector('.person')

const quotes = [{
   lyric: '"To keep it G with myself, think I am in need of some help."',
   person: ` Dave`
}, {
   lyric: '"I do not know what I am crying for."',
   person: ` Billie Eilish`
}, {
   lyric: '"Lovely to sit between comfort and chaos."',
   person: ` Lizzie Alphine`
}, {
   lyric: '"We had a soft life beneath I believe it. We just gave up reading the signs."',
   person: ` Holly Humberstone`
}, ];

btn.addEventListener('click', function(){

   let random = Math.floor(Math.random() * quotes.length);

   lyric.innerText = quotes[random].lyric;
   person.innerText = quotes[random].person;
})
   







