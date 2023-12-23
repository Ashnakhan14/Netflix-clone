let faqHeader = document.querySelectorAll('.faq-single__header')
let allFaqs = document.querySelectorAll('.faq-single')

faqHeader.forEach(headerToggle => {
    headerToggle.addEventListener("click", (e) => {
        let faqParent = e.target.parentNode
        let isOpen = faqParent.classList.contains('open')

        allFaqs.forEach(faq => {
            faq.classList.remove('open')
        });

        faqParent.classList.toggle("open", !isOpen)
    })
});
