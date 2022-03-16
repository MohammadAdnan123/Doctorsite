let readbut = document.getElementById('rdless');
        readbut.addEventListener('click', function func1(){
            let para = document.getElementById('goalpara');
            if (para.style.display!= 'none') {
                para.style.display = 'none';
                readbut.innerHTML = 'Read more';
            }
            else{
                para.style.display = 'block';
                readbut.innerHTML = 'Read less';
            }
        });

        let navbar = document.querySelector('.navbar');
        let navlist = document.querySelector('.nav-list');
        let hamburger = document.querySelector('#hamburger');
        let search = document.querySelector('.search');
        let logo = document.querySelector('.logo');
        hamburger.addEventListener('click', ()=>{
            console.log('clicked');
            navbar.classList.toggle('h-media');
            navlist.classList.toggle('v-media');
            search.classList.toggle('v-media');
            logo.classList.toggle('v-media');
        });