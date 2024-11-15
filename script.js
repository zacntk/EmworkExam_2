function changeColumns(num) {
  const temple = document.getElementById('temple')
  temple.style.gridTemplateColumns = `repeat(${num}, 1fr)`
}
