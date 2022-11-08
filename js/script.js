

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

const paymentList = document.querySelectorAll('.patient-log_payment');
paymentList.forEach(item => {
  if (item.innerHTML == 0) {
    console.log('0');
    item.parentElement.classList.add('patient-log_payment-zero');
  }
  item.innerHTML += 'грн';
})

