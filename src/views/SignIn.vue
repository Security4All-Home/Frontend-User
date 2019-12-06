<template>
    <div class="signup">
        <div class="container">
            <div class="columns is-gapless">
                <div class="column" id="introColumn">
                    <figure class="image is-128x128" id="LogoLogin">
    	                <img src="../assets/Images/logo.png" >
                    </figure>
                    <h1 class="introText" id="TitleSignUp">CREATE HERE YOUR ACCOUNT</H1>
                    <p class="introText" id="outerText">Its time to make you safe here!! But if you already are, <a id="linkLogin">login here!!</a></p>

                </div>
            </div>
            <br>
            <div class="column">
            <ul class="steps is-medium">
                <li class="step-item is-completed">
                    <div class="step-marker">1</div>
                </li>
                <li class="step-item">
                    <div class="step-marker">2</div>
                </li>
                <li class="step-item">
                    <div class="step-marker">3</div>
                </li>
                <li class="step-item">
                    <div class="step-marker">4</div>
                </li>
            </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "../assets/signup.scss";
</style>