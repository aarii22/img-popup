const container = document.querySelectorAll('.container img')
const box = document.querySelector('.box')

container.forEach(img =>{
    img.addEventListener('click', function(e){
        box.classList.add('active-box')
        box.innerHTML = `<img src =${this.src}>`;
    })
})
box.addEventListener('click', function(){
    box.classList.remove('active-box')
})