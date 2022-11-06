
const bigTabList = document.querySelectorAll('.big-tabs_item')
const tabList = document.querySelectorAll('.big-tabs_top-item');
tabList.forEach(item => {
  item.addEventListener('click', (e) => {
    tabList.forEach(el => { 
      el.classList.remove('big-tabs_top-item--active');
    });
    item.classList.add('big-tabs_top-item--active');
    
    if (item.classList.contains('big-tabs_top-item--general')) {
      console.log('big-tabs_top-item--general---111')
      document.getElementById('content-general').classList.add('big-tabs_item--active')
      // document.querySelectorAll('.big-tabs_item--general').classList.add('big-tabs_item--active');
      document.getElementById('content-anamnez').classList.remove('big-tabs_item--active');
      console.log('big-tabs_top-item--general')
    }
    if (item.classList.contains('big-tabs_top-item--anamnez')) {
      console.log('big-tabs_top-item--anamnez-2222');
      document.getElementById('content-anamnez').classList.add('big-tabs_item--active');
      document.getElementById('content-general').classList.remove('big-tabs_item--active');
      console.log('big-tabs_top-item--anamnez----4444');
    }
  });
});

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

