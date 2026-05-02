export const courses = [
  {
    id: 1,
    name: "Desarrollo Web",
    description: "Construye aplicaciones modernas con HTML, CSS, JavaScript y frameworks como React o Vue.",
    emoji: "🌐",
    color: "from-cyan-500 to-blue-600",
    badge: "Popular",
  },
  {
    id: 2,
    name: "Análisis de Datos",
    description: "Transforma datos en decisiones con Python, Pandas, visualización y estadística aplicada.",
    emoji: "📊",
    color: "from-violet-500 to-purple-700",
    badge: "Tendencia",
  },
  {
    id: 4,
    name: "Inteligencia Artificial",
    description: "Diseña modelos de machine learning y deep learning para resolver problemas del mundo real.",
    emoji: "🤖",
    color: "from-amber-400 to-orange-600",
    badge: "Nuevo",
  }
];

export const testimonials= [
  {
    id: 1,
    name: "Sofía Ramírez",
    role: "Estudiante de Desarrollo Web",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Sofia&backgroundColor=b6e3f4",
    comment: "Los cursos son increíbles. Aprendí React y Node.js desde cero y en 3 meses ya tenía mi primer proyecto freelance. La calidad del contenido supera a muchas plataformas de pago.",
    rating: 5,
    course: "Desarrollo Web",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    role: "Analista de Datos Jr.",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Carlos&backgroundColor=ffd5dc",
    comment: "Gracias a la especialización de Análisis de Datos conseguí trabajo en menos de 2 meses. Los proyectos prácticos hacen toda la diferencia. Totalmente recomendado.",
    rating: 5,
    course: "Análisis de Datos",
    color: "from-violet-500 to-purple-700",
  },
  {
    id: 3,
    name: "Valeria Torres",
    role: "Estudiante de Ciberseguridad",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Valeria&backgroundColor=c0aede",
    comment: "El curso de Ciberseguridad es muy completo. Desde ethical hacking hasta análisis forense. Los instructores explican con ejemplos reales que te enganchan desde el primer día.",
    rating: 5,
    course: "Ciberseguridad",
    color: "from-rose-500 to-red-700",
  },
  
];

export const INITIAL_MODULES = [
  {
    id: 1,
    number: 1,
    title: 'Fundamentos de la Arquitectura Moderna',
    description: 'Introducción al enfoque nativo de la nube y a los patrones de escalabilidad.',
    lessons: [
      {
        id: 1,
        title: 'Introducción a los Sistemas Distribuidos',
        status: 'uploaded',
        duration: '08:24',
        modified: 'Modificado hace 2 horas',
      },
      {
        id: 2,
        title: 'Paradigmas de Latencia Frente a Rendimiento',
        status: 'uploading',
        progress: '65%',
        estimated: 'Se estima que queda 1 minuto',
      },
    ],
  },
  {
    id: 2,
    number: 2,
    title: 'Análisis en profundidad de los microservicios',
    description: 'Docker, Kubernetes y estrategias de orquestación.',
    lessons: [
      {
        id: 3,
        title: 'Containerización con Docker',
        status: 'uploaded',
        duration: '15:48',
        modified: 'Modificado ayer',
      },
    ],
  },
]