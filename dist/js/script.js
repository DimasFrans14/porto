const hamburger = document.querySelector('#hamburger');

window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }
    else{
        header.classList.remove('navbar-fixed');
    }
}

hamburger.addEventListener('click', function(){

    const navMenu = document.querySelector('#nav-menu');

    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');

});

async function sendMessage() {
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');
  
    const dataMessage = {
      from_name: name.value,
      email_id: email.value,
      message: message.value
    };
  
    try {
      const response = await emailjs.send("service_ywpnqrs", "template_pyeo2da", dataMessage);
      alert("Message Sent Successfully!");
  
      name.value = '';
      email.value = '';
      message.value = '';
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }
  }
  


