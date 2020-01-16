<template id="ranking2">
  <div class="rankings">
    <br />
    <br />
    <br />
    <h1 id="titleRanking" class="title is-1">Ranking</h1>
    <div class="container" id="tableRanking">
      <div class="columns">
        <div id="columnTable" class="column is-offset-4 is-5-desktop is-15-mobile is-12-tablet">
          <section>
            <b-table
              id="dataTable"
              v-for="(user, i) in filteredUsers"
              :key="i"
              :columns="columns"
              :selected.sync="selected"
              ref="table"
              :mobile-cards="false"
              :hoverable="true"
            >
              <b-tab-item
                label="Selected"
                id="selected"
              >
                <pre>{{ selected }}</pre>
              </b-tab-item>
              <template id="itemsTable" slot-scope="props">
                <b-table-column
                  style="text-align:center"
                  is-current-sort
                  field="id"
                  width="1"
                  centered
                  numeric
                >{{ user.idUser }}</b-table-column>

                <b-table-column
                  id="usernameItem"
                  style="text-align:left !important"
                  field="username"
                  width="15"
                  centered
                >{{ user.name }}</b-table-column>

                <b-table-column
                  style="text-align:left !important"
                  field="points"
                  width="10"
                  numeric
                  centered
                >
                  <span id="numberOne" v-if="props.row.id == 1">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fas fa-medal"></i>
                  </span>
                  <span id="numberTwo" v-if="props.row.id == 2">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fas fa-medal"></i>
                  </span>
                  <span id="numberThree" v-if="props.row.id == 3">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fas fa-medal"></i>
                  </span>
                  <span
                    id="allNumber"
                    v-if="props.row.id != loggedUser.id && props.row.id != 3 && props.row.id != 2 && props.row.id != 1"
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fas fa-medal"></i>
                  </span>
                  <span>{{ user.points }}</span>
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
        <h1 id="etc">...</h1>
      </div>
    </div>
  </div>
</template>

<script>
//import { mapState } from "vuex";import Vue from 'vue'
//import { Table, Input } from 'buefy'
//import 'buefy/dist/buefy.css'

import { getAllUsers } from '../API/apiUser';


export default {
  name: "Rankings",
  data() {

    const data = [
      {
        id: 1,
        username: "Jessie Moores",
        points: 1005
      },
      {
        id: 2,
        username: "John Apted",
        points: 903
      },
      {
        id: 3,
        username: "Tina Garcia",
        points: 554
      },
      {
        id: 4,
        username: "Aaron Anthonyson",
        points: 186
      },
      {
        id: 5,
        username: "Anne Horton",
        points: 155
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
      loggedUser,
      users:[]
    };
  },
  /*data: function() {
    return {
      tempRanking: []
    };
  },*/
  created() {

      getAllUsers().then(response => {
      this.users = response.data.data;
      /* eslint-disable */
      console.log(this.users)
    });
    let tempUsers

    this.filteredUsers = this.filteredUsers.sort((b, a) => 
      a.points > b.points ? 1 : b.points > a.points ? -1 : 0
    );

    

    



    let loggedUser = {
      id: 54,
      username: "James Sully",
      points: 33
    };
    this.tempRanking = JSON.parse(localStorage.getItem("ranking"));
    // console.log(this.persons)
    this.data.push({
      id: "...",
      username: "...",
      points: "..."
    });

    this.data.push({
      id: loggedUser.id,
      username: loggedUser.username,
      photo: loggedUser.photo,
      points: loggedUser.points
    });
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

#columnTable {
  align-content: center !important;
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
  color: #0a1f3c !important;
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
  /*width: 550px;
  margin-left: auto;
  margin-right: auto;
  align-self: center !important;
  margin-top: 30px !important;*/
  vertical-align: middle !important;
}
#itemsTable {
  vertical-align: middle !important;
}
#itemsTable:hover {
  background-color: yellow;
}

/*#tableRanking {
  align-self: left !important;
  vertical-align: middle !important;
}*/

.is-selected {
  background-color: #ffbf2f !important;
  color: #ffbf2f;
}

#titleRanking {
  color: #0a1f3c;
  text-align: center;
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
</style>