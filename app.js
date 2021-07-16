const smoothScroll = (target, duration) => {
    const target_el = document.querySelector(target)
    const target_el_position = target_el.getBoundingClientRect().top
    const start_position = window.pageYOffset

    const distance = target_el_position - start_position

    let start_time = null
    const animation = (currentTime) => {
        if (start_time === null) start_time = currentTime
        console.log(start_time)
        let timeElapsed = currentTime - start_time
        let run = ease(timeElapsed, start_position, distance, duration )
        window.scrollTo(0, run)
        if (timeElapsed < duration) requestAnimationFrame(animation)
    }
    

    requestAnimationFrame(animation)
}


const ease = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return c / 2 * t * t + b
    t--
    return -c / 2 * (t * (t - 2) - 1) + b
}

const section1 = document.querySelector('.section1')
section1.addEventListener('click', (e) => {
    smoothScroll('.section2', 1000)
})

const section2 = document.querySelector('.section2')
section2.addEventListener('click', (e) => {
    smoothScroll('.section1', 1000)
})