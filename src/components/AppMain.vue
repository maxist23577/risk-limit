<script>
import Accounts from "./Accounts.vue"
export default {
    props: {
        accountsConst: {
            type: Array
        },
        accountsVar: {
            type: Array
        }
    },

    data() {
        return {
            accountsConst2: this.accountsConst
        }
    },

    methods: {
       removeAccount(accEmail) {
        this.$emit('removeAcc2', accEmail)
       }
    },

    components: {
        Accounts
    }
}
</script>

<template>
    <div class="listaccounts" v-if="accountsVar.length > 0">
        <Accounts v-for="account in accountsVar" :key="account.accEmail" 
        :account="account" 
        :accountsConst2="accountsConst2"
        @removeAcc="removeAccount"></Accounts>
        
    </div>
    <h2 v-else style="color: red">No accounts for monitoring</h2>
</template>

<style scoped>
    .listaccounts {
        overflow-x: scroll;
    }
</style>
