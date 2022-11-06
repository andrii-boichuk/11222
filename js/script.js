

const langlist = document.querySelectorAll('.lang-item');
langlist.forEach(item => {
  item.addEventListener('click', (e) => {
    langlist.forEach(el => { el.classList.remove('lang-item--active'); });
    item.classList.add('lang-item--active');
  });
});

const jobIcoList = document.querySelectorAll('.job-ico');
jobIcoList.forEach(item => {
  item.addEventListener('click', (e) => {
    jobIcoList.forEach(el => { el.classList.remove('job-ico--active'); });
    item.classList.add('job-ico--active');
  });
});

