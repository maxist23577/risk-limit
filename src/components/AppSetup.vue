<script>
export default {
    data() {
        return {
            newaccount: {},
            newaccountConst:
                {accName: "", accEmail: "", apikey: "", secretkey: "", closePairs: [], 
                checkPair: "00", checkAccount: "00", flagCloseAll: "00", riskPair: "", riskAcc: "", checkAutoFreeze: "00", freeze: "000", changeFreeze: "00", id: 0},
            newaccountVar:
                {accEmail: "", accBalance: "", accDD: "", accPairs: [], freezeError: ""},
        }
    },

    methods: {
        addNewAcc() {
            this.newaccountConst.id = Date.now()
            this.$emit('addAcc', this.newaccountConst)
            this.newaccountConst = {accName: "", accEmail: "", apikey: "", secretkey: "", closePair: [], 
                checkPair: "00", checkAccount: "00", flagCloseAll: "00", riskPair: "", riskAcc: "", checkAutoFreeze: "00", freeze: "000", changeFreeze: "00", id: 0}
            this.newaccountVar = {accEmail: "", accBalance: "", accDD: "", accPairs: [], freezeError: ""}
            },

        btnCancel() {
            this.$emit('btnCncl')
            },
        },

    
}

</script>

<template>

    <div class="addaccount">
        <h1 style="display: inline-flex; white-space: nowrap; width: 100%; padding-top: 15px; padding-left: 10px; padding-right: 10px; justify-content: center; 
            margin: auto;font-size: 22px; padding-bottom: 15px">Add New SubAccount in Monitoring</h1>
        <p1 style="display: inline-flex; width: 100%; padding-left: 15%; padding-bottom: 5px">Name:<input type="text" v-model="newaccountConst.accName" 
            style="font-size: 12px; text-align: left; display: inline-flex; width: 50%; margin-left: 9%"></p1>
        <p2 style="display: inline-flex; width: 100%; padding-left: 15%; padding-bottom: 5px">E-mail:<input type="text" v-model="newaccountConst.accEmail"
            style="width: 100%; font-size: 12px; text-align: left;display: inline-flex; width: 50%; margin-left: 8%;"></p2>
        <p3 style="display: inline-flex; width: 100%; padding-left: 15%; padding-bottom: 5px">API-key:<input type="text" v-model="newaccountConst.apikey"
            style="width: 100%; font-size: 12px; text-align: left;display: inline-flex; width: 50%; margin-left: 6%; "></p3>
        <p4 style="display: inline-flex; width: 100%; padding-left: 15%; padding-bottom: 15px">Secret-Key:<input type="text" v-model="newaccountConst.secretkey"
            style="width: 100%; font-size: 12px; text-align: left;display: inline-flex; width: 50%; margin-left: 3%;"></p4>
            <!-- <p6 style="display: inline-flex; width: 100%; padding-left: 35%; padding-bottom: 5px"><input type="checkbox" v-model="newaccountConst.checkPair" true-value="11" false-value="00"> Risk Pairs: 
                <input type="text" v-model="newaccountConst.riskPair" style="width: 30px; font-size: 12px; text-align: center;"> %</p6>
            <p8 style="display: inline-flex; width: 100%; padding-left: 35%; padding-bottom: 5px"><input type="checkbox" v-model="newaccountConst.checkAccount" true-value="11" false-value="00" > Risk Account: 
                <input type="text" v-model="newaccountConst.riskAcc" style="width: 30px; font-size: 12px; text-align: center;"> %</p8>  -->
        <p9 style="display: inline-flex; white-space: nowrap; width: 100%; padding-left: 10px; padding: 10px; justify-content: center; margin: auto;font-size: 22px">
            <button style="margin: 20px; border: 1px; border-radius: 7px; border-style:groove; border-color: black; font-size: 16px; background-color: darkgreen; 
            color: whitesmoke" @click="addNewAcc">ADD SubAccount</button>
            <button style="margin: 20px; border: 1px; border-radius: 7px; border-style:groove; border-color: black; font-size: 16px; background-color: darkgreen; 
            color: whitesmoke;" @click="btnCancel">CANCEL</button></p9>
    </div>
</template>

<style scoped>
    .addaccount {
        margin-bottom: 15px; 
        justify-content: left; 
    }

    .h1, .p1, .p2, .p3, .p4, .p9 {
        white-space: nowrap    
    }
</style>
