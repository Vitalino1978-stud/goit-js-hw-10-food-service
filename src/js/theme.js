const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const changeRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

if (localStorage.getItem('theme') === 'dark') {
  applyDark()
}
else {
  if (localStorage.getItem('theme') === 'light') {
    applyLight()
  }
}

 changeRef.addEventListener("change", changeTheme);

function applyDark() {
  bodyRef.classList.add(Theme.DARK)
  bodyRef.classList.remove(Theme.LIGHT)
  changeRef.checked = true
}
function applyLight() {
  bodyRef.classList.add(Theme.LIGHT)
  bodyRef.classList.remove(Theme.DARK)
  changeRef.checked = false
}
function changeTheme() {
  if (changeRef.checked) {
    applyDark()
    localStorage.setItem('theme', 'dark')
  }
  else {
    applyLight()
    localStorage.setItem('theme', 'light')
  }
}
