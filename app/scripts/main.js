const jobElement = document.getElementById('job-element');
const portfolioSection = document.getElementById('portfolio');
const modalElement = document.getElementById('job-detail-element');
const techStack = document.querySelector('[id=tech-stack]');
const toggler = document.getElementById('toggler');
const closeNav = document.getElementById('close');
const links = document.getElementsByClassName('links');
const nav = document.getElementById('show-nav');
const overlay = document.getElementById('overlay');

const url = document.location;

const sourcePath = (url) => {
  const str = url.toString();
  const strArr = str.split('/');
  strArr.pop();
  const joined = strArr.join('/');
  return joined;
};

const showOverlay = () => {
  overlay.classList.toggle('overlay-show');
};

const showModal = (id, show = false, data = []) => {
  const title = modalElement.querySelector('[id=title]');
  const img = modalElement.querySelector('[id=job-img]');
  const description = modalElement.querySelector('[id=description]');
  const techStackContainer = modalElement.querySelector('[id=tech-stack-container]');
  const company = modalElement.querySelector('[id=company]');
  const jobTitle = modalElement.querySelector('[id=job-title]');
  const year = modalElement.querySelector('[id=year]');
  const website = modalElement.querySelector('[id=website]');
  const githublink = modalElement.querySelector('a#github-link');
  const closeModal = modalElement.querySelector('[id=close-modal]');

  if (show) {
    const content = data[id];
    title.innerText = content.title;
    img.src = content.image;
    description.innerText = content.full_description;
    company.innerText = content.subtitle.jobtitle;
    jobTitle.innerText = content.subtitle.position;
    year.innerText = content.subtitle.year;
    githublink.setAttribute('href', content.github_link);
    githublink.setAttribute('target', '_blank');
    website.setAttribute('href', content.website);
    website.setAttribute('target', '_blank');

    content.techStack.forEach((ts) => {
      const newTSnode = techStack.cloneNode(true);
      const tsTitle = newTSnode.querySelector('[id=tech-stack-title]');
      tsTitle.innerText = ts;
      techStackContainer.appendChild(newTSnode);
    });
  }

  closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    showModal(null, false);
  });

  if (techStackContainer.hasChildNodes && !show) {
    while (techStackContainer.firstChild) {
      techStackContainer.removeChild(techStackContainer.firstChild);
    }
  }
  showOverlay();
  modalElement.classList.toggle('invisible');
};

fetch(`${sourcePath(url)}/app/scripts/jobsList.json`)
  .then((e) => {
    e.json().then(({ data }) => {
      data.forEach((element, index) => {
        const newElement = jobElement.cloneNode(true);
        const container = newElement.querySelector('[id=container]');
        const img = newElement.querySelector('[id=job-img]');
        const title = newElement.querySelector('[id=title]');
        const company = newElement.querySelector('[id=company]');
        const jobTitle = newElement.querySelector('[id=job-title]');
        const year = newElement.querySelector('[id=year]');
        const desc = newElement.querySelector('[id=description]');
        const techStackContainer = newElement.querySelector('[id=tech-stack-container]');
        const detailLink = newElement.querySelector('[id=detail-link]');
        if (index % 2 !== 0) {
          container.classList.add('reversed');
        }
        img.src = element.image;
        title.innerText = element.title;
        company.innerText = element.subtitle.jobtitle;
        jobTitle.innerText = element.subtitle.position;
        year.innerText = element.subtitle.year;
        desc.innerText = element.description;
        detailLink.addEventListener('click', () => {
          showModal(index, true, data);
        });
        element.techStack.forEach((ts) => {
          const newTSnode = techStack.cloneNode(true);
          const tsTitle = newTSnode.querySelector('[id=tech-stack-title]');
          tsTitle.innerText = ts;
          techStackContainer.appendChild(newTSnode);
        });
        portfolioSection.appendChild(newElement);
      });
    });
  });


const showNav = () => {
  nav.classList.toggle('nav-show');
};

toggler.addEventListener('click', () => {
  showOverlay();
  showNav();
});

closeNav.addEventListener('click', () => {
  showOverlay();
  showNav();
});

Array.from(links).forEach((element) => {
  element.addEventListener('click', () => {
    showOverlay();
    showNav();
  });
});
