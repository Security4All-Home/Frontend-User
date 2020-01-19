<template id="achievement">
  <section>
      <div class="achievements">
    <br />
    <br />
    <br />
    <h1 id="titleAchievements" class="title is-1-desktop is-8-tablet is-12-mobile" >Achievements</h1>
    <br />
    <br />
    <div class="container" id="tableAchievements">
      <div class="columns">
        <div class="column is-offset-2 is-8-desktop is-8-tablet is-11-mobile ">
        <!--<progress id="progressBarLarge" class="progress is-large is-12-mobile" :value="loggedUser.percentWon" max="100" show-value>{{loggedUser.percentWon}}</progress>
        <p id="totalProgress">3/5</p>-->

          <b-progress id="progressBar" :value="loggedUser.percentWon" size="is-large" show-value>
              {{loggedUser.points}} / {{achievements.length}}
          </b-progress>
        </div>
      </div>
      
    <br />
      <div class="level-item has-text-centered">
        <div id="cardView" class="columns is-multiline">
          <div
          id="cardHover"          
            class="column is-11-mobile is-8-tablet is-4-desktop is-centered"
            v-for="(achievement,i) in achievements"
            :key="i"
          >
            <div class="card" id="cardPerson">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image">
                      <img id="imageCard" :src="achievement.imageDefault" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div class="media-content">
                    <!--<p  class="title is-15">{{person.id}}</p>-->
                    <p id="cardName" class="subtitle is-12">{{achievement.description}}</p>
                    <p id="cardProgress" class="subtitle is-20">0/{{achievement.goal}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <br />
    <br />
  </section>
</template>

<script>
import { getAllAchievements } from '../API/apiAchievement';

export default {
  name: "Rankings",
  data() {
    //let photo = "https://pbs.twimg.com/media/ENwUVtvWkAA3k5x?format=png&name=360x360"

    let loggedUser = {
      id: 54,
      username: "James Sully",
      points: 33,
      achievements: [
        {
          id: 1,
          progress: 20
        },
        {
          id: 2,
          progress: 3
        },
        {
          id: 3,
          progress: 30
        },
        {
          id: 4,
          progress: 10
        }
      ],
      percentWon: 60
    }

    


    return {
      searchBar: "",
      filteredUsers: [],
      view: 1,
      achievements:[],
      loggedUser
    };
  },
  /*data: function() {
    return {
      tempRanking: []
    };
  },*/
  async created() {
    await getAllAchievements().then(response => {
      this.achievements = response.data.data;
      /* eslint-disable */
      console.log("achievements: " + this.achievements)
    });

   // this.tempRanking = JSON.parse(localStorage.getItem("ranking"));
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

#tableAchievements {
  align-self: center !important;
  align-items: center !important;
  vertical-align: middle !important;
}

#titleAchievements {
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
  align-self: center !important;
}
</style>