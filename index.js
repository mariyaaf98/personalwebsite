
const fname=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');

//showerror function
function ShowError(input,message){
  const formControl=input.parentElement;
  formControl.className='form-control error';
  const small=formControl.querySelector('small');
  small.innerText=message;
}

form.addEventListener('submit',function(e){
  e.preventDefault();
  if(username.value==' '){
    ShowError(username,'User Name is required');
  }
  else{
    ShowSuccess(username);
  }
}
);