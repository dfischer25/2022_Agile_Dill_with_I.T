const hideMaps = () => {
  const maps = document.querySelectorAll('.map');

  maps.forEach((map) => {
    map.style.display = 'none';
  });
};

function selectedIndexChange() {
  hideMaps();
  let selectedIndex = document.getElementById('locations').value;
  let index = document.getElementById('locations').selectedIndex;
  let activeMap = (document.getElementById(`${selectedIndex}`).style.display =
    'block');
  setHours(index);
}

function setHours(selectedIndex) {
  let hours = document.getElementById('hours');
  let open = '';

  switch (selectedIndex) {
    case 0:
      open = 'Public access, Does not close.';
      break;
    case 1:
      open = 'Public access, Does not close.';
      break;
    case 2:
      open = 'Scheduled access.';
      break;
    case 3:
      open = 'Public access, Does not close.';
      break;
    case 4:
      open = 'Saturday - Sunday: 6:00am to 10:00pm.';
      break;
    case 5:
      open = 'Public access, Does not close.';
      break;
    case 6:
      open = 'Saturday - Sunday: 6:00am to 10:00pm.';
      break;
    case 7:
      open = 'Public access, Does not close.';
      break;
    case 8:
      open = 'Saturday - Sunday: 6:00am to 10:00pm.';
      break;
  }

  hours.innerHTML = `Hours: ${open}`;
}

document
  .getElementById('locations')
  .addEventListener('change', selectedIndexChange);
