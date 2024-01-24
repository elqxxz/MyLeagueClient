function runScript() {
  const CustStatus = document.getElementById('CustomStatus')
  if(CustStatus.value !== '') {
    document.getElementById('StatusText').textContent = '"'+CustStatus.value+'"';
    CustStatus.value = '';
    CustStatus.classList.toggle('active');
  }
  else {
    let learn = document.getElementById('StatusIcon').className
    if(learn == 'md hydrated') {
      document.getElementById('StatusText').textContent = 'online';
    }
    else {
      document.getElementById('StatusText').textContent = 'offline';
    };
    CustStatus.value = '';
    CustStatus.classList.toggle('active');
  };
};