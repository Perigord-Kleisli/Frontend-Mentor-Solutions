const params = new URL(document.URL).searchParams;
const email = document.getElementById('email');
email.innerHTML = params.get('email');
