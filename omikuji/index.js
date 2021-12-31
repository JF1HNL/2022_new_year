function main(){
  const getData = getUrlData() ? getUrlData() : getLocalData()
  const obj = getData ? getData : omikujiHiku()
  display(obj)
  if(!document.location.search){
    const tweetButton = document.createElement("input")
    tweetButton.value = "結果をツイートして教えてね"
    tweetButton.type = "button"
    tweetButton.onclick = function(){tweet(obj)}
    document.body.appendChild(tweetButton)
    const shareButton = document.createElement("input")
    shareButton.value = "結果をクリップボードにコピーする"
    shareButton.id = "share"
    shareButton.type = "button"
    shareButton.onclick = function(){share(obj)}
    document.body.appendChild(shareButton)
    const sakunenButton = document.createElement("input")
    sakunenButton.id = "sakunen"
    sakunenButton.value = "2021年のおみくじを確認する"
    sakunenButton.type = "button"
    sakunenButton.onclick = function(){window.open("https://jf1hnl.github.io/2021_new_year/omikuji/")}
    document.body.appendChild(sakunenButton)
  }else{
    const jibun = document.createElement("input")
    jibun.value = "自分のおみくじを引くor確認する"
    jibun.type = "button"
    jibun.onclick = function(){window.location.href = "draw/"}
    document.body.appendChild(jibun)
  }
}

function getUrlData(){
  if(!document.location.search){
    return false
  }
  try {
    const url_param = JSON.parse(`{"${
      document.location.search
      .replace('?', '')
      .replaceAll('&', `","`)
      .replaceAll('=',`":"`)
    }"}`)
    Object.keys(omikujiData).filter(it => it !== "omikuji").forEach(e => {
      if(omikujiData[e].indexOf(url_param[e]) === -1){
        throw new Error('データがない');
      }
    });
    if(omikujiOnlyData.map(it => it.omikuji).indexOf(url_param.omikuji) === -1){
      throw new Error('データがない');
    }
    return url_param
  }
  catch(e){
    console.error('URL取得エラー')
    window.location.href = window.location.href.split('?')[0]
    return false
  }
}

function getLocalData(){
  try {
    if(localStorage.getItem(LOCAL_KEY) === null){
      throw new Error('データがnull')
    }
    const local_data = JSON.parse(localStorage.getItem(LOCAL_KEY))
    return local_data
  }
  catch(e){
    localStorage.removeItem(LOCAL_KEY);
    return false
  }
}

function omikujiHiku(){
  const getRandomNumber = (n) => Math.floor(Math.random() * n)
  const tokudai = omikujiOnlyData[0]
  omikujiData.omikuji = omikujiOnlyData.map((it) => [...Array(it.rate).keys()].map(() => it)).reduce((a,b) => [...a, ...b])
  const nums = Object.keys(omikujiData)
    .map((it) => { return {key : it, num : getRandomNumber(omikujiData[it].length)}})
    .reduce((target, value) => { target[value.key] = value.num; return target }, {})
  let return_obj = Object.keys(nums)
    .map((it) => { return { key : it, value : omikujiData[it][nums[it]]}})
    .reduce((target, value) => {target[value.key] = value.value; return target}, {})
  if(return_obj.omikuji === tokudai){
    return_obj = Object.keys(omikujiData).map((it) => { return {key : it, value : omikujiData[it][0]}}).reduce((target, value) => {target[value.key] = value.value; return target}, {})
    return_obj.omikuji = tokudai
    return_obj.lucky = omikujiData.lucky[nums.lucky]
  }
  return_obj.omikuji = return_obj.omikuji.omikuji
  localStorage.setItem(LOCAL_KEY, JSON.stringify(return_obj))
  return return_obj
}

function makeURL(obj){
  return `${window.location.href.split('?')[0]}?omikuji=${obj.omikuji}&negai=${obj.negai}&kinun=${obj.kinun}&syobu=${obj.syobu}&lucky=${obj.lucky}`
}

function tweet(obj) {
  const content = {
    url: makeURL(obj), // window.location.href,
    text: `おみくじの結果は【${obj.omikuji.decrypt()}】でした！\n詳しくはこちら！`,
    tag: "kimおみくじ2022"
  };
  for (let key in content) {
    content[key] = encodeURIComponent(content[key]);
  }
  window.open("https://twitter.com/intent/tweet?url=" + content.url + "&text=" + content.text + "&hashtags=" + content.tag)
}

function display(obj){
  document.querySelector('#omikuji').textContent = obj.omikuji.decrypt()
  document.querySelector('#text').textContent = omikujiOnlyData.filter((it) => it.omikuji === obj.omikuji)[0].text.decrypt()
  Object.keys(obj)
    .filter((it) => it !== "omikuji")
    .forEach(e => {
      document.querySelector(`#${e}`).textContent = obj[e].decrypt()
    })
}

function share(obj){
  document.querySelector("#share").remove()
  const message = document.createElement("div")
  message.style = "font-size: 6vmin;"
  if(navigator.clipboard){
    navigator.clipboard.writeText(`おみくじの結果は【${obj.omikuji.decrypt()}】でした！\n詳しくはこちら！\n${makeURL(obj)}`);
    message.innerText = "クリップボードにコピーしました"
  }else{
    message.innerText = "クリップボードにコピーできませんでした。"
  }
  document.body.insertBefore(message, document.querySelector("#sakunen"))
}

function translated(text, encrypt_flag){
  return text.split("").map((it) => {
    return SYMBOLS.indexOf(it) === -1 ? it : (SYMBOLS.indexOf(it) + ( encrypt_flag ? KEY : -1 * KEY)) % SYMBOLS.length 
  })
  .map((it) => {
    return it < 0 ? SYMBOLS[it + SYMBOLS.length] : SYMBOLS[it]
  }).join("")
}

String.prototype.decrypt = function(){ return decodeURIComponent(translated(this, false)) }
String.prototype.encrypt = function(){ return translated(encodeURIComponent(this), true) }

main()