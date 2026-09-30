import './style.css'

const WHATSAPP = '5491134531575'

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Ventura+de+la+Vega+3885,+CABA,+Argentina'

const whatsappUrl = (message = '') =>
  `https://wa.me/${WHATSAPP}${message ? `?text=${encodeURIComponent(message)}` : ''}`

const fruits = [
  'Manzana', 'Banana', 'Naranja', 'Mandarina', 'Limón',
  'Pomelo', 'Pera', 'Durazno', 'Ciruela', 'Uva',
  'Frutilla', 'Kiwi', 'Ananá', 'Sandía', 'Melón',
  'Mango', 'Palta', 'Coco', 'Maracuyá', 'Guayaba', 'Papaya'
]

const vegetables = [
  'Papa', 'Batata', 'Cebolla', 'Tomate', 'Morrón',
  'Zanahoria', 'Zapallo', 'Calabaza', 'Ajo', 'Lechuga',
  'Repollo', 'Espinaca', 'Acelga', 'Brócoli', 'Coliflor',
  'Pepino', 'Remolacha', 'Rabanito', 'Choclo', 'Arvejas',
  'Chaucha', 'Apio', 'Perejil', 'Cilantro', 'Berro',
  'Achicoria', 'Cebolla de verdeo', 'Jengibre'
]

const peppers = [
  'Ají picante', 'Locoto', 'Ajíes secos', 'Ají molido',
  'Pimentón', 'Orégano', 'Comino', 'Pimienta',
  'Condimentos variados'
]

const grocery = [
  'Arroz', 'Fideos', 'Harinas', 'Azúcar', 'Aceite',
  'Yerba', 'Café', 'Té', 'Galletitas', 'Snacks',
  'Conservas', 'Salsas', 'Mayonesa', 'Productos de almacén'
]

const beverages = [
  'Gaseosas', 'Jugos', 'Agua', 'Bebidas refrigeradas', 'Cervezas'
]

const categories = [
  {
    icon: '🍎',
    title: 'Frutas',
    subtitle: 'Frescura y variedad',
    items: fruits
  },
  {
    icon: '🥬',
    title: 'Verduras',
    subtitle: 'Seleccionadas todos los días',
    items: vegetables
  },
  {
    icon: '🌶️',
    title: 'Ajíes y condimentos',
    subtitle: 'Para darle sabor a tus comidas',
    items: peppers
  },
  {
    icon: '🛒',
    title: 'Almacén',
    subtitle: 'Todo para tu día a día',
    items: grocery
  },
  {
    icon: '🥤',
    title: 'Bebidas',
    subtitle: 'Para acompañar cada momento',
    items: beverages
  },
  {
    icon: '🥚',
    title: 'Huevos y más',
    subtitle: 'Productos frescos y esenciales',
    items: ['Huevos', 'Productos frescos', 'Artículos seleccionados']
  }
]

const gallery = [
  'foto-02.jpg',
  'foto-03.jpg',
  'foto-04.jpg',
  'foto-05.jpg',
  'foto-06.jpg',
  'foto-07.jpg',
  'foto-08.jpg',
  'foto-09.jpg',
  'foto-10.jpg',
  'foto-11.jpg'
]

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="site">

    <header class="header">

      <a href="#inicio" class="brand">
        Verdulería Jaime
      </a>

      <nav class="nav">
        <a href="#productos">Productos</a>
        <a href="#galeria">Nuestro espacio</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <a
        class="header-whatsapp"
        href="${whatsappUrl()}"
        target="_blank"
        rel="noopener"
      >
        WhatsApp
      </a>

    </header>

    <main>

      <section id="inicio" class="hero">

        <div class="hero-image">
          <img src="/images/portada.jpg" alt="Verdulería Jaime">
        </div>

        <div class="hero-overlay"></div>

        <div class="hero-content">

          <p class="eyebrow">
            Frescura que se nota
          </p>

          <h1>
            <span>VERDULERÍA</span>
            <em>JAIME</em>
          </h1>

          <p class="hero-text">
            Frutas, verduras, almacén y mucho más.
            Calidad y variedad para llevar lo mejor a tu mesa.
          </p>

          <div class="hero-actions">

            <a class="button button-primary" href="#productos">
              Ver productos
            </a>

            <a
              class="button button-whatsapp"
              href="${whatsappUrl('Hola Verdulería Jaime, quisiera hacer una consulta.')}"
              target="_blank"
              rel="noopener"
            >
              Consultar por WhatsApp
            </a>

          </div>

          <div class="hero-location">
            <span>⌖</span>
            <span>Ventura de la Vega 3885 · CABA</span>
          </div>

        </div>

      </section>

      <section class="intro">

        <p class="eyebrow">
          Calidad todos los días
        </p>

        <h2>
          Lo fresco siempre tiene otro sabor.
        </h2>

        <p>
          Encontrá frutas y verduras, productos de almacén,
          bebidas, condimentos y todo lo que necesitás
          para tu día a día.
        </p>

      </section>

      <section id="productos" class="products-section">

        <div class="section-heading">

          <div>

            <p class="eyebrow">
              Nuestra variedad
            </p>

            <h2>
              Todo en un solo lugar
            </h2>

          </div>

          <a
            class="text-link"
            href="${whatsappUrl('Hola Verdulería Jaime, quisiera consultar por productos y disponibilidad.')}"
            target="_blank"
            rel="noopener"
          >
            Consultar disponibilidad →
          </a>

        </div>

        <div class="category-grid">

          ${categories.map((category) => `
            <article class="category-card">

              <div class="category-icon">
                ${category.icon}
              </div>

              <p class="category-label">
                ${category.subtitle}
              </p>

              <h3>
                ${category.title}
              </h3>

              <div class="items">
                ${category.items
                  .map(item => `<span>${item}</span>`)
                  .join('')}
              </div>

              <a
                class="category-action"
                href="${whatsappUrl(`Hola Verdulería Jaime, quisiera consultar por ${category.title.toLowerCase()}.`)}"
                target="_blank"
                rel="noopener"
              >
                Consultar →
              </a>

            </article>
          `).join('')}

        </div>

      </section>

      <section class="quote-section">

        <div>

          <span class="quote-mark">
            “
          </span>

          <blockquote>
            Del cajón a tu mesa.<br>
            <em>Frescura que se disfruta.</em>
          </blockquote>

          <p>
            Verdulería Jaime
          </p>

        </div>

      </section>

      <section id="galeria" class="gallery-section">

        <div class="section-heading gallery-heading">

          <div>

            <p class="eyebrow">
              Conocé nuestro espacio
            </p>

            <h2>
              Así es Verdulería Jaime
            </h2>

          </div>

          <p class="gallery-description">
            Un espacio pensado para que encuentres variedad,
            frescura y todo lo que necesitás.
          </p>

        </div>

        <div class="gallery-grid">

          ${gallery.map((image, index) => `
            <figure
              class="gallery-item"
              data-image="/images/${image}"
            >

              <img
                src="/images/${image}"
                alt="Verdulería Jaime - imagen ${index + 1}"
                loading="lazy"
              >

              <div class="gallery-zoom">
                Ver
              </div>

            </figure>
          `).join('')}

        </div>

      </section>

      <section class="cta-section">

        <div class="cta-content">

          <p class="eyebrow">
            ¿Buscás algo en particular?
          </p>

          <h2>
            Escribinos y consultá.
          </h2>

          <p>
            Consultá disponibilidad, productos y cualquier duda
            directamente por WhatsApp.
          </p>

          <a
            class="button button-whatsapp large"
            href="${whatsappUrl()}"
            target="_blank"
            rel="noopener"
          >
            Hablar por WhatsApp
          </a>

        </div>

      </section>

      <section id="contacto" class="contact-section">

        <div class="contact-card">

          <div class="contact-block">

            <span class="contact-icon">
              ⌖
            </span>

            <div>

              <span class="contact-label">
                Encontranos
              </span>

              <strong>
                Ventura de la Vega 3885
              </strong>

              <span>
                CABA, Buenos Aires
              </span>

            </div>

            <a
              href="${MAPS_URL}"
              target="_blank"
              rel="noopener"
              class="contact-link"
            >
              Cómo llegar →
            </a>

          </div>

          <div class="contact-block">

            <span class="contact-icon">
              ◉
            </span>

            <div>

              <span class="contact-label">
                WhatsApp
              </span>

              <strong>
                11 3453-1575
              </strong>

              <span>
                Consultas y pedidos
              </span>

            </div>

            <a
              href="${whatsappUrl()}"
              target="_blank"
              rel="noopener"
              class="contact-link"
            >
              Escribir →
            </a>

          </div>

        </div>

      </section>

    </main>

    <footer class="footer">

      <div>
        <strong>
          Verdulería Jaime
        </strong>

        <span>
          Frescura que se nota.
        </span>
      </div>

      <p>
        Ventura de la Vega 3885 · CABA
      </p>

    </footer>

    <a
      class="floating-whatsapp"
      href="${whatsappUrl()}"
      target="_blank"
      rel="noopener"
      aria-label="Contactar por WhatsApp"
    >
      <span>
        WhatsApp
      </span>
    </a>

  </div>

  <div
    id="imageModal"
    class="image-modal"
    aria-hidden="true"
  >

    <button
      class="image-modal-close"
      type="button"
      aria-label="Cerrar imagen"
    >
      ×
    </button>

    <img
      id="modalImage"
      src=""
      alt="Imagen ampliada"
    >

  </div>
`

const modal = document.querySelector<HTMLDivElement>('#imageModal')!
const modalImage = document.querySelector<HTMLImageElement>('#modalImage')!
const closeButton = document.querySelector<HTMLButtonElement>('.image-modal-close')!

const openModal = (src: string, alt: string) => {
  modalImage.src = src
  modalImage.alt = alt
  modal.classList.add('active')
  modal.setAttribute('aria-hidden', 'false')
  document.body.classList.add('modal-open')
}

const closeModal = () => {
  modal.classList.remove('active')
  modal.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('modal-open')

  setTimeout(() => {
    if (!modal.classList.contains('active')) {
      modalImage.src = ''
    }
  }, 250)
}

document.querySelectorAll<HTMLElement>('.gallery-item').forEach((item) => {
  item.addEventListener('click', () => {
    const image = item.querySelector<HTMLImageElement>('img')

    if (!image) return

    openModal(
      image.src,
      image.alt
    )
  })
})

closeButton.addEventListener('click', closeModal)

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal()
  }
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal()
  }
})
