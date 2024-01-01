let tabs = document.querySelectorAll('.filtering__tabs .btn');
let imgs = document.querySelectorAll('.images__grid img');
let cols = document.querySelector('.images__grid .row .col');
for(let i = 0; i<tabs.length; i++){
    tabs[i].addEventListener('click', function(){
        for(let j = 0; j<tabs.length; j++){
            tabs[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k<imgs.length; k++){
            imgs[k].classList.remove('active');
            imgs[k].classList.add('hide');
        
        if(imgs[k].getAttribute('data-genre') == dataFilter || dataFilter == "all"){
            imgs[k].classList.remove('hide');
            imgs[k].classList.add('active');
        }
    }
    });
}