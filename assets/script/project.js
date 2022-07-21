let projects = [];

function addProject() {
  let technologies = [];

  let name = document.getElementById('project-name').value;
  let duration = '3 bulan';
  let description = document.getElementById('description').value;
  let nodejs = document.getElementById('nodejs');
  let nextjs = document.getElementById('nextjs');
  let reactjs = document.getElementById('reactjs');
  let typescript = document.getElementById('typescript');
  let image = document.getElementById('image').files[0];

  image = URL.createObjectURL(image);
  
  if (nodejs.checked) {
    technologies.push(nodejs.value);
  } 
  if (nextjs.checked) {
    technologies.push(nextjs.value);
  } 
  if (reactjs.checked) {
    technologies.push(reactjs.value);
  } 
  if (typescript.checked) {
    technologies.push(typescript.value);
  }
  
  let project = {
    name: name,
    duration: duration,
    description: description,
    technologies: technologies,
    image: image,
  }

  console.log(technologies);

  projects.push(project);

  renderProject();
}

function renderProject() {
  let projectWrapper = document.getElementById('project-wrapper');
  
  projectWrapper.innerHTML = '';

  for (let i = 0; i < projects.length; i++) {
    let nodejs = '';
    let nextjs = '';
    let reactjs = '';
    let typescript = '';

    if (projects[i].technologies.includes('nodejs')) {
      nodejs = '<img src="./assets/img/nodejs_icon.png" alt="">';
    }
    if (projects[i].technologies.includes('nextjs')) {
      nextjs = '<img src="./assets/img/nextjs_icon.png" alt="">';
    } 
    if (projects[i].technologies.includes('reactjs')) {
      reactjs = '<img src="./assets/img/reactjs_icon.png" alt="">';
    } 
    if (projects[i].technologies.includes('typescript')) {
      typescript = '<img src="./assets/img/typescript_icon.png" alt="">';
    }

    projectWrapper.innerHTML += `
    <div class="project-card">
      <img class="project-img" src="${projects[i].image}" alt="">
      <div class="project-card-header">
        <a href="./project1.html">${projects[i].name}</a>
        <p>durasi: 3 bulan</p>
      </div>
      <p>${projects[i].description}<br>Happy download</p>
      <div class="icon-wrapper">
        ${nodejs}
        ${nextjs}
        ${reactjs}
        ${typescript}
      </div>
      <div class="button-wrapper">
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
    `
  }

}