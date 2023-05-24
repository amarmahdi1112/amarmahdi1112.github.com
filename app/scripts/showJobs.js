const jobElement = document.getElementById('job-element')
const portfolioSection = document.getElementById('portfolio')
const modalElement = document.getElementById('job-detail-element')
let techStack = document.querySelector('[id=tech-stack]');

const url = document.location

const sourcePath = (url) => {
  let str = url.toString();
  let strArr = str.split('/')
  strArr.pop();
  let joined = strArr.join('/');
  return joined
}

const getId = (url) => {
  let strArr = url.toString().split('#')
  return strArr[strArr.length - 1];
}

fetch("./jobsList.json").then(({data})=>console.log(data))

const data = [
  {
    "id": "1",
    "title": "Tonica",
    "subtitle": {
      "jobtitle": "CANOPY",
      "position": "Back End Dev",
      "year": "2015"
    },
    "image": `${sourcePath(url)}/app/assets/pngs/jobs/job1.png`,
    "description": "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    "techStack": ["htmls", "css", "javaScript"],
    "full_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    "github_link": "https://github.com/amarmahdi1112",
    "website": "https://amarmahdi1112.github.io/"
  },
  {
    "id": "2",
    "title": "Tonica",
    "subtitle": {
      "jobtitle": "CANOPY",
      "position": "Back End Dev",
      "year": "2015"
    },
    "image": `${sourcePath(url)}/app/assets/pngs/jobs/job2.png`,
    "description": "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    "techStack": ["htmls", "css", "javaScript"],
    "full_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    "github_link": "https://github.com/amarmahdi1112",
    "website": "https://amarmahdi1112.github.io/"
  },
  {
    "id": "3",
    "title": "Tonica",
    "subtitle": {
      "jobtitle": "CANOPY",
      "position": "Back End Dev",
      "year": "2015"
    },
    "image": `${sourcePath(url)}/app/assets/pngs/jobs/job3.png`,
    "description": "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    "techStack": ["htmls", "css", "javaScript"],
    "full_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    "github_link": "https://github.com/amarmahdi1112",
    "website": "https://amarmahdi1112.github.io/"
  },
  {
    "id": "4",
    "title": "Tonica",
    "subtitle": {
      "jobtitle": "CANOPY",
      "position": "Back End Dev",
      "year": "2015"
    },
    "image": `${sourcePath(url)}/app/assets/pngs/jobs/job4.png`,
    "description": "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    "techStack": ["htmls", "css", "javaScript"],
    "full_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    "github_link": "https://github.com/amarmahdi1112",
    "website": "https://amarmahdi1112.github.io/"
  }
];

const showModal = (id, show = false) => {
  const content = data[id];
  const title = modalElement.querySelector('[id=title]');
  const img = modalElement.querySelector('[id=job-img]');
  const description = modalElement.querySelector('[id=description]');
  const techStackContainer = modalElement.querySelector('[id=tech-stack-container]')
  let company = modalElement.querySelector('[id=company]');
  let jobTitle = modalElement.querySelector('[id=job-title]');
  let year = modalElement.querySelector('[id=year]');
  
  if (show) {
    title.innerText = content.title;
    img.src = content.image;
    description.innerText = content.full_description;
    company.innerText = content.subtitle.jobtitle;
    jobTitle.innerText = content.subtitle.position;
    year.innerText = content.subtitle.year;

    content.techStack.forEach((ts) => {
      const newTSnode = techStack.cloneNode(true);
      const tsTitle = newTSnode.querySelector('[id=tech-stack-title]');
      tsTitle.innerText = ts;
      techStackContainer.appendChild(newTSnode);
    });
  }

  if (techStackContainer.hasChildNodes && !show) {
    while (techStackContainer.firstChild) {
      techStackContainer.removeChild(techStackContainer.firstChild)
    }
  }
  showOverlay();
  modalElement.classList.toggle('invisible');
}

data.forEach((element, index) => {
  const newElement = jobElement.cloneNode(true)
  let container = newElement.querySelector('[id=container]');
  let img = newElement.querySelector('[id=job-img]');
  let title = newElement.querySelector('[id=title]');
  let company = newElement.querySelector('[id=company]');
  let jobTitle = newElement.querySelector('[id=job-title]');
  let year = newElement.querySelector('[id=year]');
  let desc = newElement.querySelector('[id=description]');
  let techStackContainer = newElement.querySelector('[id=tech-stack-container]')
  let detailLink = newElement.querySelector('[id=detail-link]')
  let website = newElement.querySelector('[id=website]')
  let githublink = newElement.querySelector('[id=github-link]')

  if (index % 2 !== 0) {
    container.classList.add('reversed');
  }

  img.src = element.image;
  title.innerText = element.title;
  company.innerText = element.subtitle.jobtitle;
  jobTitle.innerText = element.subtitle.position;
  year.innerText = element.subtitle.year;
  desc.innerText = element.description;
  githublink.setAttribute('href', element.github_link);
  website.setAttribute('href', element.website);

  detailLink.addEventListener('click', () => {
    showModal(index, true);
  });

  element.techStack.forEach((ts) => {
    const newTSnode = techStack.cloneNode(true);
    const tsTitle = newTSnode.querySelector('[id=tech-stack-title]');
    tsTitle.innerText = ts;
    techStackContainer.appendChild(newTSnode);
  });

  portfolioSection.appendChild(newElement)
});
