$(document).ready(function(){
    $('.carousel__list').slick({
        dots: false,
        speed: 1000,
        prevArrow: '<button class="button-left"><img src="img/icon/btn-left.png" alt=""></button>',
        nextArrow: '<button class="button-right"><img src="img/icon/btn-right.png" alt=""></button>',
    });
});

let arr = [1,2,3,4,5]
for (let i of arr){
    
    console.log(i)
}console.log(arr)

let more = document.querySelectorAll('#more');
let btnBack = document.querySelectorAll('#btnBack')
let front = document.querySelectorAll('#front');
let back = document.querySelectorAll('#back');

more.forEach(function (elem,index){
    elem.addEventListener('click', function(){
        front[index].style.display = "none";
        back[index].style.display = "inline-block";
    });
});

btnBack.forEach(function (elem,index){
    elem.addEventListener('click', function(){
        front[index].style.display = "inline-block";
        back[index].style.display = "none";
    });
});



//first button
let consultBtn = document.querySelectorAll('.consult-btn');
let buyBtn = document.querySelectorAll('.buy__btn');

//windows
let wind = document.querySelector('.window');
let windowCons = document.querySelector('.window__consultation');
let final = document.querySelector('.window__final');
let buy = document.querySelector('.window__purchase');

// button next page
let windowBtn = document.querySelector('#windowCons');

//exit button
let exit = document.querySelectorAll('.exit');
let buyEnd = document.querySelector('#windowBuy');

let mainBtn = document.querySelector('.main__consult-btn')


//creating a window to consultation or purchase
for(let elem of consultBtn){
    elem.addEventListener('click', function(){
        wind.classList.add('window-active');
        windowCons.classList.add('window__consultation-active');
    });
}

for(let elem of buyBtn){
    elem.addEventListener('click', function(){
        wind.classList.add('window-active');
        buy.classList.add('window__purchase-active');
    })
}


//go to the final window
windowBtn.addEventListener('click', function(){
    windowCons.classList.remove('window__consultation-active');
    final.classList.add('window__final-active');
})

mainBtn.addEventListener('click', function(){
    wind.classList.add('window-active');
    final.classList.add('window__final-active');
})

//get out of all the window
for(let elem of exit){
    elem.addEventListener('click', function(){
        wind.classList.remove('window-active');
        windowCons.classList.remove('window__consultation-active');
        final.classList.remove('window__final-active');
        buy.classList.remove('window__purchase-active');
    });
}

//button buy in window
buyEnd.addEventListener('click', function(){
    buy.classList.remove('window__purchase-active');
    wind.classList.remove('window-active');
})









//catalog button
document.addEventListener("DOMContentLoaded", function () {
    var btnList = document.querySelectorAll('.btn-list');

    btnList.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var targetId = btn.getAttribute('data-target');
            showList(targetId);
        });
    });
});

function showList(listId) {
    var lists = document.querySelectorAll('.list');
    
    lists.forEach(function (list) {
        if (list.id === listId) {
            list.style.display = 'inline-block';
        } else {
            list.style.display = 'none';
        }
    });
}

