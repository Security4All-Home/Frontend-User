<template>
  <!-- is-fullheight-with-navbar -->
  <section class="hero hasBackgroundImage is-fullheight">
    <div class="hero-head">
      <NavBar></NavBar>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-6 is-offset-3">
          <h1 class="title has-text-white glitch" data-text="Are you secure?">Are you secure?</h1>
        </div>
      </div>
    </div>
    <div id="secPack" class="section is-centered">
      <div class="container has-text-centered">
        <h1 class="title has-text-white">Become Safe</h1>
        <div class="column is-12 is-offset-2">
          <div class="tile is-ancestor is-centered">
            <div class="tile is-vertical is-8">
              <div class="tile">
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child box">
                    <div class="content has-text-justified">
                      <h1 id="articleTitle" class="title has-text-black">Basic</h1>
                      <ul>
                        <li>Access to Mobile app</li>
                        <li>2 sensors included</li>
                        <li>Home Service</li>
                      </ul>
                    </div>
                    <nav class="level">
                      <div class="level-left"></div>
                      <div class="level-right">
                        <div class="level-item">
                          <div class="level-item">
                            <a id="btnTeste" class="button is-warning">40€</a>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <div class="content has-text-justified">
                      <nav class="level">
                        <div class="level-left">
                          <h1 id="articleTitle" class="title has-text-black">Premium</h1>
                        </div>
                        <!-- <div class="level-right discount">
                          <p class="text">23% off</p>
                        </div>-->
                        <div class="media-right">
                          <button class="button is-success">23% off</button>
                        </div>
                      </nav>
                      <ul>
                        <li>Access to Mobile App</li>
                        <li>4 sensors included</li>
                        <li>Home Service</li>
                        <li>Instalation Included</li>
                        <li>3D Model of your house</li>
                      </ul>
                      <nav class="level">
                        <div class="level-left"></div>
                        <div class="level-right">
                          <div class="level-item">
                            <div class="level-item">
                              <a class="button is-warning">100€</a>
                            </div>
                          </div>
                        </div>
                      </nav>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from "../components/NavbarC";

export default {
  name: "home",
  components: {
    NavBar
  }
};
</script>

<style>
.hasBackgroundImage {
  background-image: url("../assets/Images/HomeWallpaper.jpg") !important;
}

#secPack {
  background-color: #373737;
}

#articleTitle {
  border-bottom: 1px solid #eee;
  padding: 0;
}

#btnTeste {
  position: relative;
  top: 50px;
}

ul {
  list-style: none;
}

li:before {
  content: "\f00c"; /* FontAwesome Unicode */
  font-family: FontAwesome;
  display: inline-block;
  margin-left: -1.3em; /* same as padding-left set on li */
  width: 1.3em; /* same as padding-left set on li */
}
</style>
