/*
  Sarah Myerson - 04/09/2022
  validate.js
*/

// Clears all errors
function resetErrors()
{
  const nodes = document.querySelectorAll(".show");
  for (let i = 0; i < nodes.length; i++)
  {
    nodes[i].classList.remove("show");
    nodes[i].classList.add("hide");
  }
}

// Returns false if email does not match the format of:
// name@domain.com
function validEmail(email)
{
   var validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,6}$/;
   return email.match(validRegex);
}

function validateForm()
{
  var hasErrors = false;

  resetErrors();

  // First name
  if (document.getElementById("first_name").value == "")
  {
    hasErrors = true;
    document.getElementById("firstName_empty").classList.remove("hide");
    document.getElementById("firstName_empty").classList.add("show");
  }

  // Last name
  if (document.getElementById("last_name").value == "")
  {
    hasErrors = true;
    document.getElementById("lastName_empty").classList.remove("hide");
    document.getElementById("lastName_empty").classList.add("show");
  }

  // Address
  if (document.getElementById("address").value == "")
  {
    hasErrors = true;
    document.getElementById("address_empty").classList.remove("hide");
    document.getElementById("address_empty").classList.add("show");
  }

  // City
  if (document.getElementById("city").value == "")
  {
    hasErrors = true;
    document.getElementById("city_empty").classList.remove("hide");
    document.getElementById("city_empty").classList.add("show");
  }

  // State
  if (document.getElementById("state").value == "")
  {
    hasErrors = true;
    document.getElementById("state_empty").classList.remove("hide");
    document.getElementById("state_empty").classList.add("show");
  }

  // Zip
  if (document.getElementById("zip").value == "" || isNaN(document.getElementById("zip").value))
  {
    hasErrors = true;
    document.getElementById("zip_empty").classList.remove("hide");
    document.getElementById("zip_empty").classList.add("show");
  }

  else if (document.getElementById("zip").value.length != 5)
  {
    hasErrors = true;
    document.getElementById("zip_invalid").classList.remove("hide");
    document.getElementById("zip_invalid").classList.add("show");
  }

  // Email
  if (document.getElementById("email").value == "")
  {
    hasErrors = true;
    document.getElementById("email_empty").classList.remove("hide");
    document.getElementById("email_empty").classList.add("show");
  }

  else if(!validEmail(document.getElementById("email").value))
  {
    hasErrors = true;
    document.getElementById("email_invalid").classList.remove("hide");
    document.getElementById("email_invalid").classList.add("show");
  }

  // Phone
  if (document.getElementById("phone").value == "" || isNaN(document.getElementById("phone").value))
  {
    hasErrors = true;
    document.getElementById("phone_empty").classList.remove("hide");
    document.getElementById("phone_empty").classList.add("show");
  }

  else if (document.getElementById("phone").value.length != 10)
  {
    hasErrors = true;
    document.getElementById("phone_invalid").classList.remove("hide");
    document.getElementById("phone_invalid").classList.add("show");
  }

  // Phone Type
  if (!(document.getElementById("personal").checked) && !(document.getElementById("business").checked))
  {
    hasErrors = true;
    document.getElementById("phone_type_empty").classList.remove("hide");
    document.getElementById("phone_type_empty").classList.add("show");
  }

  if(hasErrors)
    alert("Please correct the issues below before joining!");

  else
  {
    alert("Thank you for joining our rewards program!");
    document.getElementById('join_rewards').reset();
  }
  return !(hasErrors);

}
