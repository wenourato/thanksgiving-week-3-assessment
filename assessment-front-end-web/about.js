console.log("hello world");

const catPic  = document.querySelector('img')
 const showAlert = () => {
	alert('Took you long enough...')
 }


 catPic.addEventListener('mouseover', showAlert)

function handleSubmit(evt) {
	evt.preventDefault();
	


	alert("Your form has been submitted successfully!");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
