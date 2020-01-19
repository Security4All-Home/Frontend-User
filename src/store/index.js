import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartSensors: [],
    currentSensor: {},
    currUser: 0
  },
  getters: {
    getCurrentSensor: state => state.currentSensor,
    getSensorsInCart: state => state.cartSensors
  },
  mutations: {
    ADD_SENSOR: (state, product) => {
      state.cartSensors.push(product);
    },

    REMOVE_SENSOR: (state, index) => {
      state.cartSensors.splice(index, 1)
    }
  },
  actions: {
    addSensor: (context, product) => {
      context.commit('ADD_SENSOR', product);
    },

    removeSensor: (context, index) => {
      context.commit('REMOVE_SENSOR', index);
    },

    currentSensor: (context, product) => {
      context.commit('CURRENT_SENSOR', product);
    }
  },
  modules: {}
});