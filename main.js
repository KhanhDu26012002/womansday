onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
let container = document.getElementById('container');
let count = 1;
for(var i = 0; i<count; i++){
    let leftSnow = Math.floor(Math.random() * container.clientWidth);
    let topSnow = Math.floor(Math.random() * container.clientHeight);
    let widthSnow = Math.floor(Math.random() * 100);
    let timeSnow = Math.floor((Math.random() * 5) + 5);
    //let blurSnow = Math.floor(Math.random() * 10);
    console.log(leftSnow);
    let div = document.createElement('div');
    div.classList.add('snow');
    div.style.left = leftSnow + 'px';
    div.style.top = topSnow + 'px';
    div.style.width = widthSnow + 'px';
    div.style.height = widthSnow + 'px';
    div.style.animationDuration = timeSnow + 's';
    //div.style.filter = "blur(" + blurSnow + "px)";
    //container.appendChild(div);
}
let container2 = document.getElementById('container2');
let count2 = 1;
for(var i = 0; i<count2; i++){
    let leftSnow = Math.floor(Math.random() * container2.clientWidth);
    let topSnow = Math.floor(Math.random() * container2.clientHeight);
    let widthSnow = Math.floor(Math.random() * 100);
    let timeSnow = Math.floor((Math.random() * 5) + 5);
    let blurSnow = Math.floor(Math.random() * 10);
    console.log(leftSnow);
    let div = document.createElement('div');
    div.classList.add('snow2');
    div.style.left = leftSnow + 'px';
    div.style.top = topSnow + 'px';
    div.style.width = widthSnow + 'px';
    div.style.height = widthSnow + 'px';
    div.style.animationDuration = timeSnow + 's';
    div.style.filter = "blur(" + blurSnow + "px)";
    container2.appendChild(div);
}
let container3 = document.getElementById('container3');
let count3 = 1;
for(var i = 0; i<count3; i++){
    let leftSnow = Math.floor(Math.random() * container3.clientWidth);
    let topSnow = Math.floor(Math.random() * container3.clientHeight);
    let widthSnow = Math.floor(Math.random() * 100);
    let timeSnow = Math.floor((Math.random() * 5) + 5);
    let blurSnow = Math.floor(Math.random() * 10);
    console.log(leftSnow);
    let div = document.createElement('div');
    div.classList.add('snow3');
    div.style.left = leftSnow + 'px';
    div.style.top = topSnow + 'px';
    div.style.width = widthSnow + 'px';
    div.style.height = widthSnow + 'px';
    div.style.animationDuration = timeSnow + 's';
    div.style.filter = "blur(" + blurSnow + "px)";
    container3.appendChild(div);
}