const hideMaps = () => {
  const maps = document.querySelectorAll('.map');

  maps.forEach((map) => {
    map.style.display = 'none';
  });
};

function selectedIndexChange() {
  hideMaps();
  let selectedIndex = document.getElementById('locations').value;
  let activeMap = (document.getElementById(`${selectedIndex}`).style.display =
    'block');
}

document
  .getElementById('locations')
  .addEventListener('change', selectedIndexChange);
