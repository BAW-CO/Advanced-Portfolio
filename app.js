//emailJS Info:
// template_3k4th98
// service_izhddy8
// nW_C-v4ccLjeQBdyK


//Color Mode//
let contrastToggle = false;
function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
      document.body.classList += " dark-theme"
    }
    else {
      document.body.classList.remove("dark-theme")
    }
  }

  //shapes//
  const scaleFactor = 1 / 20;

  function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
  
    for (let i = 0; i < shapes.length; ++i) {
      const isOdd = i % 2 !== 0;
      const boolInt = isOdd ? -1 : 1;
      shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * .5}deg)`
    }
  }





//Mail Form//

function contact (event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm (
            "service_izhddy8", 
            "template_3k4th98",
            event.target,
            "nW_C-v4ccLjeQBdyK"
     )
     .then(() => {
         console.log('this worked1')
         loading.classList.remove("modal__overlay--visible");
         success.classList += " modal__overlay--visible";
     })
    .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "This email service is temporarily unavailable. Please email me directly via Bridgetw.designs@gmail.com."
        );
    });
}

//Modal Animation//

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
      isModalOpen = false;
      return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
  }