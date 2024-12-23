const toggleCheckbox = document.getElementById('myToggle');

const contentOne = document.getElementById('content1');

const contentTwo = document.getElementById('content2');



toggleCheckbox.addEventListener('change', () => {

  if (toggleCheckbox.checked) {

    contentOne.style.display = 'block';

    contentTwo.style.display = 'none';

  } else {

    contentOne.style.display = 'none';

    contentTwo.style.display = 'block';

  }

});
