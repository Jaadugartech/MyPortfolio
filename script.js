let currentProject = 0;
const projects = document.querySelectorAll('.project');

function changeSlide(n) {
    projects[currentProject].classList.remove('active');
    currentProject = (currentProject + n + projects.length) % projects.length;
    projects[currentProject].classList.add('active');

}