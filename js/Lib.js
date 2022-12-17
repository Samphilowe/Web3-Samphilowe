function _(selector) {
  // body...
  var self = {};
    self.selector = selector;
    if (!selector == "object" ) {
      self.element = selector;
      console.log("No Element");
    }
    else{
      self.element = document.querySelector(self.selector);
    }
    
    
    self.html = function(){
      return this.element.outerHTML;
    }
    
    self.text = function(insertText){
      this.element.innerText = insertText;
    }
    self.on = function(event,callback){
      this.element.addEventListener(event, callback);
    }
    self.attr = function(type,value){
      if (!value) return this.element.getAttribute(type);
      this.element.setAttribute(type,value);
    }
    self.css = function (styles) {
      for(let key in styles){
        this.element.style[key] = styles[key]
      }
    }
    self.child =function (child) {
      // body...
      this.element.appendChild(child)
    }
    
  
  return self;
  
}

