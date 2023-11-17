function menuOpen(val){
    const nav = document.querySelector('.navbar')
    if(val){
        nav.classList.add('navbar_active')
    }
    else {
        nav.classList.remove('navbar_active')
    }
}

window.onscroll = () => {
    const bottom = document.querySelector('.bottom')
    const back_to_top = document.querySelector('.back_to_top')
    if(window.scrollY >= 40){
        bottom.classList.add('bottom_active')
        back_to_top.style.display = 'flex'
    }
    else {
        bottom.classList.remove('bottom_active')
        back_to_top.style.display = 'none'
    }
}

let swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    loop : true,
    autoplay : true,
});

function sortFunc(e, val){
    document.querySelector('.active_type').classList.remove('active_type')
    e.target.classList.add('active_type')
    let a = document.querySelectorAll('.portfolio_content')
    const b = document.querySelectorAll(`.portfolio_content[data-type="${val}"]`);
    
    if(b.length > 0){
        b.forEach(item => item.style.display = 'block');
        [...a].forEach(item => {
            if(item.getAttribute('data-type') != val){
                item.style.display = 'none'
            }
        })
    }
    else {
        [...a].forEach(item => {
            item.style.display = 'block'
        })
    }
}

function questionFunc(e){
   document.querySelector('.FAQ_container .active').classList.remove('active');
   e.currentTarget.classList.add('active')
}