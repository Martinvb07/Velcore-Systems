// Data models (pure data, no UI)
export const stats = [
  { number: '5+', label: 'Años de Experiencia' },
  { number: '50+', label: 'Proyectos Completados' },
  { number: '100%', label: 'Satisfacción' }
]

export const services = [
  {
    id: 'dev-software',
    icon: 'Code',
    title: 'Desarrollo de Software a Medida',
    description: 'Creamos soluciones tecnológicas personalizadas que se adaptan perfectamente a las necesidades de tu negocio',
    tags: ['Web', 'Móvil', 'Desktop']
  },
  {
    id: 'saas',
    icon: 'Cloud',
    title: 'Sistemas SaaS',
    description: 'Desarrollamos plataformas en la nube escalables y seguras para que gestiones tu negocio desde cualquier lugar',
    tags: ['Cloud', 'Escalable', '24/7']
  },
  {
    id: 'uiux',
    icon: 'Palette',
    title: 'Diseño UI/UX',
    description: 'Diseñamos interfaces intuitivas y atractivas que mejoran la experiencia de tus usuarios',
    tags: ['Moderno', 'Responsive', 'Intuitivo']
  },
  {
    id: 'consultoria',
    icon: 'Wrench',
    title: 'Consultoría Tecnológica',
    description: 'Te asesoramos en la transformación digital de tu empresa con las mejores prácticas del mercado',
    tags: ['Estrategia', 'Innovación', 'Optimización']
  },
  {
    id: 'apps',
    icon: 'Smartphone',
    title: 'Aplicaciones Móviles',
    description: 'Desarrollamos apps nativas y multiplataforma para iOS y Android con la mejor performance',
    tags: ['iOS', 'Android', 'React Native']
  },
  {
    id: 'seguridad',
    icon: 'Shield',
    title: 'Seguridad y Mantenimiento',
    description: 'Garantizamos la seguridad y el correcto funcionamiento de tus sistemas con soporte continuo',
    tags: ['Seguro', 'Confiable', 'Soporte 24/7']
  }
]

export const products = [
  {
    id: 'mesoft',
    name: 'Mesoft',
    tagline: 'Sistema de Gestión para Restaurantes',
    badge: 'SaaS',
    description: 'Sistema web completo para optimizar la operación de tu restaurante. Gestiona pedidos, meseros, inventario y reportes desde una sola plataforma en línea, disponible 24/7.',
    features: [
      { icon: 'ShoppingCart', text: 'Gestión de pedidos en tiempo real' },
      { icon: 'Users', text: 'Control de meseros y mesas' },
      { icon: 'Package', text: 'Inventario inteligente' },
      { icon: 'BarChart3', text: 'Reportes y estadísticas detalladas' },
      { icon: 'Cloud', text: 'Multi-usuario y multi-restaurante' },
      { icon: 'Smartphone', text: 'Acceso desde cualquier dispositivo' }
    ],
    priceBasic: '60.000',
    pricePro: '100.000'
  }
]
