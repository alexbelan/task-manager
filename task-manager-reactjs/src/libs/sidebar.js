export const sidebar = {
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
    // openList: function(e) {
    //     const list = e.currentTarget
    //     const dispatch = useDispatch()
    //     console.log(list)
    //     if (list !== undefined) {
    //         const listId = list.getAttribute('data-id')
    //         console.log(listId);
    //         dispatch(getTodoesList(listId))
    //     }
    //     // const file = useSelector(state => state.todo.fileData)
    //     // console.log(e)
    //     // console.log(file)
    // }
}