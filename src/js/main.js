const questionsItems = document.querySelectorAll('.question__item')

questionsItems.forEach(item => {
    item.addEventListener('click', () => {
        questionsItems.forEach(it => it.classList.remove('active'))
        item.classList.add('active')
    })
})

// questionsItems.forEach(item => {
//     item.addEventListener('click', () => {
//         if (item.classList.contains('active')) {
//             item.classList.remove('active')
//         }
//     })
// })

