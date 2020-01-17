<template id="ranking2">
  <div class="rankings">
    <br />
    <br />
    <div class="container" id="tableRanking">
      <div>
        <section>
          <b-table
            id="dataTable"
            :data="data"
            :columns="columns"
            ref="table"
            :mobile-cards="false"
            :hoverable="true"
          >
            <template id="itemsTable" slot-scope="props">
              <b-table-column
                style="text-align:center"
                is-current-sort
                field="id"
                label="ID"
                width="1"
                centered
                numeric
              >{{ props.row.id }}</b-table-column>

              <b-table-column
                id="usernameItem"
                style="text-align:left !important"
                field="sensor"
                label="Sensor"
                width="15"
                centered
              >{{ props.row.sensor }}</b-table-column>

              <b-table-column
                style="text-align:left !important"
                field="active"
                label="Active"
                width="10"
                numeric
                centered
              >
              <b-switch type="is-success" :value="props.row.active"></b-switch>
              <!--<div class="field" v-if="props.row.active == false">
                <b-switch :value="props.row.active">Default</b-switch>
              </div>
              <div v-if="props.row.active == true" class="field">
                <b-switch :value="props.row.active">Default</b-switch>
              </div>-->
              </b-table-column>
              
              
            </template>

            <template slot="empty">
              <section class="section">
                <div class="content has-text-grey has-text-centered">
                  <p>
                    <b-icon icon="emoticon-sad" size="is-large"></b-icon>
                  </p>
                  <p>Nothing here.</p>
                </div>
              </section>
            </template>
          </b-table>
        </section>
      </div>
    </div>

    <button id="buttonSOS" class="button is-danger  is-large"><i class="fas fa-phone-square"></i></button>
    <br/>
  </div>
</template>

<script>
//import { mapState } from "vuex";import Vue from 'vue'
//import { Table, Input } from 'buefy'
//import 'buefy/dist/buefy.css'
import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy);
export default {
  name: "Rankings",
  data() {
    const data = [
      {
        id: 1,
        sensor: "Movement Sensor",
        active: true
      },
      {
        id: 2,
        sensor: "Fire Sensor",
        active: false
      },
      {
        id: 3,
        sensor: "Sensor #12",
        active: true
      },
      {
        id: 4,
        sensor: "Fire Sensor #2",
        active: true
      },
      {
        id: 5,
        sensor: "Alarm",
        active: false
      }
    ];

    let persons = [
      {
        id: 1,
        username: "Jessie Moores",
        photo:
          "https://contigo.uol.com.br/orinoco/media/images/large/2019/10/15/paolla-oliveira-aparece-chorando-em-foto-como-vivi-guedes-na-web-1186472.jpg",
        points: 1005
      },
      {
        id: 2,
        username: "John Apted",
        photo:
          "https://static1.purepeople.com.br/articles/5/27/69/65/@/3147374-pedro-scooby-tem-suposta-foto-intima-e-c-950x0-2.jpg",
        points: 903
      },
      {
        id: 3,
        username: "Tina Garcia",
        photo:
          "https://conteudo.imguol.com.br/c/entretenimento/38/2019/07/30/duda-reis-e-acusada-de-mexer-no-corpo-em-foto-1564498888379_v2_450x600.png",
        points: 554
      },
      {
        id: 4,
        username: "Aaron Anthonyson",
        photo:
          "https://cdn-ofuxico.akamaized.net/img/upload/noticias/2019/12/07/henry_365654_36.jpg",
        points: 186
      },
      {
        id: 5,
        username: "Anne Horton",
        photo:
          "https://static1.purepeople.com.br/articles/7/27/94/37/@/3174773-thais-fersoza-chamou-atencao-por-foto-de-950x0-3.jpg",
        points: 155
      }
    ];
    let loggedUser = {
      id: 54,
      username: "James Sully",
      points: 33
    }
    return {
      data,
      selected: data[0],
      searchBar: "",
      filteredUsers: [],
      view: 1,
      persons,
      loggedUser
    };
  },
  /*data: function() {
    return {
      tempRanking: []
    };
  },*/
  created() {
    

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
  methods: {}
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
  width: 350px;
  height: 100px;
  size: 1px;
  border: #0a1f3c;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
}
.card p {
  color: #0a1f3c;
}
.is-active {
  color: #ffbf2f !important;
}
.top-left {
  position: absolute;
  top: -12px;
  left: -7px;
  width: 24px !important;
}

#etc {
  margin-left: auto;
  margin-right: auto;
  align-self: center !important;
  align-items: center !important;
}

#numberOne {
  color: #ffbf2f;
}
#numberTwo {
  color: #6d6d73;
}
#numberThree {
  color: #872f00;
}
#allNumber {
  color: white;
}
#userLogged {
  color: #0A1F3C !important;
}
#cardView {
  align-self: center !important;
  align-items: center !important;
  margin-left: 150px;
  margin-right: 150px;
}
#imageCard {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 15%;
}
#cardName {
  vertical-align: middle !important;
  text-align: center;
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
#dataTable {
  width: 550px;
  margin-left: auto;
  margin-right: auto;
  align-self: center !important;
  margin-top: 30px !important;
  vertical-align: middle !important;
}
#itemsTable {
  vertical-align: middle !important;
}
#itemsTable:hover {
  background-color: yellow;
}

#tableRanking {
  align-self: left !important;
  vertical-align: middle !important;
}

.is-selected {
  background-color: #ffbf2f !important;
  color: #ffbf2f;
}


#selected {
  background-color: #ffbf2f !important;
  color: #ffbf2f !important;
}
#usernameItem {
  align-items: left !important;
  align-self: left !important;
  align-content: left !important;
  text-align: left !important;
}

#buttonSOS {
  margin-left: 95%;
  margin-top: 16%;
  position: absolute;
  border-radius: 50%;
}
</style>