<template>
    <div class="page-repair">
        <div class="columns is-multiline">
            <div class="column is-2"></div>
            <div class="column is-8">
                <ContactForm 
                    v-model:contact="contact"
                    
                />
            </div>
            <div class="column is-2"></div>
            <div class="column is-2"></div>
            <div class="column is-8 centered">
                <AddressForm />
            </div>
            <div class="column is-2"></div>
            <div class="column is-2"></div>
            <div class="column is-8">
                <div class="card">
                    <div class="card-header"> 
                        <p class="card-header-title">
                            Devices on this Order
                        </p>
                    </div>
                    <div class="card-content">
                        <button class="button" type="number" @click="addRepair">Add Device</button>
                        <button class="button" type="number" @click="removeRepair">Remove Device</button>
                        <p>Number of Devices on Order: {{repairs.length}}</p>
                    </div>
                </div>
            </div>
            <div class="column is-2"></div>
            <div class="column is-2"></div>
            <div class="column is-8">
                <div v-for="(repair, index) in repairs" :key="index">
                    <RepairForm 
                        v-model:currentRepair="repairs[index]"
                    />
                </div>
                
            </div>
            <div class="column is-2"></div>
            <div class="column is-2"></div>
            <div class="column is-8 centered">
                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link">Submit</button>
                    </div>
                    <div class="control">
                        <button class="button is-link is-light">Cancel</button>
                    </div>
                </div>
            </div>
            <div class="column is-2"></div>
        </div>
    </div>
</template>


<script>
    import store from '@/store'
    import RepairForm from "../components/RepairForm.vue"
    import ContactForm from "../components/ContactForm.vue"
    import AddressForm from "../components/AddressForm.vue"

    export default {
        components: {
            RepairForm,
            ContactForm,
            AddressForm
        },
        data() {
            return {
                repairs: [{
                    brand: '',
                    model: '',
                    serial: ''
                }],
                contact: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: ''
                },
                address: {},
                deliveryMethod: null
            }
        },
        mounted() {
            this.repairs = this.$store.state.repairs
        },
        methods: {
            addRepair() {
                const repair = {
                    brand: '',
                    model: '',
                    serial: ''
                }

                this.$store.commit('addRepair', repair);
            },
            removeRepair() {
                const repair = {
                    brand: '',
                    model: '',
                    serial: ''
                }

                this.$store.commit('removeRepair', repair);
            }, // Using Vuex Store in this case my be just over repaeting myself and making things more complicated
            // updateBrand(index, $event) {
            //     this.repairs[index].brand = event.target.value
            //     // this.$store.commit('updateBrand', index, this.repairs[index].brand )
            // },
            // updateModel(index, $event) {
            //     this.repairs[index].model = event.target.value
            //     // this.$store.commit('updateModel', index, event.target.value)
            // },
            // updateSerial(index, $event) {
            //     this.repairs[index].serial = event.target.value
            //     // this.$store.commit('updateSerial', index, event.target.value)
            // },
           
        }
    };
</script>