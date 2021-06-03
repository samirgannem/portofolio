const DOMElements = {
    projectsForm: document.querySelector('.tittle-projects'),
  };
const DOMElements1 = {
    skillsForm: document.querySelector('.text-tittle-footer'),
  };
const DOMElements2 = {
    contactForm: document.querySelector('.line-footer'),
  };

window.addEventListener('click', (e) => {
  const eventTarget = e.target;

  if (eventTarget.matches('.btn-projects')) {
    // scrollToContact(DOMElements);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  }
  
  if (eventTarget.matches('.btn-skills')) {
    scrollToContact1(DOMElements1);
  }  
  
  if (eventTarget.matches('.btn-contact')) {
    scrollToContact2(DOMElements2);
  }
});

  function scrollToContact(DOMElements) {
    const { projectsForm} = DOMElements;
    projectsForm.scrollIntoView({
      behavior: 'smooth',
    });
  }

  function scrollToContact1(DOMElements1) {
    const { skillsForm} = DOMElements1;
    skillsForm.scrollIntoView({
      behavior: 'smooth',
    });
  }

  function scrollToContact2(DOMElements2) {
    const { contactForm} = DOMElements2;
    contactForm.scrollIntoView({
      behavior: 'smooth',
    });
  }



  function scrollToTop(DOMElements) {
    const { heroContainer } = DOMElements;
    heroContainer.scrollIntoView({
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

  