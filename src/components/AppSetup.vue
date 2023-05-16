<script>
export default {
    data() {
        return {
            validationMessage: '',
            newaccount: {},
            newaccountConst:
                {accName: "", accEmail: "", apikey: "", secretkey: "", closePairs: [], 
                checkPair: "00", checkAccount: "00", flagCloseAll: "00", riskPair: "", riskAcc: "", checkAutoFreeze: "00", freeze: "000", changeFreeze: "00", id: 0},
            newaccountVar:
                {accEmail: "", accBalance: "", accDD: "", accPairs: [], freezeError: "", errors: "SubAccount is connected"},
        }
    },

    methods: {
        addNewAcc() {
            if (this.newaccountConst.apikey && this.newaccountConst.secretkey && this.newaccountConst.accEmail) {
                this.newaccountConst.id = Date.now();
                this.$emit('addAcc', this.newaccountConst);
                this.validationMessage = 'New subAccount was added'
            }
            else {
                this.validationMessage = 'Enter your API-key, Secret-Key and eMail of new SubAccount'
            }
            this.newaccountConst = {accName: "", accEmail: "", apikey: "", secretkey: "", closePair: [], 
                checkPair: "00", checkAccount: "00", flagCloseAll: "00", riskPair: "", riskAcc: "", checkAutoFreeze: "00", freeze: "000", changeFreeze: "00", id: 0}
            this.newaccountVar = {accEmail: "", accBalance: "", accDD: "", accPairs: [], freezeError: "", errors: "SubAccount is connected"}
            },

        btnCancel() {
            this.$emit('btnCncl')
            },
        },

    
}

</script>

<template>
    <div class="addaccount">
      <h1>Add New SubAccount in Monitoring</h1>
      <div class="input-container">
        <label for="accName">Name:</label>
        <input type="text" id="accName" v-model="newaccountConst.accName" />
      </div>
      <div class="input-container">
        <label for="accEmail">E-mail:</label>
        <input type="text" id="accEmail" v-model="newaccountConst.accEmail" />
      </div>
      <div class="input-container">
        <label for="apiKey">API-key:</label>
        <input type="text" id="apiKey" v-model="newaccountConst.apikey" />
      </div>
      <div class="input-container">
        <label for="secretKey">Secret-Key:</label>
        <input type="text" id="secretKey" v-model="newaccountConst.secretkey" />
      </div>
  
      <p :style="{'color': validationMessage == 'New subAccount was added' ? 'green' : 'red'}">{{ validationMessage }}</p>
  
      <div class="button-container">
        <button class="btn-add" @click="addNewAcc">ADD SubAccount</button>
        <button class="btn-cancel" @click="btnCancel" style="background-color: navy;">CANCEL</button>
      </div>
    </div>
  </template>
  
  <style scoped>
  .addaccount {
    margin: auto;
    margin-bottom: 15px;
    max-width: 600px;
    overflow-x: auto;
    white-space: nowrap;
    background: whitesmoke;
    border: 1px solid rgb(6, 59, 6);
    border-radius: 10px;
  }
  
  h1 {
    text-align: center;
    font-size: 22px;
  }
  
  .input-container {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    padding-right: 10px;
  }
  
  label {
    width: 15%;
    font-size: 14px;
    text-align: left;
    padding-left: 20px;
  }
  
  input {
    flex: 1;
    font-size: 12px;
    padding: 5px;
    margin-left: 10px;
  }
  
  p {
    text-align: center;
  }
  
  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 15px;
  }
  
  button {
    margin: 0 10px;
    padding: 10px 20px;
    border: 1px solid black;
    border-radius: 7px;
    font-size: 16px;
    background-color: darkgreen;
    color: whitesmoke;
  }
  
  @media (max-width: 480px) {
    label {
      width: 40%;
    }
  
    button {
      font-size: 14px;
    }
  }
  </style>