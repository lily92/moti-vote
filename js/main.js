document.ready = function () {
  document.getElementById('btn-menu').onclick = function () {
    document.getElementById('nav').classList = 'navOut'
  }
  document.getElementById('close_nav').onclick = function () {
    document.getElementById('nav').classList = ''
  }
}
