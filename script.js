let section = document.querySelector('section')
let Textt = document.querySelector('.Text')
let innerText = document.querySelector('.innerText')

// $(window).on('scroll', ()=>{
//     let value = window.scrollY
//     section.css('clipPath', 'circle('+value+'px at center center)')
//     Textt.css('left', 100 - value / 5 + '%')
//     innerText.css('left', 100 - value / 5 + '%')
// })

window.addEventListener('scroll', ()=>{
    let value = window.scrollY
    section.style.clipPath = 'circle('+value+'px at center center)'
    Textt.style.left = 100 - value / 5 + '%'
    innerText.style.left = 100 - value / 5 + '%'
})