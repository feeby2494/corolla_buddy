<template>
    <div class="page-repair">
        <div class="columns is-multiline">
            <div class="column is-2"></div>
            <div class="column is-8">
                <ContactForm />
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
                    <RepairForm v-model="repairs[index]" />
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
                repairs: [0],
            }
        },
        methods: {
            addRepair() {
                this.repairs.push(0);
            },
            removeRepair() {
                this.repairs.pop(0);
            }
        }
    };
</script>