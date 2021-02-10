export const bar = {
    clickFile: function(e) {
        const fileLists = e.currentTarget.nextElementSibling
        console.log(fileLists.getAttribute('data-open'))
        if (fileLists.getAttribute('data-open') === "false") {
            const listLength = fileLists.getAttribute('data-length')
            console.log(listLength)
            if (listLength === 0) {
                fileLists.style.height = 30 + "px"
            } else if (listLength > 0) {
                fileLists.style.height = (30 * listLength) + "px"
            }
            fileLists.setAttribute('data-open', true)
            console.log(listLength)
        } else {
            fileLists.style.height = 0
            fileLists.setAttribute('data-open', false)
        }
    },
    clickList: function(e) {

    }
}