const email=document.getElementById("emai");
// const email=document.querySelector(".jamlaga");
const error=document.getElementById("error");

let email2=document.getElementById("emais");
const erro2=document.getElementById("error2");

eve();
function eve()
{
	email.addEventListener("blur",kk);
	email2.addEventListener("blur",bb);

	
}
function kk()
{
	let pattern=/^[^ ]+@[^ ]+\.[a-z]{2,10}$/;
	let a=email.value;
	if(a.match(pattern))
	{
		// alert("failed");
		error.innerText="";
	}
	else
	{
		error.innerText="Please enter a valid email address.";
		// alert("succse");

	}
	if(a=="")
	{
		error.innerText="Email is required.";

	}
}
function bb()
{

	let patterne=/^[^ ]+@[^ ]+\.[a-z]{2,10}$/;
	let b=email2.value;
	if(b.match(patterne))
	{
		// alert("failed");
		error2.innerText="";
		// erro2.style.color="green";
	}
	else
	{
		error2.innerText="Please enter a valid email address.";
		// alert("succse");

	}
	if(b=="")
	{
		error2.innerText="Email is required.";

	}
}