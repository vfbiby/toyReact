import { createElement } from "./toy-react";

class MyComponent{

}

document.body.appendChild(<MyComponent id="a" class="c">
  <div>abc</div>
  <div></div>
  <div></div>
</MyComponent>)
