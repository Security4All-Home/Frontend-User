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
    getSensorsInCart: state => state.cartSensors,
    getUserId(state){
      return state.currUser
    },
  },
  mutations: {
    ADD_SENSOR: (state, product) => {
      state.cartSensors.push(product);
    },

    REMOVE_SENSOR: (state, index) => {
      state.cartSensors.splice(index, 1)
    },

    SET_USER_ID: (state, index) => {
      state.currUser = index
    },
    LOG_OUT: (state) => {
      state.currUser = 0
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
    },
    set_user_id: (context, id) => {
      context.commit('SET_USER_ID', id);
    },
    log_out: (context) => {
      context.commit('LOG_OUT');
    }
  },
  modules: {}
});