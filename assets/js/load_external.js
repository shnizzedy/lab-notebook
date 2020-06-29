function external_code(url, elementID, language="text") {
  fetch(url).then(response => response.text().then(code => {
    let element = document.getElementById(elementID);
    if (language != 'text') {
      let parent = element.parentNode
      let pre = document.createElement('pre');
      parent.replaceChild(pre, element);
      pre.append(element);
      pre.classList.add(`language-${language}`);
      element.classList.add(`language-${language}`);
    };
    element.innerText = code;
  }))
};