export const TEAM_MEMBERS = [
  {
    id: "1",
    name: "Enrique Costabal G.",
    profileImg: "/assets/teammembers/HS_EC.jpg",
    cargo: "CTO & Co-Founder",
    linkedinUrl: "https://www.linkedin.com/in/enrique-costabal/",
  },
  {
    id: "2",
    name: "José Ignacio Risso D.",
    profileImg: "/assets/teammembers/HS_JR.jpg",
    cargo: "Head of Sales",
    linkedinUrl:
      "https://www.linkedin.com/in/jose-ignacio-risso-delgado-b6a024107/",
  },
  {
    id: "3",
    name: "Katya Marincovich S.",
    profileImg: "/assets/teammembers/HS_KM.jpg",
    cargo: "CXO & Co-Founder",
    linkedinUrl: "https://www.linkedin.com/in/katya-marincovich-schneider/",
  },
  {
    id: "4",
    name: "Nicolás Morales A.",
    profileImg: "/assets/teammembers/HS_NM.jpg",
    cargo: "CLO & Co-Founder",
    linkedinUrl:
      "https://www.linkedin.com/in/nicol%C3%A1s-morales-alcalde-bb9472209/",
  },
  {
    id: "5",
    name: "Paulina Lobos C.",
    profileImg: "/assets/teammembers/HS_UK.jpg",
    cargo: "Sales Development Representative",
    linkedinUrl: "https://www.linkedin.com/in/paulina-lobos-concha-49b45610b/",
  },
];

// Obtener miembros del equipo ordenados alfabéticamente por nombre
export const getTeamMembersSorted = () => {
  return [...TEAM_MEMBERS].sort((a, b) =>
    a.name.localeCompare(b.name, "es", { sensitivity: "base" })
  );
};
