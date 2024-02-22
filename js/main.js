const inputEl=document.querySelector('input');
const submitBtn=document.getElementById('submit');
const errorMsgEl=document.getElementsByClassName('errorMsg');
// console.dir(inputEl);

submitBtn.addEventListener('click',()=>{
    if(!isValidEmail(inputEl.value)){
        // console.log(errorMsgEl);
        [...errorMsgEl].forEach(val=>val.classList.toggle('errorMsg'))
    }
    else{
        alert('Successfully logged in');
    }
})

function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Test the email against the regex
    return emailRegex.test(email);
  }