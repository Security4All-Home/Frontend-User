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
              {{tempPoints}} / {{tempAchievements.length}}
          </b-progress>
        </div>
      </div>
      
    <br />
      <div class="level-item has-text-centered">
        <div id="cardView" class="columns is-multiline">
          <div
          id="cardHover"          
            class="column is-11-mobile is-8-tablet is-4-desktop is-centered"
            v-for="(achievement,i) in tempAchievements"
            :key="i"
          >
            <div class="card" id="cardPerson">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image">
                      <img id="imageCard" :src="photo" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div class="media-content">
                    <!--<p  class="title is-15">{{person.id}}</p>-->
                    <p id="cardName" class="subtitle is-12">{{achievement.description}}</p>
                    <p id="cardProgress" class="subtitle is-20">{{achievement.pointsWon}}/{{achievement.goal}}</p>
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
    let photo = "https://pbs.twimg.com/media/ENwUVtvWkAA3k5x?format=png&name=360x360"

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

    

    let tempPoints = 0
    let tempAchievements = []

    return {
      searchBar: "",
      filteredUsers: [],
      view: 1,
      achievements:[],
      loggedUser, 
      photo,
      tempAchievements,
      tempPoints
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
      console.log(this.achievements)
    });

    
   
    let temp = 0
    for (let j = 0; j < this.achievements.length; j++) {
      for (let i = 0; i < this.loggedUser.achievements.length; i++) {
        if(this.achievements[j].type == "gold"){
          this.achievements[j].goal = 30
        }
        if(this.achievements[j].type == "bronze"){
          this.achievements[j].goal = 10
        }
        if(this.achievements[j].type == "silver"){
          this.achievements[j].goal = 20
        }
      }
    }

    

    for (let i = 0; i < this.achievements.length; i++) {

       this.tempAchievements.push(
          {
            id: this.achievements[i].id,
            description: this.achievements[i].description,
            goal: this.achievements[i].goal,
            type: this.achievements[i].type,
            pointsWon: 0,
            percent: 0
          })
    }

    for (let j = 0; j < this.tempAchievements.length; j++) {
      for (let i = 0; i < this.loggedUser.achievements.length; i++) {
        if(this.loggedUser.achievements[i].id == this.tempAchievements[j].id){
          this.tempAchievements[j].percent = this.loggedUser.achievements[i].progress * 10
          if(this.loggedUser.achievements[i].progress == 10 && this.tempAchievements[j].type == "bronze"){
            temp = temp + 1

              
              if(this.tempAchievements[j].type == "bronze"){
                this.photo = "https://pbs.twimg.com/media/ENmx441UcAAGY6J?format=png&name=small"
              }
              
              
            }
            if(this.loggedUser.achievements[i].progress == 20 && this.tempAchievements.type[j] == "silver"){
              if(this.tempAchievements[j].type == "silver"){
                this.photo = "https://pbs.twimg.com/media/ENmx441U0AAv-KU?format=png&name=120x120"
              }
            }
            if(this.loggedUser.achievements[i].progress == 30 && this.tempAchievements.type[j] == "gold"){
              if(this.tempAchievements[j].type == "gold"){
                this.photo = "https://image.flaticon.com/icons/svg/1152/1152810.svg"
              }
            }

            
          this.tempAchievements[j].pointsWon = temp
          let temp2 = 0

          for (let u = 0; u < this.loggedUser.achievements.length; u++) {
            for (let j = 0; j < this.tempAchievements.length; j++) {
              if(this.loggedUser.achievements[u].id == this.tempAchievements[j].id) {
                if(this.tempAchievements[j].type == "gold" && this.tempAchievements[j].goal == 30){
                  if(this.loggedUser.achievements[u].progress == 30){
                    this.tempPoints = temp2 +1
                  }
                }
                if(this.tempAchievements[j].type == "silver" && this.tempAchievements[j].goal == 20){
                  if(this.loggedUser.achievements[u].progress == 20){
                    this.tempPoints = temp2 +1
                  }
                }
                if(this.tempAchievements[j].type == "bronze" && this.tempAchievements[j].goal == 10){
                  if(this.loggedUser.achievements[u].progress == 10){
                    this.tempPoints = temp2 +1
                  }
                }
              }
              
            }
          }

          this.tempPoints = temp2
          //console.log(temp2)



        }
      }
    }

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