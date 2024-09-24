console.log('test connected');
const homePage = document.getElementById('home');
homePage.addEventListener('click',function(){
    console.log('home btn clicked');
    window.location.href = './index.html';
})