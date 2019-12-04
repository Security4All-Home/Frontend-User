<template>
    <div class="rankings">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    <div class="container" id="tableRanking">

      <div class="columns">
        <div class="column is-4 is-offset-0">
          <input id="searchBar" class="input" type="text" placeholder="Search">
        </div>
        <div class="column">
          <button class="button is-primary">
            <i class="fas fa-search"></i>
          </button>
        </div>
        <div class="column is-1 is-offset-5">
          <button id="changeTable" class="button is-secondary">
            <i class="fas fa-table"></i>
          </button>
        </div>
        <div class="column ">
          <button id="changeCard" class="button is-primary">
            <i class="fas fa-th-large"></i>
          </button>
        </div>
      </div>
        <section>
          <b-table
              :data="data"
              ref="table"
              :mobile-cards	="false"
              hoverable>

              <template slot-scope="props">
                  <b-table-column  field="id" label="ID" width="0.5" centered numeric sortable>
                      {{ props.row.id }}
                  </b-table-column>

                  <b-table-column field="username" width="10" label="User" centered sortable>
                      {{ props.row.username }}
                  </b-table-column>

                  <b-table-column field="photo" width="15" label="" centered sortable>
                     <img id="imageTable" :src='props.row.photo'> 
                  </b-table-column>

                  <b-table-column field="points" width="5" label="Points" numeric centered sortable>
                      <span>
                          {{ props.row.points }}
                      </span>
                  </b-table-column>
              </template>

              <template slot="empty">
                  <section class="section">
                      <div class="content has-text-grey has-text-centered">
                          <p>
                              <b-icon
                                  icon="emoticon-sad"
                                  size="is-large">
                              </b-icon>
                          </p>
                          <p>Nothing here.</p>
                      </div>
                  </section>
              </template>
          </b-table>
      </section>
    </div>
    </div>
</template>

<script>
//import { mapState } from "vuex";import Vue from 'vue'
//import { Table, Input } from 'buefy'
//import 'buefy/dist/buefy.css'
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
//import
import store from '../store/index.js'

Vue.use(Buefy, store)


export default {
  name: "Rankings",
   data() {
            const data = [
                { 'id': 1, 'username': 'Jessie', 'photo': 'https://contigo.uol.com.br/orinoco/media/images/large/2019/10/15/paolla-oliveira-aparece-chorando-em-foto-como-vivi-guedes-na-web-1186472.jpg', 'points': 1005 },
                { 'id': 2, 'username': 'John', 'photo': 'https://static1.purepeople.com.br/articles/5/27/69/65/@/3147374-pedro-scooby-tem-suposta-foto-intima-e-c-950x0-2.jpg', 'points': 903 },
                { 'id': 3, 'username': 'Tina', 'photo': 'https://conteudo.imguol.com.br/c/entretenimento/38/2019/07/30/duda-reis-e-acusada-de-mexer-no-corpo-em-foto-1564498888379_v2_450x600.png', 'points': 554 },
                { 'id': 4, 'username': 'Aaron', 'photo': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbSBvQQubxvFZ3hnf2NPLGmTZGnGRC9b4AiV3xJuNZ6YdyJc_L&s', 'points': 186 },
                { 'id': 5, 'username': 'Anne', 'photo': 'https://static1.purepeople.com.br/articles/7/27/94/37/@/3174773-thais-fersoza-chamou-atencao-por-foto-de-950x0-3.jpg', 'points': 55 }
            ]
            return {
                data
            }
   },
  /*data: function() {
    return {
      tempRanking: []
    };
  },*/
  created() {
    this.tempRanking = this.$store.getters.ranking;
    //console.log(this.tempRanking)
  },
  mounted() {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*#changeView{
  margin-left: 650px;
  margin-bottom: 100px;
}
#searchBar{
  resize: horizontal;
  width: 300px;
  margin-left: 250px;
}*/
#imageTable{
  /*width: 10%;
  height: auto;*/  
  width:50px;
  height:50px;
  object-fit:cover;
  border-radius:50%;
}
table{
  margin-left: auto;
  margin-right: auto;
}
#tableRanking{
  align-self: center !important;
  align-items: center !important;
}

</style>
