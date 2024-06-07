document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    $.getJSON("dados.json",(data) => {
    
      const user = data?.auth.find(item => item?.email === email);

      if(!user) {
        alert('Digite um usuario valido.');
      } else {
        if(user.email === email && user.senha === password) {
          localStorage.setItem("email", email)
          window.location.href = 'dashboard.html';
        } else {
          alert('Invalid email or password.');
        }
      }
    });
});