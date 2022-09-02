
const bar = document.querySelector('.hamburger');
const bar2 = document.getElementById('ham');
const menu = document.querySelector('.right');
   bar.addEventListener('click', ()=> {
      const tar = bar.parentElement;
    tar.classList.toggle('show');
    if(tar.classList.contains('show')){
      console.log('hello');
      bar.innerHTML= '<path fill="#FFF" fill-rule="evenodd" d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"/>'

    }else{
      console.log('hi');
      bar.innerHTML = '<path fill="#242A45" fill-rule="evenodd" d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"/>'
    }
   });
   const items = [
      {
         id: 1,
         img: './images/illustration-features-tab-1.svg',
         title: 'Bookmark in one click',
         text: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
      },
      {
         id: 2,
         img: './images/illustration-features-tab-2.svg',
         title: 'Intelligent Search',
         text: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
      },
      {
         id: 3,
         img: './images/illustration-features-tab-3.svg',
         title: 'Share your bookmarks',
         text: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
      }
   ]
   const head = document.querySelectorAll('.tabsp');
   const title = document.querySelector('.title');
   const text = document.querySelector('.text');
   const img = document.querySelector('.backgroun');

   head.forEach(tab=> {
      tab.addEventListener('click', (e)=>{
         let ite = e.target.dataset.id;
         console.log(ite);
         const output = items.map(item => {
            if(item.id == ite){
               title.textContent = item.title;
               text.textContent = item.text;
               img.src = item.img;
            }
            return ``
         })
      })
   })

   
   const answers = document.querySelectorAll('.answer');
   const quest = document.querySelectorAll('.cont')

   quest.forEach(question=>{
      const arrow = question.querySelector('.arrows');

   arrow.addEventListener('click', ()=>{
      quest.forEach(item=> {
        
         if(item !== question){
            item.classList.remove('show-text');
            console.log('hi');
         }
      });
      question.classList.toggle('show-text');
   })
   })

   

   function validate(){

      const form = document.getElementById('form');
   const mail = document.getElementById('mail').value;
   const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if(mail.match(pattern)){
         form.classList.add('valid');
         form.classList.remove('invalid');
      }else{
         form.classList.remove('valid');
         form.classList.add('invalid');
         console.log('hfhh');
     }if(mail ==""){
         form.classList.remove('valid');
         form.classList.add('invalid');
     }
   }