<template>
    <body>
    <div class="profile is-hidden-mobile">
        <div class="tile is-ancestor firstTileChange">
            <div class="tile is-vertical is-parent">
                <div class="tile is-child box profileTilesDesk firstTileChange">
                    <figure class="image is-128x128">
                        <img src="../assets/Images/jorge.jpg" class="is-rounded profilePickDesktop">
                    </figure>
                    <h2 class="userNameDesktop infoUserDesktop">Jorge Coelho</h2>
                    <button class="button profileButtons editPhotoDesktop is-rounded isPrimaryBGColor is-small" v-on:click="toggleModalPhoto()"><i class="fas fa-plus" ></i></button>
                    <!-- level -->
                    
                    <div class="modal" v-bind:class="[isModalActiveUser ? 'is-active' : '']">
                        <div class="modal-background"></div>
                        <div class="modal-card">
                            <header class="modal-card-head">
                            <p class="modal-card-title">EDIT USER</p>
                            <button class="delete" aria-label="close" v-on:click="toggleModalUser()"></button>
                            </header>
                            <section class="modal-card-body centerAlign">
                                <label class="label is-small">Edit Username</label>
                                <input class="input is-small" type="text" placeholder="">
                                <br>
                                <br>
                                <label class="label is-small">Edit Email</label>
                                <input class="input is-small" type="text" placeholder="">
                                <br>
                                <br>
                                <button class="button passwordButton is-danger is-small" v-on:click="togglePassword()">Password</button>
                                <br>
                                <br>
                                <div id="passwordSection" v-if="isActivePasswordField">
                                    <label class="label is-small">Current Password</label>
                                    <input class="input is-small" type="text" placeholder="">
                                    <br>
                                    <br>
                                    <label class="label is-small">New Password</label>
                                    <input class="input is-small" type="text" placeholder="">
                                    <br>
                                    <br>
                                </div>
                            <button class="button is-success saveButton">Save</button>
                            </section>
                        </div>
                    </div>
                    <!-- Modal For Edit User  -->
                    <div class="modal" v-bind:class="[isModalActivePhoto ? 'is-active' : '']">
                        <div class="modal-background"></div>
                        <div class="modal-card">
                            <header class="modal-card-head">
                            <p class="modal-card-title">EDIT USER</p>
                            <button class="delete" aria-label="close" v-on:click="toggleModalPhoto()"></button>
                            </header>
                            <section class="modal-card-body centerAlign">
                                <label class="label is-small">Add Photo Link</label>
                                <input class="input is-small" type="link" placeholder="">
                                <br>
                                <br>
                            <button class="button is-success saveButton">Save</button>
                            </section>
                        </div>
                    </div>
                    <nav class="level">
                        <div class="level-item has-text-centered">
                            <div>
                                <p class="heading headingMobDesk firstColDesktop">Pontos</p>
                                <p class="title titleMobDesk firstColDesktop">24</p>
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
                                <p class="heading headingMobDesk secondColDesktop">Créditos</p>
                                <p class="title titleMobDesk secondColDesktop">5</p>
                            </div>
                        </div>
                        <!--<div class="level-item has-text-centered">
                            <div>
                                <p class="heading headingMob secondCol">Likes</p>
                                <p class="title titleMob secondCol">789</p>
                            </div>
                        </div>-->
                    </nav>
                </div>
                 <div class="tile is-child box is-12 profileTilesDesk">
                    aqui é para os achivements
                </div>
                <button class="button profileButtons editUserDesk is-rounded isPrimaryBGColor is-small" v-on:click="toggleModalUser()" ><i class="fas fa-external-link-alt"></i></button>
            </div>
        </div>
    </div>
    <div class="profileMobile is-hidden-tablet">
        <div class="tile is-ancestor">
            <div class="tile is-4 is-vertical is-parent is-12">
                <div class="tile is-child box profilesTiles firstTile">
                    <figure class="image is-96x96">
                        <img src="../assets/Images/jorge.jpg" class="profilePick">
                    </figure>
                    <button class="button profileButtons editPhoto is-rounded isPrimaryBGColor is-small" v-on:click="toggleModalPhoto()"><i class="fas fa-plus"></i> </button>
                    <h2 class="userName infoUser">Jorge Coelho</h2>
                    <!-- Modal For Edit User  -->
                    <div class="modal" v-bind:class="[isModalActiveUser ? 'is-active' : '']">
                        <div class="modal-background"></div>
                        <div class="modal-card">
                            <header class="modal-card-head">
                            <p class="modal-card-title">EDIT USER</p>
                            <button class="delete" aria-label="close" v-on:click="toggleModalUser()"></button>
                            </header>
                            <section class="modal-card-body centerAlign">
                                <label class="label is-small">Edit Username</label>
                                <input class="input is-small" type="text" placeholder="">
                                <br>
                                <br>
                                <label class="label is-small">Edit Email</label>
                                <input class="input is-small" type="text" placeholder="">
                                <br>
                                <br>
                                <button class="button passwordButton is-danger is-small" v-on:click="togglePassword()">Password</button>
                                <br>
                                <br>
                                <div id="passwordSection" v-if="isActivePasswordField">
                                    <label class="label is-small">Current Password</label>
                                    <input class="input is-small" type="text" placeholder="">
                                    <br>
                                    <br>
                                    <label class="label is-small">New Password</label>
                                    <input class="input is-small" type="text" placeholder="">
                                    <br>
                                    <br>
                                </div>
                            <button class="button is-success saveButton">Save</button>
                            </section>
                        </div>
                    </div>
                    <!-- Modal For Edit User  -->
                    <div class="modal" v-bind:class="[isModalActivePhoto ? 'is-active' : '']">
                        <div class="modal-background"></div>
                        <div class="modal-card">
                            <header class="modal-card-head">
                            <p class="modal-card-title">EDIT USER</p>
                            <button class="delete" aria-label="close" v-on:click="toggleModalPhoto()"></button>
                            </header>
                            <section class="modal-card-body centerAlign">
                                <label class="label is-small">Add Photo Link</label>
                                <input class="input is-small" type="link" placeholder="">
                                <br>
                                <br>
                            <button class="button is-success saveButton">Save</button>
                            </section>
                        </div>
                    </div>
                    <!-- Level -->

                    <nav class="level profileLevel">
                        <div class="level-item has-text-centered">
                            <div>
                                <p class="heading headingMob firstCol">Pontos</p>
                                <p class="title titleMob firstCol">24</p>
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
                                <p class="heading headingMob secondCol">Créditos</p>
                                <p class="title titleMob secondCol">5</p>
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
                    
                    <button class="button profileButtons editUser is-rounded isPrimaryBGColor is-small" v-on:click="toggleModalUser()" ><i class="fas fa-external-link-alt"></i></button>
                </div>
                <div class="tile is-child box profilesTiles">
                    <p class="title">nao tocar</p>
                </div>
            </div>
        </div>
    </div>
    </body>
</template>
<style lang="scss">
    @import "../assets/perfil.scss";
</style>
<script>
export default {
    data() {
        return {
            isModalActiveUser: false,
            isModalActivePhoto: false,
            isActivePasswordField: false,
        }
    },
    methods: {
        toggleModalUser() {
            if(this.isModalActiveUser){
                this.isModalActiveUser = false
            }
            else {
                this.isModalActiveUser = true
            }
        },
        toggleModalPhoto() {
            if(this.isModalActivePhoto){
                this.isModalActivePhoto = false
            }
            else {
                this.isModalActivePhoto = true
            }
        },
        togglePassword() {
            if(this.isActivePasswordField){
                this.isActivePasswordField = false
            }
            else {
                this.isActivePasswordField = true
            }
        }
    },
}
</script>