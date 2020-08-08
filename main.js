

const form = document.getElementById('forms')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const password = document.getElementById('password')
const email = document.getElementById('email')
const username = document.getElementById('username')
const postcode = document.getElementById('postcode')
const cardName1 = document.getElementById('cardName1')
const cardName2 = document.getElementById('cardName2')
const expire = document.getElementById('expire')
const cv = document.getElementById('cv')











form.addEventListener('submit',function(e){
//   e.preventDefault()
    inputCheck()
})

function inputCheck(){
    let firstNameValue = firstName.value.trim()
    let lastNameValue = lastName.value.trim()
    let passwordValue = password.value.trim()
    let emailValue = email.value.trim()
    let usernameValue = username.value.trim()
    let cvValue = cv.value.trim()
    let postcodeValue = postcode.value.trim()
    let cardName1Value = cardName1.value.trim()
    let cardName2Value = cardName2.value.trim()
    let expireValue = expire.value.trim()


    if(firstNameValue === ''){
       setError(firstName,'its required!')
    }else{
        setSuccess(firstName)
    }
    if(lastNameValue === ''){
       setError(lastName,'its required!')
    }else{
        setSuccess(lastName)
    }
    if(passwordValue === ''){
       setError(password,'its required!')
    }else{
        setSuccess(password)
    }
    if(cvValue === ''){
       setError(cv,'its required!')
    }else{
        setSuccess(cv)
    }
    if(usernameValue === ''){
       setError(username,'its required!')
    }else{
        setSuccess(username)
    }
    if(emailValue===''){
        setError(email,'its required!')
    }else if(!isEmail(emailValue)){
        setError(email,'its required!')
    }else{
        setSuccess(email)
    }
    if(postcodeValue === ''){
        setError(postcode,'its required!')
     }else{
         setSuccess(postcode)
     }
  
    if(cardName1Value === ''){
        setError(cardName1,'its required!')
     }else{
         setSuccess(cardName1)
     }
    if(cardName2Value === ''){
        setError(cardName2,'its required!')
     }else{
         setSuccess(cardName2)
     }
    if(expireValue === ''){
        setError(expire,'its required!')
     }else{
         setSuccess(expire)
     }
  
}

function setError(input,message){
   const formControl = input.parentElement;
   const small = formControl.querySelector('small')

   small.innerHTML = message
   formControl.className = 'form-group error'
} 
function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-group success'
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


forms.addEventListener('submit',function(e){
    e.preventDefault()
    let formData = [];
    [...this.elements].forEach(el=>{
     
        if(el.type !== 'submit'){
            formData[el.name] = el.value
      }
    })
    this.reset()
    console.log(formData)
});


 