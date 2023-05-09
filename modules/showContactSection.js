const showContactSection = () => {
  const container = document.querySelector('.main_section');
  container.innerHTML = `
<div id = "contact_section">

  <div class="contact_title">
    <h2>Contact Information</h2>
  </div>

  <div class="contact_detail">
    <div class="contact_description">
      <p>Do have any questions or you just want say "Hello"? You can reach out to us</p>
    </div>

    <ul class="address">
      <li>Our e-mail: mail@mail.com</li>
      <li>Our Phone: number +8801952773973</li>
      <li>Our address: Streetname 22,84503 City, Country</li>
    </ul>
  </div>

</div>
  `;
};

export default showContactSection;