export const menuItems = [
  {
    label: "Inicio",
    path: "/",
  },
  {
    label: "Nosotros",
    path: "/nosotros",
  },
  {
    label: "Servicios",
    path: "/servicios",
  },
  {
    label: "Cotizar",
    path: "/cotizar",
  },
];

export const servicesData = [
  {
    slug: "vrf",
    banner: {
      image: "/images/vecteezy_compressors-air-conditioners-on-the-roof-of-the-office_17020864.jpg",
      title: "Especialistas en",
      subtitle: "Sistemas VRF",
      button: {
        label: "COTIZAR",
        link: "https://wa.me/51931194550",
        variant: "primary",
      },
    },
    mainContent: {
      title: "Sistemas VRF de Alta Eficiencia",
      paragraphs: [
        "Lorem ipsum dolor sit amet...",
        "Lorem ipsum dolor sit amet...",
      ],
      image: "/images/vecteezy_compressors-air-conditioners-on-the-roof-of-the-office_17020864.jpg",
      buttons: [
        {
          label: "CONTÁCTENOS",
          link: "https://wa.me/51931194550",
          variant: "desktop",
        },
      ],
    },
    logosTitle: "Experiencia VRF",
    logosButtons: [
      {
        label: "CONTÁCTENOS",
        link: "https://wa.me/51931194550",
        variant: "desktop",
      },
    ],
    facility: {
      title: "Más de 20 años en climatización VRF",
      paragraphs: ["Lorem ipsum...", "Lorem ipsum..."],
      image: "/images/vecteezy_compressors-air-conditioners-on-the-roof-of-the-office_17020864.jpg",
      buttons: [
        {
          label: "CONTÁCTENOS",
          link: "https://wa.me/51931194550",
          variant: "desktop",
        },
      ],
    },
    categories: [
      {
        title: "Instalación VRF",
        subtitle: "Climatización avanzada",
        image: "/images/vecteezy_compressors-air-conditioners-on-the-roof-of-the-office_17020864.jpg",
        link: "#",
      },
    ],
  },
  {
    slug: "chiller",
    banner: {
      image: "https://images.unsplash.com/photo-1581093588401",
      title: "Especialistas en",
      subtitle: "Sistemas Chiller",
      button: {
        label: "COTIZAR",
        link: "https://wa.me/51931194550",
        variant: "primary",
      },
    },
    mainContent: {
      title: "Sistemas Chiller Industriales",
      paragraphs: ["Lorem ipsum...", "Lorem ipsum..."],
      image: "https://images.unsplash.com/photo-1581091870622",
      buttons: [
        {
          label: "CONTÁCTENOS",
          link: "https://wa.me/51931194550",
          variant: "desktop",
        },
      ],
    },
    logosTitle: "Experiencia en Chiller",
    logosButtons: [
      {
        label: "CONTÁCTENOS",
        link: "https://wa.me/51931194550",
        variant: "desktop",
      },
    ],
    facility: {
      title: "Especialistas en sistemas Chiller",
      paragraphs: ["Lorem ipsum...", "Lorem ipsum..."],
      image: "https://images.unsplash.com/photo-1581092334472",
      buttons: [
        {
          label: "CONTÁCTENOS",
          link: "https://wa.me/51931194550",
          variant: "desktop",
        },
      ],
    },
    categories: [],
  },
] as const;