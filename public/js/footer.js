const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <img src="img/light-logo.png" class="logo" alt="" />
    <div class="footer-ul-container">
      <ul class="category">
        <li class="category-title">hoodie</li>
        <li><a href="" class="footer-link">men</a></li>
        <li><a href="" class="footer-link">child</a></li>
        <li><a href="" class="footer-link">women</a></li>
      </ul>
      <ul class="category">
        <li class="category-title">jacket</li>
        <li><a href="" class="footer-link">men</a></li>
        <li><a href="" class="footer-link">child</a></li>
        <li><a href="" class="footer-link">women</a></li>
      </ul>
    </div>
  </div>
  <p class="footer-title">about us</p>
  <p class="info">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quia
    necessitatibus ut, perferendis accusantium ad nihil, nisi rem sapiente
    eum pariatur magnam quos mollitia consequatur nemo quod, laboriosam
    voluptatibus voluptas. Accusamus consequatur eius iste sequi hic sed,
    error animi, cum fugiat assumenda, et ipsam a tempore vitae natus sit
    tempora? Sapiente quidem mollitia odit! Aut voluptates eos quisquam
    eligendi suscipit fugit vel earum sequi, dolorum soluta dolore similique
    voluptate facilis quaerat expedita alias. Molestias accusantium tempora
    impedit quos. Ea velit accusantium dolorem ullam cupiditate quos laborum
    fugiat voluptatem suscipit. Et expedita neque nobis natus voluptas
    maxime, iusto libero.
  </p>
  <p class="info">support email - saklajs@mail</p>
  <p class="info">telepon 08889887</p>
  <div class="footer-social-container">
    <div>
      <a href="#" class="social-link">term & service</a>
      <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
      <a href="#" class="social-link">facbok</a>
      <a href="#" class="social-link">twiter</a>
      <a href="#" class="social-link">instagram</a>
    </div>
  </div>
  <p class="footer-credit">Awthriftt online store</p>
    `;

}
createFooter();