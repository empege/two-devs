// Create element
export const createElement = (tag, classes, appendTo, text, htmlFor, id, type, required, placeholder, src, alt) => {
  const element = document.createElement(tag)
  if(classes) {classes.forEach(className => element.classList.add(className))}
  if(text) {element.innerText = text}
  if(htmlFor) {element.setAttribute('for', htmlFor)}
  if(id) {element.setAttribute('id', id)}
  if(type) {element.setAttribute('type', type)}
  if(required) {element.required = true}
  if(placeholder) {element.setAttribute('placeholder', placeholder)}
  if(src) {element.setAttribute('src', src)}
  if(alt) {element.setAttribute('alt', alt)}
  appendTo.appendChild(element)
  return element
}

// Delete element
export const deleteElement = (element) => {
  element.remove()
}