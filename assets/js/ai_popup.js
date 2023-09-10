document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector('[data-bs-toggle="popover"]')) {  
    new bootstrap.Popover(document.querySelector('[data-bs-toggle="popover"]'), {
      container: 'body',
      placement: 'bottom',
      trigger: 'focus hover',
      html: true,
      content: document.querySelector('div.tldr > ul'),
      fallbackPlacements: ['bottom']
    })
  }
})