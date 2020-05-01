<template>
  <div>
    <b-container fluid>
      <b-row class="my-1" v-for="store in stores" :key="store.name">
        <b-col sm="3">
          <label :for="`type-${store.name}`">{{ store.name }}:</label>
        </b-col>
        <b-col sm="4">
          <b-form-input :id="`type-${store.name}`" type="number" v-model="store.value"></b-form-input>
        </b-col>
        <b-col sm="2">
          <b-button variant="outline-primary" @click="sendData(store.field, store.value)">更新</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
    data(){
        return {
            stores: [
              {
                name: 'online',
                field: '1',
                value: null
              },
              {
                name: 'maker',
                field: '2',
                value: null
              },
              {
                name: 'steam',
                field: '3',
                value: null
              },
              {
                name: 'edu100',
                field: '4',
                value: null
              },
              {
                name: 'sponsor',
                field: '5',
                value: null
              },
              {
                name: 'family',
                field: '6',
                value: null
              },
            ]
        }
    },
    methods:{
      sendData(field, value){
        let params = {}
        params['field' + field] = value
        this.axios.get('https://api.thingspeak.com/update?api_key=CX89Z07GCZ5UBC2J', {
          params :params
        }).then(res=>{
          if(res.data === 0){
            this.$notify({
              group: 'foo',
              type: 'warn',
              title: '失敗',
              text: '窮人只能15秒傳一次,等等幫你傳'
            });
            const _this = this
            setTimeout(()=>{
              _this.sendData(field, value)
            } , 15000)
          }else{
           this.$notify({
              group: 'foo',
              type: 'success',
              title: '成功',
              text: '資料已送出!'
            });
          }
        })
      },
      readData(store){
        this.axios.get(`https://api.thingspeak.com/channels/848827/fields/${store.field}/last.json`)
        .then(res=>{
          this.stores[store.field -1].value = res.data['field'+ store.field]
        })
      }
    },
    created(){
      this.stores.forEach(store=>{
        this.readData(store)
      })
    }
}
</script>

