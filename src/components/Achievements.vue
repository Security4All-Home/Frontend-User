<template id="achievement">
  <div class="achievements">
    <br />
    <br />
    <br />
    <h1 id="titleRanking" class="title is-1-desktop is-8-tablet is-12-mobile" >Achievements</h1>
    <br />
    <br />
    <div class="container" id="tableRanking">
      <div class="columns">
        <div class="column is-offset-2 is-8">
        <!--<progress id="progressBarLarge" class="progress is-large is-12-mobile" :value="loggedUser.percentWon" max="100" show-value>{{loggedUser.percentWon}}</progress>
        <p id="totalProgress">3/5</p>-->

          <b-progress id="progressBar" :value="loggedUser.percentWon" size="is-large" show-value>
              {{achievements.pointsWon}} / {{achievements.length}}
          </b-progress>
        </div>
      </div>
      
    <br />
      <div class="level-item has-text-centered">
        <div id="cardView" class="columns is-multiline">
          <div
          id="cardHover"          
            class="column is-11-mobile is-6-tablet is-4-desktop is-centered"
            v-for="(achievement,i) in achievements"
            :key="i"
          >
            <div class="card" id="cardPerson">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image">
                      <img id="imageCard" :src="achievement.photo" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div class="media-content">
                    <!--<p  class="title is-15">{{person.id}}</p>-->
                    <p id="cardName" class="subtitle is-12">{{achievement.achievement}}</p>
                    <p id="cardProgress" class="subtitle is-20">{{achievement.pointsWon}}/{{achievement.totalPoints}}</p>
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
import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy);
export default {
  name: "Rankings",
  data() {

    let loggedUser = {
      id: 54,
      username: "James Sully",
      points: 33,
      achievements: [
        {
          id: 1,
          progress: 10
        },
        {
          id: 2,
          progress: 3
        },
        {
          id: 3,
          progress: 10
        },
        {
          id: 4,
          progress: 10
        }
      ],
      percentWon: 60
    }

    let achievements = [
      {
        id: 1,
        achievement: "I'm getting secured!",
        photo:
          "https://pbs.twimg.com/media/ENwUVtvWkAA3k5x?format=png&name=360x360",
        totalPoints: 10,
        pointsWon: 0,
        percent: 0,
        type: "silver"
      },
      {
        id: 2,
        achievement: "Logged In 10 Times!",
        photo:
          "https://pbs.twimg.com/media/ENwUVtvWkAA3k5x?format=png&name=360x360",
        totalPoints: 10,
        pointsWon: 0,
        percent: 0,
        type: "silver"
      },
      {
        id: 3,
        achievement: "I'm Registered!",
        photo:
          "https://pbs.twimg.com/media/ENwUVtvWkAA3k5x?format=png&name=360x360",
        totalPoints: 10,
        pointsWon: 0,
        percent: 0,
        type: "gold"
      },
      {
        id: 4,
        achievement: "I have extra security!",
        photo:
          "https://pbs.twimg.com/media/ENwUVtvWkAA3k5x?format=png&name=360x360",
        totalPoints: 10,
        pointsWon: 0,
        percent: 0,
        type: "bronze"
      },
      {
        id: 5,
        achievement: "I'm In! ",
        photo:
          "https://pbs.twimg.com/media/ENwUVtvWkAA3k5x?format=png&name=360x360",
        totalPoints: 10,
        pointsWon: 0,
        percent: 0,
        type: "gold"
      }
    ];
    return {
      searchBar: "",
      filteredUsers: [],
      view: 1,
      achievements,
      loggedUser
    };
  },
  /*data: function() {
    return {
      tempRanking: []
    };
  },*/
  created() {
    let temp = 0
    for (let j = 0; j < this.achievements.length; j++) {
      for (let i = 0; i < this.loggedUser.achievements.length; i++) {
        if(this.loggedUser.achievements[i].id == this.achievements[j].id){
           // this.achievements[j].pointsWon = this.loggedUser.achievements[i].progress
            this.achievements[j].percent = this.loggedUser.achievements[i].progress * 10
            if(this.loggedUser.achievements[i].progress == 10){
              temp = temp + 1
            if(this.achievements[j].type == "gold"){
              this.achievements[j].photo = "https://image.flaticon.com/icons/svg/1152/1152810.svg"
            }
            if(this.achievements[j].type == "bronze"){
            this.achievements[j].photo = "https://pbs.twimg.com/media/ENmx441UcAAGY6J?format=png&name=small"
            }
            if(this.achievements[j].type == "silver"){
              this.achievements[j].photo = "https://pbs.twimg.com/media/ENmx441U0AAv-KU?format=png&name=120x120"
            }
            this.achievements.pointsWon = temp
          }
        }
      }
    }


    this.tempRanking = JSON.parse(localStorage.getItem("ranking"));
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
      return n == this.view
        ? { "background-color": "#F2F2F2" }
        : { "background-color": "#FFBF2F" };
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
  width: 350px;
  height: 100px;
  size: 1px;
  border: #0a1f3c;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
}
.card p {
  color: #f2f2f2;
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
  vertical-align: middle !important;
}
#cardName {
  vertical-align: middle !important;
  text-align: center !important;
}
#cardProgress {
  vertical-align: middle !important;
  text-align: center !important;
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
#imageTable {
  /*width: 10%;
  height: auto;*/
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  vertical-align: middle !important;
}
#dataTable {
  width: 650px;
  margin-left: auto;
  margin-right: auto;
  align-self: center !important;
  align-items: center !important;
  margin-top: 30px !important;
  vertical-align: middle !important;
  text-align: center;
}
#itemsTable {
  vertical-align: middle !important;
  text-align: center;
}

#tableRanking {
  align-self: center !important;
  align-items: center !important;
  vertical-align: middle !important;
}

#titleRanking {
  color: #0a1f3c;
  text-align: center;
}

#cardPerson {  
  background-color: #0a1f3c;
}

/*#progressBarLarge {
  background-color: #ffbf2f !important;
  color: #ffbf2f !important;
  margin-left: 160px !important;
  width: 1020px;
}*/
#totalProgress {
  color: #0A1F3C
}

#cardHover:hover {
  transform: scale(1.1);
}
#progressBar {
  color: #0A1F3C !important;
}
</style>