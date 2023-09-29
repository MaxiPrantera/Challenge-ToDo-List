import type { Note } from "./types";

const api = {
    notes: {
      list: (): Note[] => [
        {
          id: "nota",
          title: "Nota de prueba",
          content: "Contenido de prueba",
          lastEdited: "2021-09-09",
          categories: ["prueba"],
          archived: false
        },{
        id: "nota 2",
        title: "Nota de prueba 2",
        content: "Contenido de prueba",
        lastEdited: "2022-12-09",
        categories: ["prueba"],
        archived: false
        },
      ],
    },
  };

export default api;