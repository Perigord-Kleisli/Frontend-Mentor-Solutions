const addElement = () => {
  const challenges = document.getElementById('challenges');
  [
    './qr-code-component-main',
    './newsletter-sign-up-with-success-message-main',
  ].forEach((link) => {
    link = link + '/index.html';

    const linkName = link.split('/')[1];

    const textShrink = linkName.length > 30 ?
      `style="font-size:${linkName.length / 22}em;"` :
      '';
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
        <a
          href="${link}"
          class="challenge-title"
          ${textShrink}
          >
          ${linkName}
        </a>
      </div>
    </div>
    `.trim();
    challenges.appendChild(template.content.firstChild);
  });
};

document.body.onload = addElement;
