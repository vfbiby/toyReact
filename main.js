for(let i of [1, 2, 3]){
  console.log(i);
}

function createElement(tagName, attributes, ...children){
  let e = document.createElement(tagName)
  for(let p in attributes){
    e.setAttribute(p, attributes[p])
  }

  return e;
}

window.a = <div id="a" class="c">
  <div></div>
  <div></div>
  <div></div>
</div>
