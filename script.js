let section = $('section')
let Textt = $('.Text')
let innerText = $('.innerText')

$(window).on('scroll', ()=>{
    let value = window.scrollY
    section.css('clipPath', 'circle('+value+'px at center center)')
    Textt.css('left', 100 - value / 5 + '%')
    innerText.css('left', 100 - value / 5 + '%')
})