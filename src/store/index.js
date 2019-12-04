import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ranking: [
      {
        id: 1,
        name: "Jessie",
        photo: "https://contigo.uol.com.br/orinoco/media/images/large/2019/10/15/paolla-oliveira-aparece-chorando-em-foto-como-vivi-guedes-na-web-1186472.jpg",
        points: 2010
      },
      {
        id: 2,
        name: "John",
        photo: "https://static1.purepeople.com.br/articles/5/27/69/65/@/3147374-pedro-scooby-tem-suposta-foto-intima-e-c-950x0-2.jpg",
        points: 1550
      },
      {
        id: 3,
        name: "Tina",
        photo: "https://conteudo.imguol.com.br/c/entretenimento/38/2019/07/30/duda-reis-e-acusada-de-mexer-no-corpo-em-foto-1564498888379_v2_450x600.png",
        points: 520
      },
      {
        id: 4,
        name: "Aaron",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbSBvQQubxvFZ3hnf2NPLGmTZGnGRC9b4AiV3xJuNZ6YdyJc_L&s",
        points: 1105
      },
      {
        id: 5,
        name: "Anne",
        photo: "https://static1.purepeople.com.br/articles/7/27/94/37/@/3174773-thais-fersoza-chamou-atencao-por-foto-de-950x0-3.jpg",
        points: 55
      }
    ]
  },
  mutations: {
    SET_RANKING(state, payload) {
      state.ranking.push(payload);
    }
  },
  actions: {
    set_ranking(context, payload) {
      context.commit("SET_RANKING", payload);
    }
  },
  modules: {

  },
  getters: {
    ranking(state) {
      return state.ranking;
    }
  }
});
