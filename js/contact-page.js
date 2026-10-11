import "../css/contact-page.css"

function renderContactPage () {
    const content = document.querySelector('#content');
    const contactForm = document.createElement('form');

    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'usr-name');
    nameLabel.textContent = 'Name:*';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'usr-name');
    nameInput.setAttribute('id', 'usr-name');
    nameInput.required = true;
    contactForm.appendChild(nameLabel);
    contactForm.appendChild(nameInput);

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'usr-email');
    emailLabel.textContent = 'Email:*';
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'usr-email');
    emailInput.setAttribute('id', 'usr-email');
    emailInput.required = true;
    contactForm.appendChild(emailLabel);
    contactForm.appendChild(emailInput);

    const commentLabel = document.createElement('label');
    commentLabel.setAttribute('for', 'usr-comment');
    commentLabel.textContent = 'Comment:';
    const commentInput = document.createElement('textarea');
    commentInput.setAttribute('rows', '5');
    commentInput.setAttribute('name', 'usr-comment');
    commentInput.setAttribute('id', 'usr-comment');
    contactForm.appendChild(commentLabel);
    contactForm.appendChild(commentInput);

    const submitBtn = document.createElement('button');
    submitBtn.textContent = "Submit";
    contactForm.appendChild(submitBtn);

    content.appendChild(contactForm);
}

export {renderContactPage};