const addElement = () => {
  const challenges = document.getElementById('challenges');
  [
    './qr-code-component-main',
  ].forEach((link) => {
    link = link + '/index.html';

    const template = document.createElement('template');
    template.innerHTML = `
    <div class="challenge-container">
      <iframe 
        src=${link} 
        onload="
          if (screen.width > 500) {
            this.width = screen.width/2;
          } else {
            this.width = screen.width;
          }
          this.height = screen.height/2;
        ">
      </iframe>
      <div class="challenge-desc">
        <a href="${link}" class="challenge-title" >
          ${link.split('/')[1]}
        </a>
      </div>
    </div>
    `.trim();
    challenges.appendChild(template.content.firstChild);
  });
};


document.body.onload = addElement;
