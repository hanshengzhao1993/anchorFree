'use strict';
window.onload = ()=> {

  function hasClass(ele,cls) {
    return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
  };

  function removeClass(ele,cls) {
    if (hasClass(ele,cls)) {
      var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
      ele.className=ele.className.replace(reg,' ');
    }
  };

  let headerButtons = document.getElementById('header');
  headerButtons.addEventListener('click', (event)=>{
    event.preventDefault();
    if(event.srcElement.tagName === 'A'){
      let articleNumber = event.srcElement.innerHTML.slice(5);
      let articleNames = document.getElementsByTagName('article');
      for(let i = 0; i< articleNames.length; i++){
        if(articleNames[i].id.includes(articleNumber)){
          // should take out no-show if there is a class
          // if it is current show dont go anything
          if(articleNames[i].className.includes('show')){
            // first check if element is currently being showed
            // dont do anything
            console.log('clicked on the same as ths showing')
          } else {
            console.log('clicked now the same as showing')
            for(let j = 0; j< articleNames.length; j++){
              if(articleNames[j].className.includes('show')){
                removeClass(articleNames[j], 'show');
                articleNames[j].className += ' hide';
              }
            }
            removeClass(articleNames[i], 'hide');
            articleNames[i].className += ' show';
          }
        }
      }
    } 
  })

  let NavButtons = document.getElementById('nav-buttons');
  NavButtons.addEventListener('click', (event)=>{
    event.preventDefault();
    if(event.srcElement.tagName === 'A'){
      let articleNumber = event.srcElement.innerHTML.slice(5);
      let articleNames = document.getElementsByTagName('article');
      for(let i = 0; i< articleNames.length; i++){
        if(articleNames[i].id.includes(articleNumber)){
          // should take out no-show if there is a class
          // if it is current show dont go anything
          if(articleNames[i].className.includes('show')){
            // first check if element is currently being showed
            // dont do anything
            console.log('clicked on the same as ths showing')
          } else {
            console.log('clicked now the same as showing')
            for(let j = 0; j< articleNames.length; j++){
              if(articleNames[j].className.includes('show')){
                removeClass(articleNames[j], 'show');
                articleNames[j].className += ' hide';
              }
            }
            removeClass(articleNames[i], 'hide');
            articleNames[i].className += ' show';
          }
        }
      }
    } 
  })


}