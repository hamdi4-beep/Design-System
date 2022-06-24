const body = document.body
const input = document.querySelector('#upload')
const uploadBtn = document.querySelector('.fa-upload')
const select = document.querySelector('ul')
const section = document.querySelectorAll('.section')
const container = section[0].parentElement
const cta = document.querySelector('.cta')
const colors = document.querySelector('.colors')
const line = container.querySelector('.line')
const video = document.querySelector('video')
const videoContainer = document.querySelector('.video-container')

let n = 0

videoContainer.addEventListener('click', e => {
    const target = e.target

    if (target.classList[0] == 'fas') {
        const details = target.parentElement
        const video = details.previousElementSibling
        const duration = details.querySelector('span')
        const minutes = Math.floor(video.duration / 60)
        const seconds = Math.floor(video.duration % 60)

        duration.textContent = `${minutes < 9 ? '0' + minutes : minutes}:${seconds < 9 ? '0' + seconds : seconds}`
        
        if (video.paused) {
            video.play()
            target.className = 'fas fa-pause'
        } else {
            video.pause()
            target.className = 'fas fa-play'
        }
    }
})

colors.addEventListener('click', e => {
    const color = e.target
    const styles = getComputedStyle(color)
    const bgColor = styles.getPropertyValue('background-image')
    const scheme = bgColor.match(/rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)/g)
    
    for (let i=0; i<section.length; i++) {
        section[i].style.backgroundImage = bgColor
        container.style.borderColor = scheme[0]
        cta.style.backgroundColor = scheme[1]
        line.style.backgroundColor = scheme[1]
    }
})

uploadBtn.addEventListener('click', e => {
    uploadImg()
})

window.addEventListener('scroll', e => {
    const coords = line.getBoundingClientRect()
    const y = window.pageYOffset

    line.style.top = `${y}px`

    if (y > (container.offsetTop + container.clientHeight)) {
        line.style.top = 0
    }
})

body.addEventListener('click', e => {
    const target = e.target

    if (target.tagName == 'IMG') {
        body.style.backgroundImage = `url(${target.src})`

        if (!body.classList.contains('wallpaper')) {
            body.classList.add('wallpaper')
        }
    }

    if (target.id == 'checkbox') {
        if (target.classList.contains('checked')) {
            body.classList.add('blur')
        } else {
            body.classList.remove('blur')
        }
    }

    if (target.className == 'fas fa-gear') {
        const colors = document.querySelector('.colors')
        
        if (colors.style.display != 'flex') {
            colors.style.display = 'flex'
        } else {
            colors.style.display = 'none'
        }
    }

    if (target.className == 'fas fa-pen') {
        const header = target.parentElement
        const block = header.previousElementSibling
        block.classList.add('display')
    }

    if (target.id == 'close') {
        const block = target.parentElement.parentNode
        block.classList.remove('display')
    }
})

input.addEventListener('change', e => {
    body.style.backgroundImage = `url(${input.value})`
    body.classList.add('wallpaper')
    input.value = ''
})

select.addEventListener('click', e => {
    const list = select.querySelectorAll('li')
    const li = e.target

    select.classList.toggle('display')

    list.forEach(item => {
        if (item.style.display == 'none') item.style.display = 'block'
    })

    if (!select.classList.contains('display')) {
        for (const item of list) {
            if (item != li) {
                item.style.display = 'none'
            } else {
                li.style.display = 'block'
            }
        }
    }
})