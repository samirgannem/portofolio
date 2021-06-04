const DOMElements = {
    skillsForm: document.querySelector('.text-tittle-footer'),
  };

window.addEventListener('click', (e) => {
  const eventTarget = e.target;

  if (eventTarget.matches('.btn-projects')) {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  }
  
  if (eventTarget.matches('.btn-skills')) {
    scrollToSkills(DOMElements);
  }  
  
  if (eventTarget.matches('.btn-contact')) {
    document.body.scrollTop = document.body.scrollHeight; // For Safari
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
  }
});

  function scrollToSkills(DOMElements) {
    const { skillsForm} = DOMElements;
    skillsForm.scrollIntoView({
      behavior: 'smooth',
    });
  }


      var submitButton = document.getElementById("submit_form");
      var form = document.getElementById("email_form");
      form.addEventListener("submit", function (e) {

          setTimeout(function() {
              submitButton.value = "Enviando...";
              submitButton.disabled = true;
          }, 1);
      });

  