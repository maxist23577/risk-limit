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

/*     data() {
        return {
            accountsConst: this.accountsConst
        }
    }, */

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
    <div v-if="accountsVar.length > 0">
        <Accounts v-for="account in accountsVar" :key="account.accEmail" 
        :account="account" 
        :accounts-const="accountsConst"
        @removeAcc="removeAccount"></Accounts>
        
    </div>
    <h2 v-else style="color: rgba(248, 66, 66, 0.973)">No accounts for monitoring</h2>
</template>

<style scoped>
    
</style>
