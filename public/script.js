'use strict';
window.onload = ()=> {

  // Used to check if it has class
  function hasClass(ele,cls) {
    return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
  };

  // used to remove class
  function removeClass(ele,cls) {
    if (hasClass(ele,cls)) {
      var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
      ele.className=ele.className.replace(reg,' ');
    }
  };

  // header buttons click event
  let headerButtons = document.getElementById('header');
  headerButtons.addEventListener('click', (event)=>{
    event.preventDefault();
    if(event.target.tagName === 'A'){
      let articleNumber = event.target.innerHTML.slice(5);
      let articleNames = document.getElementsByTagName('article');
      for(let i = 0; i< articleNames.length; i++){
        if(articleNames[i].id.includes(articleNumber)){
          // should take out no-show if there is a class
          // if it is current show dont go anything
          if(articleNames[i].className.includes('show')){
            // first check if element is currently being showed
            // dont do anything
          } else {
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

      // change the current location of the nav button when clicking header buttons
      for(let j = 0; j< articleNames.length; j++){
        if(articleNames[j].className.includes('show')){
          let navButtonNumber = j + 1;
          // then find the nav li that has that navButtonNumber
          for(let l = 0; l< navButtons.childNodes.length; l++){
            if(navButtons.childNodes[l].tagName === 'UL'){
              for(let n = 0; n < navButtons.childNodes[l].childNodes.length; n++){
                if(navButtons.childNodes[l].childNodes[n].tagName === 'LI'){
                  let currentLi = navButtons.childNodes[l].childNodes[n];
                  if(currentLi.innerHTML.includes(navButtonNumber)){
                    currentLi.innerHTML = currentLi.innerHTML.slice(0, 6)
                    currentLi.innerHTML = currentLi.innerHTML + ' Current ';
                    if(!currentLi.className.includes('grey-color-button')){
                      currentLi.className += 'grey-color-button'; 
                    }
                  } else {
                    removeClass(currentLi, 'grey-color-button');
                    if(currentLi.innerHTML.includes('Current')){
                      currentLi.innerHTML = currentLi.innerHTML.slice(0, 6)
                    }
                  }
                }
              }
            }
          }
        }
      }

    } 
  })

  // nav button click event
  let navButtons = document.getElementById('nav-buttons');
  navButtons.addEventListener('click', (event)=>{
    let articleNumber = event.target.innerHTML.slice(5);
    let articleNames = document.getElementsByTagName('article');
    event.preventDefault();
    if(event.target.tagName === 'LI'){
      for(let i = 0; i< articleNames.length; i++){
        if(articleNames[i].id.includes(articleNumber)){
          // should take out no-show if there is a class
          // if it is current show dont go anything
          if(articleNames[i].className.includes('show')){
            // first check if element is currently being showed
            // dont do anything
          } else {
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
    // changing the text of the nav 
    if(event.target){
      // first find which article is beign displayed
      for(let j = 0; j< articleNames.length; j++){
        if(articleNames[j].className.includes('show')){
          let navButtonNumber = j + 1;
          // then find the nav li that has that navButtonNumber
          for(let l = 0; l< navButtons.childNodes.length; l++){
            if(navButtons.childNodes[l].tagName === 'UL'){
              for(let n = 0; n < navButtons.childNodes[l].childNodes.length; n++){
                if(navButtons.childNodes[l].childNodes[n].tagName === 'LI'){
                  let currentLi = navButtons.childNodes[l].childNodes[n];
                  if(currentLi.innerHTML.includes(navButtonNumber)){
                    currentLi.innerHTML = currentLi.innerHTML.slice(0, 6)
                    currentLi.innerHTML = currentLi.innerHTML + ' Current ';
                    if(!currentLi.className.includes('grey-color-button')){
                      currentLi.className += 'grey-color-button'; 
                    }
                  } else {
                    removeClass(currentLi, 'grey-color-button');
                    if(currentLi.innerHTML.includes('Current')){
                      currentLi.innerHTML = currentLi.innerHTML.slice(0, 6)
                    }
                  }
                }
              }
            }
          }
        }
      }
    } 
  })


}