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
                    <div class="steps" id="stepsSignIn">
                        <div class="step-item is-active is-success">
                            <div class="step-marker">1</div>
                            <div class="step-details">
                            <p class="step-title">Account</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <div class="step-marker">2</div>
                            <div class="step-details">
                            <p class="step-title">Profile</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <div class="step-marker">3</div>
                            <div class="step-details">
                            <p class="step-title">Social</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <div class="step-marker">4</div>
                            <div class="step-details">
                            <p class="step-title">Finish</p>
                            </div>
                        </div>
                        <div class="steps-content">
                            <div class="step-content has-text-centered is-active">
                            <div class="field is-horizontal">
                                <div class="field-label is-normal">
                                <label class="label">Username</label>
                                </div>
                                <div class="field-body">
                                <div class="field">
                                    <div class="control">
                                    <input class="input" name="username" id="username" type="text" placeholder="Username" autofocus data-validate="require">
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="field is-horizontal">
                                <div class="field-label is-normal">
                                <label class="label">Password</label>
                                </div>
                                <div class="field-body">
                                <div class="field">
                                    <div class="control has-icon has-icon-right">
                                    <input class="input" type="password" name="password" id="password" placeholder="Password" data-validate="require">
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="field is-horizontal">
                                <div class="field-label is-normal">
                                <label class="label">Confirm password</label>
                                </div>
                                <div class="field-body">
                                <div class="field">
                                    <div class="control has-icon has-icon-right">
                                    <input class="input" type="password" name="password_confirm" id="password_confirm" placeholder="Confirm password" data-validate="require">
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="step-content has-text-centered">
                            <div class="field is-horizontal">
                                <div class="field-label is-normal">
                                <label class="label">Firstname</label>
                                </div>
                                <div class="field-body">
                                <div class="field">
                                    <div class="control">
                                    <input class="input" name="firstname" id="firstname" type="text" placeholder="Firstname" autofocus data-validate="require">
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="field is-horizontal">
                                <div class="field-label is-normal">
                                <label class="label">Last name</label>
                                </div>
                                <div class="field-body">
                                <div class="field">
                                    <div class="control has-icon has-icon-right">
                                    <input class="input" type="text" name="lastname" id="lastname" placeholder="Last name" data-validate="require">
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="field is-horizontal">
                                <div class="field-label is-normal">
                                <label class="label">Email</label>
                                </div>
                                <div class="field-body">
                                <div class="field">
                                    <div class="control has-icon has-icon-right">
                                    <input class="input" type="email" name="email" id="email" placeholder="Email" data-validate="require">
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="step-content has-text-centered">
                        <div class="field is-horizontal">
                            <div class="field-label is-normal">
                            <label class="label">Facebook account</label>
                            </div>
                            <div class="field-body">
                            <div class="field">
                                <div class="control">
                                <input class="input" name="facebook" id="facebook" type="text" placeholder="Facebook account url" autofocus data-validate="require">
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="field is-horizontal">
                            <div class="field-label is-normal">
                            <label class="label">Twitter account</label>
                            </div>
                            <div class="field-body">
                            <div class="field">
                                <div class="control">
                                <input class="input" name="twitter" id="twitter" type="text" placeholder="Twitter account url" autofocus data-validate="require">
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="step-content has-text-centered">
                        <h1 class="title is-4">Your account is now created!</h1>
                        </div>
                        </div>
                    <div class="steps-actions">
                        <div class="steps-action">
                        <a data-nav="previous" class="button is-light">Previous</a>
                        </div>
                        <div class="steps-action">
                        <a data-nav="next" class="button is-light">Next</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
//obter metodo para funcionar os steps
import bulmaSteps from "../../node_modules/bulma-extensions/bulma-steps/src/js/index";
export default {
    data() {
        return {
            
        }
    },
    mounted() {
        //este é o metodo em concreto
        bulmaSteps.attach();
    },
}
</script>

<style lang="scss">
    @import "../assets/signup.scss";
</style>