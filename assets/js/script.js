// Scroll Reveal Animation
const scrollReveal = ScrollReveal({
    distance: '60px',
    duration: 1500,
    delay: 100,
    // reset: true
})



scrollReveal.reveal(`.home__text`, {origin: 'top'})
scrollReveal.reveal(`.home__image`, {origin: 'bottom', delay: 600})
scrollReveal.reveal(`.home__socials, .social__link`, {origin: 'right', interval: 100, delay: 700})

scrollReveal.reveal(`.text__box`, {origin: 'bottom'})

scrollReveal.reveal(`.top`, {origin: 'top'})

scrollReveal.reveal(`.profile__image`, {origin: 'top'})

scrollReveal.reveal(`.tech__info, .box`, {origin: 'left', interval: 100})
scrollReveal.reveal(`.tech__info, .box__img`, {origin: 'right', interval: 100})
scrollReveal.reveal(`.tech__info, .box__text`, {origin: 'bottom', interval: 100})

scrollReveal.reveal(`.recent__card, .r__card`, {origin: 'bottom', interval: 100})

scrollReveal.reveal(`.portfolio__content`, {origin: 'bottom', interval: 200})

scrollReveal.reveal(`.sec`, {origin: 'bottom', interval: 200})

scrollReveal.reveal(`.copy`, {origin: 'bottom'})









