let list = document.querySelectorAll('li');
let link = document.querySelectorAll('#link')

links.forEach(function(link) {
    link.addEventListener('click', function() {
        let listItem = link.closest('li');
        listItem.classList.toggle('active');
    });
});