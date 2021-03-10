export default function formJS() {
  const fromRegister = document.querySelector('#fromRegister');
  const submit = fromRegister.querySelector('input[type="submit"]');
  const inputArray = Array.from(
    fromRegister.querySelectorAll('input[type="text"], input[type="email"]'),
  );
  const alertBox = document.querySelector('.alertNotification');
  const alertMessage = alertBox.querySelector('p');
  const infoCandidate = document.querySelector('.info-candidate');

  function handleChange(event) {
    const target = event.target;
    if (!target.checkValidity()) {
      target.nextElementSibling.classList.add('incorrect');
      target.classList.add('incorrect');
      target.nextElementSibling.innerText = `Preencha o campo ${target.name} corretamente`;
    } else {
      target.nextElementSibling.classList.remove('incorrect');
      target.classList.remove('incorrect');
      target.nextElementSibling.innerText = '';
    }
  }

  function createElement(label, info = '', elementParent) {
    const elementDiv = document.createElement('div');
    const elementP = document.createElement('p');
    const elementInfo = document.createElement('strong');

    if (info !== '') {
      elementInfo.classList.remove('noInform');
      elementInfo.innerText = info;
    } else {
      elementInfo.classList.add('noInform');
      elementInfo.innerText = 'Não informado';
    }

    elementDiv.classList.add('boxInfo');
    elementP.innerText = label;

    elementDiv.appendChild(elementP);
    elementDiv.appendChild(elementInfo);
    elementParent.appendChild(elementDiv);
  }

  function handleClick(event) {
    event.preventDefault();

    const checkForm = inputArray.every((input) => {
      if (!input.checkValidity()) {
        return false;
      }
      return true;
    });

    if (checkForm) {
      alertBox.classList.add('open');
      alertBox.classList.remove('erroNotification');
      alertMessage.innerText = 'Candidatura enviada com sucesso!';
      infoCandidate.innerHTML = '';
      createElement('Nome completo', fromRegister.nome.value, infoCandidate);
      createElement('E-mail', fromRegister.email.value, infoCandidate);
      createElement('Telefone 1', fromRegister.telefone1.value, infoCandidate);
      createElement('Telefone 2', fromRegister.telefone2.value, infoCandidate);
    } else {
      alertBox.classList.add('erroNotification', 'open');
      alertMessage.innerText = 'Preencha os campos solicitados';
    }

    setTimeout(() => {
      alertBox.classList.remove('open');
    }, 3000);
  }

  fromRegister.addEventListener('change', handleChange);
  submit.addEventListener('click', handleClick);
}
