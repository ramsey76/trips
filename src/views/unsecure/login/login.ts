import { Component, Prop, Vue } from 'vue-property-decorator';
import {namespace} from 'vuex-class';
import WithRender from './login.html';
import {Credentials} from "@/types";

const authenticationStore = namespace("authenticationStore");

@WithRender
@Component
export default class login extends Vue {
    @authenticationStore.Action public AuthenticationUser!: (credentials: Credentials) => void;
    
    public textFieldRule = [(v: string) => !!v || "Please fill in a username and password."];
    public isValid: boolean = false;

    public localCredentials: Credentials = {
        passWord: "",
        userName: "",
    }

    public login() {
        const isValid: boolean = (this.$refs.form as Vue & { validate: () => boolean }).validate();

        if(isValid) {
            this.AuthenticationUser(this.localCredentials);
        }
        
    }

    public register() {
        this.$router.push("/unsecure/register");
    }
}