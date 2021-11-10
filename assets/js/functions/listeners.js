var nav = document.querySelector('nav.header-left')
var iconNav = document.querySelector('.header-top-left .header-icon')
var listes = document.querySelectorAll('.header-left ul li')
var prev = document.getElementById('prev')
var next = document.getElementById('next')

/**
 * Objet contenant les gestionnaires d'évènements
 */
var listenerFunctions = {
  openNav: () => {
    nav.style.display = 'block'
  },
  closeNav: () => {
    nav.style.display = 'none'
  },
  nextSlide: () => {
    let index = slideIndex + 1
    showSlide(index)
  },
  prevSlide: () => {
    let index = slideIndex - 1
    showSlide(index)
  },
  shwoAccordeonContent: (e) => {
    let element = e.target
    if (element.className) {
      // accordeon-title
      if (element.className === 'accordeon-title') {
        element = element.parentNode
      }
    } else {
      // h2
      element = element.parentNode.parentNode
    }
    var accordeon_content = element.children[1]
    if (window.getComputedStyle(accordeon_content).display) {
      if (window.getComputedStyle(accordeon_content).display == 'block') {
        accordeon_content.style.display = 'none'
      } else {
        accordeon_content.style.display = 'block'
      }
    } else {
      accordeon_content.style.display = 'block'
    }
    element.classList.toggle('active')
  },
}

/**
 * Fonction qui réalise les abonnements
 */
var setupListeners = () => {
  iconNav.onmouseover = listenerFunctions.openNav
  nav.onmouseleave = listenerFunctions.closeNav
  prev.onclick = listenerFunctions.prevSlide
  next.onclick = listenerFunctions.nextSlide
  for (let index = 0; index < listes.length; index++) {
    const li = listes[index]
    li.onclick = listenerFunctions.closeNav
  }
  var accordeon_items = document.querySelectorAll('.accordeon-item')
  for (let index = 0; index < accordeon_items.length; index++) {
    const accordeon_item = accordeon_items[index]
    accordeon_item.onclick = listenerFunctions.shwoAccordeonContent
  }
}
