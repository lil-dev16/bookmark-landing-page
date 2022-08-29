const bar = document.querySelector('.hamburger');
const menu = document.querySelector('.right');
   bar.addEventListener('click', ()=> {
    menu.classList.toggle('show');
    
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
