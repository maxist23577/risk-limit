<script>
import axios from 'axios'
/* import https from 'https'; */
import AppSetup from './components/AppSetup.vue'
import AppMain from './components/AppMain.vue'

export default {
    
    components: {
        AppSetup, 
        AppMain,
    },

    data() {
        return {
            accountsConst: [],
            accountsVar: [],
            accounts: [],
            masterApi: "",
            masterSecret: "",
            btnAddAcc: false,
            btnAddAcc2: true,
            ip_backend: 'http://185.209.22.24:5000/main',
            }
        },
    

    methods: {
        getInfo() {            
            axios
            .post(this.ip_backend, {
                accountspost: JSON.stringify(this.accountsConst),
                masterApi: this.masterApi,
                masterSecret: this.masterSecret,
            }
            )
            .then((res) => {this.accountsVar = res.data
            })
            .catch((error) => {
                console.error(error)
            })
            this.accountsConst.forEach((account) => {
                account.flagCloseAll = "00"
                account.closePairs = []
                account.changeFreeze = "00"
                }
            );
        },

        addNewAccount(newaccountConst) {
            this.accountsConst.push(newaccountConst),
            this.saveAccounts()
            },
            

        removeAccount(accEmail) {
            this.accountsConst = this.accountsConst.filter(p => p.accEmail !== accEmail);
            this.saveAccounts()
        },

        saveAccounts() {
            const parsed = JSON.stringify(this.accountsConst)
            localStorage.setItem('accountsConst', parsed)
        },

        btnClrData() {
            localStorage.removeItem('accountsConst')
        },

        cancelAddAcc() {
            this.btnAddAcc = false
            this.btnAddAcc2 = true
        },

        stopTimer() {
            if (this.interval) {
                window.clearInterval(this.interval)
            }
        },

        startTimer() {
            this.stopTimer()
            this.interval = window.setInterval(() => {
                this.getInfo()
            }, 10000)
        }
    
    },

    mounted() {
        this.startTimer();
        if (localStorage.getItem('accountsConst')) {
            this.accountsConst = JSON.parse(localStorage.getItem('accountsConst'))
        };
        if (localStorage.masterApi) {
            this.masterApi = localStorage.masterApi
        };
        if (localStorage.masterSecret) {
            this.masterSecret = localStorage.masterSecret
        };
    },
    
    watch: {
        masterApi(masterApi) {
            localStorage.masterApi = masterApi
        },
        masterSecret(masterSecret) {
            localStorage.masterSecret = masterSecret
        },
    },

    beforeDestroy() {
        this.stopTimer()
    }
    
}

</script>

<template>
    <div class="navbar">
        <img src="../SARL-2.jpg" class="logo"/>
            <h1>SubAccount Risk Limit</h1>
    </div>
    <p>Master Account API-Key<input type="password" v-model="masterApi" style="width: 330px; margin-left: 5px; font-size: 12px; text-align: left;"></p>
    <p>Master Account API-Secret<input type="password" v-model="masterSecret" style="width: 330px; margin-left: 5px; font-size: 12px; text-align: left;"></p>
    <p><button v-show="btnAddAcc2" style="border: 1px; border-radius: 7px; border-style:dotted ; border-color: black; font-size: 16px; background-color: darkgreen; color: whitesmoke;" 
        @click="btnAddAcc=true, btnAddAcc2=false">ADD SubAccount</button>
        <button v-show="btnAddAcc2" style="border: 1px; border-radius: 7px; border-style:dotted ;margin-left: 5px; border-color: black; font-size: 16px; background-color: rgb(22, 15, 122); color: whitesmoke;" 
        @click="btnClrData">CLEAR Datas</button></p>
        <AppSetup 
            @addAcc='addNewAccount' 
            @btnCncl='cancelAddAcc' 
            v-if="btnAddAcc"/>
        <AppMain 
            :accountsConst="accountsConst"
            :accountsVar="accountsVar"
            @removeAcc2="removeAccount"
            />
    <p></p>
</template>

<style scoped>
    .navbar {
        background-color: black;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: left;
    }

    .logo {
        height: 40px;
        width: auto;
        padding: 5px;
    }
    h1 {
        color:whitesmoke; 
        display: flex;
        justify-content: center
    }
</style>