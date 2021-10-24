const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Iniciando com react",
      lessons: [
        { id: 1, title: "Primeira aula" },
        { id: 2, title: "Segunda aula" },
        { id: 3, title: "Terceira aula" },
      ],
    },
    {
      id: 2,
      title: "Avancado de react",
      lessons: [
        { id: 1, title: "Contest API" },
        { id: 2, title: "REDUX" },
        { id: 3, title: "REDUX SAGA" },
      ],
    },
  ],
};

export default function course(state = INITIAL_STATE, action) {
  if (action.type === "TOGGLE_LESSON") {
    return {
      ...state,
      activeModule: action.module,
      activeLesson: action.lesson,
    };
  }
  return state;
}
