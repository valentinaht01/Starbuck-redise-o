const { createApp, ref, computed } = Vue

createApp({
  setup() {
    const bebidas = ref([
      {
        id: 1,
        subtitulo: 'STARBUCKS ES...',
        tagline: 'AMOR AL CAFÉ',
        tipo: 'FRAPPUCCINO',
        nombre: 'Caramel Frappuccino',
        precio: '14.000$',
        envio: 'ENVÍO GRATIS',
        imagen: 'assets/caramel frappuccino.png',
        colorPanel: '#0f5238'
      },
      {
        id: 2,
        subtitulo: 'REFRESCANTE Y ÚNICO',
        tagline: 'SABOR A VERANO',
        tipo: 'REFRESHER',
        nombre: 'Strawberry Açaí',
        precio: '12.500$',
        envio: 'ENVÍO GRATIS',
        imagen: 'assets/_.png',
        colorPanel: '#801835'
      },
      {
        id: 3,
        subtitulo: 'TEXTURA SUAVE',
        tagline: 'CAFÉ CLÁSICO',
        tipo: 'BEBIDA CALIENTE',
        nombre: 'Vaso Clásico',
        precio: '11.000$',
        envio: 'ENVÍO GRATIS',
        imagen: 'assets/baso.png',
        colorPanel: '#0e4d31'
      },
      {
        id: 4,
        subtitulo: 'SABOR INTENSO',
        tagline: 'FRAPPE ESPECIAL',
        tipo: 'CAFÉ FRÍO',
        nombre: 'Frappuccino Botella',
        precio: '15.000$',
        envio: 'ENVÍO GRATIS',
        imagen: 'assets/frappuccino.png',
        colorPanel: '#3d2314'
      }
    ])

    const indiceSeleccionado = ref(0)
    const bebidaActual = computed(() => bebidas.value[indiceSeleccionado.value])

    const bebidaSiguiente = () => {
      indiceSeleccionado.value = (indiceSeleccionado.value + 1) % bebidas.value.length
    }

    const bebidaAnterior = () => {
      indiceSeleccionado.value = (indiceSeleccionado.value - 1 + bebidas.value.length) % bebidas.value.length
    }

    return {
      bebidas,
      indiceSeleccionado,
      bebidaActual,
      bebidaSiguiente,
      bebidaAnterior
    }
  }
}).mount('#app')

// URL base de tu backend Express
const API_URL = 'http://localhost:3000/api/menu';

// Función para obtener y renderizar el menú desde la base de datos
async function loadMenu(category = '') {
  try {
    const url = category ? `${API_URL}?category=${category}` : API_URL;
    const response = await fetch(url);
    const result = await response.json();

    if (result.success) {
      renderProducts(result.data);
    }
  } catch (error) {
    console.error('Error al cargar el menú:', error);
  }
}

// Función para renderizar en el DOM
function renderProducts(products) {
  const container = document.getElementById('products-grid');
  if (!container) return;

  container.innerHTML = products.map(product => `
    <div class="product-card">
      <div class="product-img-wrapper">
        <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=300" alt="${product.name}">
      </div>
      <div class="product-info">
        <span class="product-badge">${product.category}</span>
        <h3>${product.name}</h3>
        <p>Deliciosa opción preparada con la mejor calidad Starbucks.</p>
        <div class="product-footer">
          <span class="price">$${product.price.toFixed(2)}</span>
          <button class="btn-add">Agregar</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Cargar el menú completo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  loadMenu();
});