<template id="ranking">
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
        <div class="column is-6 is-offset-2 is-desktop">
          <input id="searchBar"
              icon="magnify" 
              class="input" 
              type="text" 
              placeholder="Search">
        </div>
        <div class="column is-1-desktop">
          <a id="changeTable" class="button" v-bind:style="isActive(1)" @click="view=1">
            <i class="fas fa-table"></i>
          </a>
        </div>
        <div class="column is-1-desktop">
         <!-- <router-link :to="{ name: 'rankingsCards' }">-->
            <a id="changeCard" class="button" @click="view=2" v-bind:style="isActive(2)" >
              <i class="fas fa-address-card"></i>
            </a>
         <!-- </router-link>-->
        </div>
      </div>
      <div v-if="view==1">
        <section>
          <b-table
          id="dataTable"
              :data="data"
              ref="table"
              :mobile-cards	="false"
              hoverable              
            :sort-icon="arrow-up"
            :sort-icon-size="is-small">


              <template slot-scope="props">
                  <b-table-column is-current-sort field="id" label="ID" width="1" centered numeric sortable>
                      {{ props.row.id }}
                  </b-table-column>

                  <b-table-column field="username" width="10" label="User" centered sortable>
                      {{ props.row.username }}
                  </b-table-column>

                  <b-table-column field="photo" width="20" label="" centered>
                     <img id="imageTable" :src='props.row.photo'> 
                  </b-table-column>

                  <b-table-column field="points" width="10" label="Points" numeric centered sortable>
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
       <div  class="level-item has-text-centered">
      
      <div id="cardView" v-if="view==2" class="columns is-multiline">
        <div class="column is-4-mobile is-6-tablet is-4-desktop"
          v-for="(person,i) in persons"
          :key="i">
        <div class="card" >
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image">
                  <img id="imageCard" :src='person.photo' alt="Placeholder image">
                  <div class="top-left" v-if="person.id == 1 || person.id == 2 || person.id == 3">
                    <i class="fas fa-medal"></i>
                    <!--{{person.id}}-->
                    </div>
                </figure>
              </div>
              <div class="media-content">
                <!--<p  class="title is-15">{{person.id}}</p>-->
                <p id="cardName" class="subtitle is-12">{{person.username}}</p>
                <p class="subtitle is-20"> {{person.points}} points</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
       </div>
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
Vue.use(Buefy)
export default {
  name: "Rankings",
   data() {
            const data = [
                { 'id': 1, 'username': 'Jessie Moores', 'photo': 'https://contigo.uol.com.br/orinoco/media/images/large/2019/10/15/paolla-oliveira-aparece-chorando-em-foto-como-vivi-guedes-na-web-1186472.jpg', 'points': 1005 },
                { 'id': 2, 'username': 'John Apted', 'photo': 'https://static1.purepeople.com.br/articles/5/27/69/65/@/3147374-pedro-scooby-tem-suposta-foto-intima-e-c-950x0-2.jpg', 'points': 903 },
                { 'id': 3, 'username': 'Tina Garcia', 'photo': 'https://conteudo.imguol.com.br/c/entretenimento/38/2019/07/30/duda-reis-e-acusada-de-mexer-no-corpo-em-foto-1564498888379_v2_450x600.png', 'points': 554 },
                { 'id': 4, 'username': 'Aaron Anthonyson', 'photo': 'https://cdn-ofuxico.akamaized.net/img/upload/noticias/2019/12/07/henry_365654_36.jpg', 'points': 186 },
                { 'id': 5, 'username': 'Anne Horton', 'photo': 'https://static1.purepeople.com.br/articles/7/27/94/37/@/3174773-thais-fersoza-chamou-atencao-por-foto-de-950x0-3.jpg', 'points': 55 }
            ]

            let persons = [
              {
                id:1,
                username: "Jessie Moores",
                photo: "https://contigo.uol.com.br/orinoco/media/images/large/2019/10/15/paolla-oliveira-aparece-chorando-em-foto-como-vivi-guedes-na-web-1186472.jpg",
                points: 1005
              },
              {
                id:2,
                username: "John Apted",
                photo: "https://static1.purepeople.com.br/articles/5/27/69/65/@/3147374-pedro-scooby-tem-suposta-foto-intima-e-c-950x0-2.jpg",
                points: 903
              },
              {
                id:3,
                username: "Tina Garcia",
                photo: "https://conteudo.imguol.com.br/c/entretenimento/38/2019/07/30/duda-reis-e-acusada-de-mexer-no-corpo-em-foto-1564498888379_v2_450x600.png",
                points: 554
              },
              {
                id:4,
                username: "Aaron Anthonyson",
                photo: "https://cdn-ofuxico.akamaized.net/img/upload/noticias/2019/12/07/henry_365654_36.jpg",
                points: 186
              },
              {
                id:5,
                username: "Anne Horton",
                photo: "https://static1.purepeople.com.br/articles/7/27/94/37/@/3174773-thais-fersoza-chamou-atencao-por-foto-de-950x0-3.jpg",
                points: 55
              }
            ]
            return {
                data,
                searchBar: "",
                filteredUsers: [],
                view: 1,
                persons

            }
   },
  /*data: function() {
    return {
      tempRanking: []
    };
  },*/
  created() {
    this.tempRanking = JSON.parse(localStorage.getItem('ranking'));
   // console.log(this.persons)
  },
  mounted() {
   /* for (let i = 0; i < this.tempRanking.length; i++) {
      //console.log(this.tempRanking[i].points)
    //points.sort(function(a, b){return a-b});
    //document.getElementById("demo").innerHTML = points;
      
    }*/
  },
  computed: {
    /*filteredUserFunc() {
      if (this.data) {  

        this.filteredUsers = this.data.filter(data => {
          return (
            data.info.username
              .toString()
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .indexOf(this.searchBar.toLowerCase()) >= 0
          );
        });

        return this.data.length;
      }
    }*/
  },
   methods: {
     isActive(n) {
      //console.log("entrei")
      return ((n==this.view)?{"background-color":"#F2F2F2"}:{"background-color":"#FFBF2F"})
    }
   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cardName {
  font-weight: bold;
}
#cardPoints {
  color: black !important;
}
.card {
  width: 800px;
  height: 100px;
  size: 1px;
}
.is-active {
  color: #FFBF2F !important;
}
.top-left {
  position: absolute;
  top: -3px;
  left: 2px;
  color: #FFBF2F;
  
}
#cardView {
  align-self: center !important;
  align-items: center !important;
  margin-left: 150px;
  margin-right: 150px;
}
#imageCard {  
  width:60px;
  height:60px;
  object-fit:cover;
  border-radius: 15%;
}
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
#dataTable{
  width: 800px;
  margin-left: auto;
  margin-right: auto;  
  align-self: center !important;
  align-items: center !important;
}
#tableRanking{
  align-self: center !important;
  align-items: center !important;
}
</style>