function animation(){
  document.querySelector("#omikuji").classList.add("omikuji-animation")
  document.querySelector("input").remove()
  setTimeout(() => {window.location.href = "https://www.lovelive-anime.jp/"}, 10*1000 - 500)
}