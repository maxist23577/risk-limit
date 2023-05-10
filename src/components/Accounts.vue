<script>

export default {
    props: {
        account: {
            type: Object,
            required: true
        },
        accountsConst: {
            type: Array,
            required: true
        },
    },


    data() {
        return {
            checkBoxRiskPair: false,
            checkBoxRiskAcc: false,
        }
    },
  
    methods: {
        getAccountInfo(name) {
            const account = this.accountsConst.find((acc) => acc.accEmail === name)
            return account && account.accEmail ? account : { accEmail: 'unknown' };
        },

        checkboxPair(name, checked) {
            const account1 = this.accountsConst.find((a) => a.accEmail === name);
            if (account1) {
                account1.checkPair = checked ? "11" : "00";
            }
        },

        checkboxAcc(name, checked) {
            const account1 = this.accountsConst.find((a) => a.accEmail === name);
            if (account1) {
                account1.checkAccount = checked ? "11" : "00";
            }
        },

        updateRiskPair(name, text) {
            const account2 = this.accountsConst.find((a) => a.accEmail === name);
            if (account2) {
                account2.riskPair = text;
            }
        },

        updateRiskAcc(name, text) {
            const account2 = this.accountsConst.find((a) => a.accEmail === name);
            if (account2) {
                account2.riskAcc = text;
            }
        },

        closeAll(name) {
            const account2 = this.accountsConst.find((a) => a.accEmail === name);
            if (account2) {
                account2.flagCloseAll = "11";
            }
        },

        closePairs(account, pair) {
            const account2 = this.accountsConst.find((a) => a.accEmail === account);
            if (account2) {
                account2.closePairs.push(pair);
            }
        },

        freezeIdent(accEmail) {
            const account1 = this.accountsConst.find((a) => a.accEmail === accEmail);
            if (account1) {
                return account1.freeze;
            }
        },

        freezeIt(accEmail) {
            const account1 = this.accountsConst.find((a) => a.accEmail === accEmail);
            if (account1) {
                account1.freeze = ""
                account1.changeFreeze = "11"
                setTimeout(() => {
                    if (this.account.freezeError == "") {
                        account1.freeze = "00"}
                    else {account1.freeze = "000"}
                }, 10000)
            }
        },

        unfreezeIt(accEmail) {
            const account1 = this.accountsConst.find((a) => a.accEmail === accEmail);
            if (account1) {
                account1.freeze = ""
                account1.changeFreeze = "22"
                setTimeout(() => {
                    if (this.account.freezeError == "") {
                        account1.freeze = "000"}
                    else {account1.freeze = "00"}
                }, 10000)
            }
        },
    }   
}
</script>

<template>
    <div class="account">
        <p1>{{ getAccountInfo(account.accEmail).accName }} <br>({{ account.accEmail }})</p1>
        <p2>BALANCE</p2>
            <p5 v-for="pair in account.accPairs" :key="pair.pair">
                {{ pair.pair }}  </p5>
        <div class="balance">
            <p7><input type="checkbox" v-on:change="checkboxPair(account.accEmail, $event.target.checked)" v-model="checkBoxRiskPair"></p7>
            <p8>Risk Pairs</p8>
            <p9 style="font-size: 12px;"><input type="number" @input="updateRiskPair(account.accEmail, $event.target.value)" :disabled="checkBoxRiskPair" style="width: 50px; font-size: 12px; text-align: center;">%</p9>
            <p3>{{ account.accBalance }}</p3>
            <p6 v-for="pair in account.accPairs" :key="pair.pair">
            {{ pair.pnl }}  </p6>
            </div>
        <div class="drawdown">
            <p7><input type="checkbox" v-on:change="checkboxAcc(account.accEmail, $event.target.checked)" v-model="checkBoxRiskAcc"></p7>
            <p8>Risk Account</p8>
            <p9 style="font-size: 12px;"><input type="number" @input="updateRiskAcc(account.accEmail, $event.target.value)" :disabled="checkBoxRiskAcc" style="width: 50px; font-size: 12px; text-align: center;">%</p9>
            <p4>{{ account.accDD }}</p4>
            <p6 v-for="pair in account.accPairs" :key="pair.pair">
            {{ pair.dd }}  </p6>
        </div>  
        <div class="buttons">
            <p7><button v-if="freezeIdent(account.accEmail) === '000'" @click="freezeIt(account.accEmail)" 
            style="background-color:steelblue; color: whitesmoke; border: 1px; border-radius: 7px; border-style:groove; 
            border-color: navy; font-size: 12px; margin-right: 2px; margin-left: 2px;">FREEZE</button>
                
            <button v-else-if="freezeIdent(account.accEmail) === '00'" @click="unfreezeIt(account.accEmail)" 
            style="background-color:whitesmoke ; color: steelblue; border: 1px; border-radius: 7px; border-style:groove; 
            border-color: navy; font-size: 12px; margin-right: 2px; margin-left: 2px;">UNFREEZE</button>
            
            <button @click="$emit('removeAcc', account.accEmail)" style="background-color:gray ; color: whitesmoke; border: 1px; 
            border-radius: 7px; border-style:groove; border-color: black; font-size: 12px; margin-right: 2px; margin-left: 2px;">DELETE</button></p7>
            
            <p8><button v-on:click="closeAll(account.accEmail)" style="border: 1px; border-radius: 7px; 
            border-style:groove; border-color: darkgreen; font-size: 12px; color: darkgreen;">CLOSE ALL</button></p8>
            
            <p6 v-for="pair in account.accPairs" :key="pair.pair">
            <button v-on:click="closePairs(account.accEmail, pair.pair)" style="border: 1px; border-radius: 7px; 
            border-style:groove; border-color: darkgreen; font-size: 12px; color: darkgreen;">CLOSE</button></p6>
            
        </div>
    </div>
<!-- <p>{{ accountsConst }}</p> -->
</template>

<style scoped>
    .account p1 {
        display: inline-flex;
        width: 173px;
        padding-left: 10px;
        padding-right: 5px;
        margin: auto;
        color: black;
        font-size: 16px;
        white-space: wrap;
    }
    .balance p7 {
        display: inline-flex;
        width: 20px;
        padding-left: 10px;
        padding-right: 2px;
        margin: auto;
    }
    .balance p8 {
        display: inline-flex;
        width: 84px;
        padding-left: 2px;
        padding-right: 2px;
        margin: auto;
        color: black;
        font-size: 14px;
    }

    .account p2 {
        display: inline-flex;
        width: 125px;
        padding-left: 5px;
        padding-right: 5px;
        justify-content: center;
        margin: auto;
        color: black;
        font-size: 18px;
    }
    .account p5 {
        display: inline-flex;
        width: 110px;
        padding-left: 5px;
        padding-right: 5px;
        justify-content: center;
        margin: auto;
        color: black;
        font-size: 14px;
    }
    .balance p3 {
        display: inline-flex;
        width: 125px;
        padding-left: 5px;
        padding-right: 5px;
        justify-content: center;
        margin: auto;
        color: black;
        font-size: 18px;
    }
    .balance p6 {
        display: inline-flex;
        width: 110px;
        padding-left: 5px;
        padding-right: 5px;
        justify-content: center;
        margin: auto;
        color: black;
        font-size: 14px;
    }
    .drawdown p4 {
        display: inline-flex;
        width: 125px;
        padding-left: 5px;
        padding-right: 5px;
        justify-content: center;
        margin: auto;
        color: black;
        font-size: 14px;
        }
    .drawdown p7 {
        display: inline-flex;
        width: 20px;
        padding-left: 10px;
        padding-right: 2px;
        margin: auto;
    }
    .drawdown p8 {
        display: inline-flex;
        width: 84px;
        padding-left: 2px;
        padding-right: 2px;
        margin: auto;
        color: black;
        font-size: 14px;
    }
    .drawdown p6 {
        display: inline-flex;
        width: 110px;
        padding-left: 5px;
        padding-right: 5px;
        justify-content: center;
        margin: auto;
        color: black;
        font-size: 12px;
    }
    .buttons p7 {
        display: inline-flex;
        width: 173px;
        padding-left: 10px;
        padding-right: 5px;
        justify-content: center;
        margin: auto;
    }
    .buttons p8 {
        display: inline-flex;
        width: 125px;
        padding-left: 5px;
        padding-right: 5px;
        justify-content: center;
        margin: auto;
    }
    .buttons p6 {
        display: inline-flex;
        width: 110px;
        padding-left: 5px;
        padding-right: 5px;
        justify-content: center;
        margin: auto;
    }

</style>