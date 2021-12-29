const LOCAL_KEY = 'kim_2021_new_year';
function main(){
  const getData = getUrlData() ? getUrlData() : getLocalData()
  const obj = getData ? getData : omikujiHiku()
  console.log(obj)
  console.log(makeURL(obj))
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
  }else{
    const jibun = document.createElement("input")
    jibun.value = "自分のおみくじを引くor確認する"
    jibun.type = "button"
    jibun.onclick = function(){window.location.href = window.location.href.split('?')[0]}
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
    Object.keys(omikujiData).forEach(e => {
      if(Object.keys(omikujiData[e]).indexOf(url_param[e]) === -1){
        throw new Error('データがない');
      }
    });
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
  const nums = {
    omikuji : Math.random(),
    negai : Math.random(),
    kinun : Math.random(),
    lucky : Math.random()
  }
  const omikuji_key = [];
  for(let i in omikujiData.omikuji){
    for(let j = omikujiData.omikuji[i].rate * 100; j > 0; j--){
      omikuji_key.push(i)
    }
  }
  if(omikuji_key[Math.round(nums.omikuji * 100)] === "uakaQs"){
    const obj = {
      omikuji : "uakaQs",
      negai : "GemVzx",
      kinun : "hKejMy",
      lucky : "eVrBYT"
    }
    localStorage.setItem(LOCAL_KEY, JSON.stringify(obj))
    return obj
  }
  const return_obj = {};
  return_obj.omikuji = omikuji_key[Math.round(nums.omikuji * 100)]
  const keys = ["negai", "kinun", "lucky"]
  keys.forEach(e => {
    const keys = Object.keys(omikujiData[e])
    return_obj[e] = keys[Math.floor(nums[e] * keys.length)]
  });
  localStorage.setItem(LOCAL_KEY, JSON.stringify(return_obj))
  return return_obj
}

function makeURL(obj){
  return `${window.location.href.split('?')[0]}?omikuji=${obj.omikuji}&negai=${obj.negai}&kinun=${obj.kinun}&lucky=${obj.lucky}`
}

function tweet(obj) {
  const content = {
    url: makeURL(obj), // window.location.href,
    text: `おみくじの結果は【${omikujiData.omikuji[obj.omikuji].ja}】でした！\n詳しくはこちら！`,
    tag: "kimおみくじ2021"
  };
  for (let key in content) {
    content[key] = encodeURIComponent(content[key]);
  }
  window.open("https://twitter.com/intent/tweet?url=" + content.url + "&text=" + content.text + "&hashtags=" + content.tag)
}

function display(obj){
  document.querySelector('#omikuji').textContent = omikujiData.omikuji[obj.omikuji].ja
  document.querySelector('#text').textContent = omikujiData.omikuji[obj.omikuji].text
  const keys = ["negai", "kinun", "lucky"]
  keys.forEach(e => {
    document.querySelector(`#${e}`).textContent = omikujiData[e][obj[e]]
  })
}

function share(obj){
  document.querySelector("#share").remove()
  const copy_dom = document.createElement("textarea")
  copy_dom.value = `おみくじの結果は【${omikujiData.omikuji[obj.omikuji].ja}】でした！\n詳しくはこちら！\n${makeURL(obj)}`
  document.body.appendChild(copy_dom)
  copy_dom.select();
  document.execCommand("copy");
}

main()