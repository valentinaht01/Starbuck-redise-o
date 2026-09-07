// Componente de Footer Global para Starbucks Colombia
const SiteFooter = {
  template: `
    <footer class="site-footer">
      <div class="footer-container">
        
        <div class="footer-columns">
          <div class="footer-brand">
            <img src="assets/logo.png" alt="Starbucks Logo" class="footer-logo">
          </div>
          
          <div class="footer-col">
            <h4>Sobre nosotros</h4>
            <ul>
              <li><a href="acerca-de-starbucks.html">Acerca de Starbucks</a></li>
              <li><a href="novedades.html">Trabaja con nosotros</a></li>
              <li><a href="historias.html">Historias y noticias Starbucks</a></li>
              <li><a href="notmilk.html">Sobre Notmilk</a></li>
              <li><a href="como-elaborar-cafe.html">Guía de preparación de un buen café en casa</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Atención al Cliente</h4>
            <ul>
              <li><a href="contacto.html">Sugerencias y reclamos</a></li>
              <li><a href="facturacion.html">Factura Electrónica</a></li>
            </ul>
          </div>
        </div>

        <hr class="footer-divider">

        <div class="footer-middle">
          <div class="legal-links">
            <a href="terminos.html">Términos de uso web</a>
            <a href="aviso-de-privacidad.html">Aviso de Privacidad</a>
            <a href="terminos.html">Política de tratamiento de datos</a>
            <a href="reversion-de-pago.html">Reversión de pago</a>
            <a href="politica-de-garantia.html">Política de garantía</a>
            <a href="terminos-rewards.html">Términos y Condiciones Starbucks Rewards</a>
          </div>

          <div class="app-card">
            <h3>Descarga la App Starbucks Colombia</h3>
            <p>Disfruta de la mejor experiencia Starbucks directo en tu celular.</p>
            <div class="app-buttons">
              <a href="#" class="store-btn">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store">
              </a>
              <a href="#" class="store-btn">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play">
              </a>
            </div>
          </div>
        </div>

        <div class="social-icons">
          <a href="https://facebook.com" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="https://instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://twitter.com" target="_blank"><i class="fa-brands fa-twitter"></i></a>
        </div>

        <p class="copyright">© 2026. Starbucks Coffee Company. Todos los derechos reservados.</p>

        <div class="sic-banner">
          <img src="assets/sic.jpg" alt="Superintendencia de Industria y Comercio" class="sic-logo">
        </div>

      </div>
    </footer>
  `
}