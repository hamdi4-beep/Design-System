function uploadImg() {
    const input = document.createElement('input')
    input.type = 'file'
    input.click()

    input.onchange = function(e) {
        const target = e.target
        
        if (target.files[0]) {
            const file = target.files[0]
            const url = URL.createObjectURL(file)

            addImg(url)
        }
    }

    input.remove()
}

function addImg(src) {
    const container = document.querySelector('.img-container')
    const div = document.createElement('div')
    const img = new Image

    div.classList.add('img-wrapper')
    img.src = src

    div.append(img)
    container.append(div)
}