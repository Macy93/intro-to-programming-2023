
const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer');

const copyright = document.createElement('p');

copyright.innerHTML= `&copy; Michelle Wagner ${thisYear}`;

footer.appendChild(copyright);

const skills = ['Programming in JavaScript, HTML, CSS','3 years customer service','1 year warehouse','Knowledge in using a cash register','Problem solving'];

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

    newMessage.style.fontSize="25px";


    const removeButton = document.createElement('button');
    removeButton.innerText = "remove";
    removeButton.type="button";
    removeButton.style.fontFamily= "josefin sans";
    removeButton.style.backgroundColor= "736ced";
    removeButton.style.color= "white";
    removeButton.style.borderRadius="12px";
    removeButton.style.fontSize= "18px";
    removeButton.style.padding= "15px";
    removeButton.style.margin= "25px";
    removeButton.style.shadowBox= "100px 100px";

    removeButton.addEventListener('click', (e) => {
        e.preventDefault();

        const entry = removeButton.parentNode;
        entry.remove();    

    });

    removeButton.addEventListener('mouseover', (e) => {   
        e.preventDefault()
        removeButton.style.backgroundColor = 'purple'
    })

    removeButton.addEventListener('mouseleave', (e) => {
        e.preventDefault()
        removeButton.style.color = 'white'
        removeButton.style.backgroundColor = 'blue'
        
    })       
    

    

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
});

/*
-----------6.1 ASSIGNMENT---------
const githubRequest = new XMLHttpRequest();
githubRequest.open('GET','https://api.github.com/users/Macy93/repos');
githubRequest.send();

const projectSelection = document.getElementById("projects");
const projectList = projectSelection.querySelector('ul'); 

githubRequest.addEventListener("load", function(){  
    var repositories = JSON.parse(this.responseText);
  
    console.log(repositories);  

    for(i = 0; i < repositories.length; i++){
      const project = document.createElement('li');
       project.innerText = repositories[i].name;  
       projectList.appendChild(project);   
        
    }  
});

*/

const url = 'https://api.github.com/users/Macy93/repos'
const projectSelection = document.getElementById("projects");
const projectList = projectSelection.querySelector('ul'); 

fetch(url)
    .then(response => response.json())
    .then( (response) => { 
     
      
      
        var repositories = response;    
        console.log(repositories);  
    
        for(i = 0; i < repositories.length; i++){
          const project = document.createElement('li');
           project.innerText = repositories[i].name;  
           projectList.appendChild(project);   
            
        }  
    });

  trycatch(error => console.log('Looks like there was a problem!', error))

    


