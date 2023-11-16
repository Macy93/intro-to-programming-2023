
const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer');

const copyright = document.createElement('p');

copyright.innerHTML= `&copy; Michelle Wagner ${thisYear}`;

footer.appendChild(copyright);

const skills = ['Programming in JavaScript, HTML, CSS','3 years customer service','1 year warehouse','knowledge in using a cash register','problem solving'];

const skillsSection = document.querySelector('#skills');

const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    skills[i];
    const skill = document.createElement('li');
   skill.innerText = skills[i];
   skillsList.appendChild(skill);
} 

const messageForm = document.querySelector('form')

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.usersName.value;
    console.log(name);    
    const email = e.target.usersEmail.value;
    console.log(email);
    const message = e.target.usersMessage.value;
    console.log(message);

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');

    newMessage.innerHTML = `<a href= mailto:${email}>${name} </a>
    <span>wrote: ${message}&nbsp</span>`
    messageForm.reset();

    const removeButton = document.createElement('button');
    removeButton.innerText = "remove";
    removeButton.type="button";

    removeButton.addEventListener('click', (e) => {
        e.preventDefault();

        const entry = removeButton.parentNode;
        entry.remove();
    

    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
});