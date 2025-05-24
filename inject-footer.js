// inject-footer.js
document.addEventListener("DOMContentLoaded", () => {
    fetch('/footer.html')
      .then(res => res.text())
      .then(footer => {
        const div = document.createElement('div');
        div.innerHTML = footer;
        document.body.appendChild(div);
      });
  });
  