
function addCart() {
    alert('Item Added to Cart Successfully.');
}

let buttons = document.querySelectorAll('.addToCartBtn');

buttons.forEach(button => {
    button.onclick = () => {
        addCart();
        console.log('Onclick executed');
    };
});

let darkModeBtn = document.querySelector('.darkMode');
darkModeBtn.onclick = () => {
    // Body
    document.body.classList.toggle('dark-mode')

    //NavBar
    let nav = document.querySelector('.navbar')
    nav.classList.toggle('dark-mode')
    nav.classList.toggle('navbar1')
    nav.classList.toggle('listIndarkMode')

    //    First Order
    let topFirstOrderdb = document.querySelector('.topFirstOrder')
    console.log(topFirstOrderdb)
    topFirstOrderdb.classList.toggle('topFirstOrderDarkMode')
    topFirstOrderdb.classList.toggle('bg-light')

    let firstorder = document.querySelector('.mainFirstOrder')
    firstorder.classList.toggle('firstOrder')
    firstorder.classList.toggle('topfirstOrderimg')

    // TopBrand
    let topBranddb = document.querySelector('.topBrand')
    console.log(topBranddb)
    topBranddb.classList.toggle('topBrandDarkMode')
    topBranddb.classList.toggle('bg-light')

    let topBrand2 = document.querySelector('.mainBrand')
    topBrand2.classList.toggle('brand')
    topBrand2.classList.toggle('topBrandimg')



    // let navbar=document.querySelector('.navbar-nav')
    // navbar.classList.toggle('listIndarkMode')
    // document.body.classList.toggle('dark-mode')
    console.log('Click ON Dark Mode Btn')


    //New Add 29-2-24
    let catlog=document.querySelector('.catlog')
    catlog.classList.toggle('cont')


    let catlog1=document.querySelectorAll('.catlog1')
    catlog1.forEach(catlog1 => {
    catlog1.classList.toggle('cont1')
        
    });


    let aboutUs=document.querySelector('.aboutus')
    aboutUs.classList.toggle('aboutusDark')
    aboutUs.classList.toggle('bg-light')


    let ourService=document.querySelector('.ourservice')
    ourService.classList.toggle('ourserviceDark')

    let Footer=document.querySelector('.footer')
    Footer.classList.toggle('bg-light')
    Footer.classList.toggle('footerDark')
   
   
    console.log(catlog1)
}