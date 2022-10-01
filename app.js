const navObserve = new IntersectionObserver((entries=>{
    const entry = entries[0]
    const navbar = document.querySelector('.main-nav')

    if (entry.isIntersecting) {
        navbar.classList.remove('main-nav--inverse')
    } else{
        navbar.classList.add('main-nav--inverse')
    }
    
}), {
    rootMargin:'-150px 0px'
})

const navbar = document.querySelector('.main-content__fullsite')
navObserve.observe(navbar)

const articleObserve = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        // if (entry.target.classList.contains('primary__article--reverse')) {
        //     if (entry.isIntersecting) {
        //         entry.target.classList.add('primary__article--fadeIn')
        //     }
        // }

        if (entry.isIntersecting) {
            entry.target.classList.add('primary__article--fadeIn')
        }
    })
}, {
    rootMargin:'-200px'
})

const articles = document.querySelectorAll('.primary__article');
const articlesR = document.querySelectorAll('.primary__article-reverse');


articles.forEach(el=>{
    articleObserve.observe(el)
})
articlesR.forEach(el=>{
    articleObserve.observe(el)
})
