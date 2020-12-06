const email=document.getElementById("emai");
const error=document.getElementById("error");
eve();
function eve()
{
    email.addEventListener("blur",kk);
}
function kk()
{
	let pattern=/^[^ ]+@[^ ]+\.[a-z]{2,10}$/;
	let a=email.value;
	if(a.match(pattern))
	{
		// alert("failed");
		error.innerText="Valid Email";
	}
	else
	{
		error.innerText="Please enter a valid email";
		// alert("succse");

	}
	if(a=="")
	{
		error.innerText="Please enter a email";

	}
}