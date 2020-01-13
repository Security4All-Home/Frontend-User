<template>
    <body>
    <div class="profile is-hidden-mobile">

    </div>
    <div class="profileMobile is-hidden-tablet">
        <div class="tile is-ancestor">
            <div class="tile is-4 is-vertical is-parent is-12">
                <div class="tile is-child box profilesTiles firstTile">
                    <figure class="image is-96x96">
                        <img src="../assets/Images/jorge.jpg" class="profilePick">
                    </figure>
                    <button class="button is-rounded isPrimaryBGColor is-small"><i class="fas fa-plus"></i> </button>
                    <h2 class="userName infoUser">Jorge Coelho</h2>
                    


                    <!-- Level -->

                    <nav class="level">
                        <div class="level-item has-text-centered">
                            <div>
                                <p class="heading headingMob firstCol">Tweets</p>
                                <p class="title titleMob firstCol">3,456</p>
                            </div>
                        </div>
                        <!--<div class="level-item has-text-centered">
                            <div>
                                <p class="heading headingMob firstCol">Following</p>
                                <p class="title titleMob firstCol">123</p>
                            </div>
                        </div> -->
                        <div class="level-item has-text-centered">
                            <div>
                                <p class="heading headingMob secondCol">Followers</p>
                                <p class="title titleMob secondCol">456K</p>
                            </div>
                        </div>
                        <!--<div class="level-item has-text-centered">
                            <div>
                                <p class="heading headingMob secondCol">Likes</p>
                                <p class="title titleMob secondCol">789</p>
                            </div>
                        </div>-->
                    </nav>

                    <!-- buttons -->
                    
                    <button class="button profileButtons editUser is-primary is-small"><i class="fas fa-external-link-alt"></i></button>
                </div>
                <div class="tile is-child box profilesTiles">
                    <p class="title">Two</p>
                </div>
            </div>
        </div>
    </div>
    </body>
</template>
<style lang="scss">
    @import "../assets/perfil.scss";
</style>