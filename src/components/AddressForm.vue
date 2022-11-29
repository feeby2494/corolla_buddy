<template>
    <div class="card">
        <div class="card-header">
            <p class="card-header-title">
                Address Info
            </p>
        </div>
        <div class="card-content">
            <div class="columns centered">
                <div class="field column is-12">
                    <label class="label">Street Address One</label>
                    <div class="control">
                        <input v-model="address.streetOne" class="input" type="text" placeholder="Text input">
                    </div>
                </div>
            </div>
            <div class="columns centered">
                <div class="field column is-12">
                    <label class="label">Street Address Two ( APT, STE )</label>
                    <div class="control">
                        <input v-model="address.streetTwo" class="input" type="text" placeholder="Text input">
                    </div>
                </div>
            </div>
            <div class="columns centered">
                <div class="field column is-4">
                    <label class="label">City</label>
                    <div class="control">
                        <input v-model="address.city" class="input" type="text" placeholder="Text input">
                    </div>
                </div>
                <div class="field column is-4">
                    <label class="label">State</label>
                    <div class="control">
                        <input v-model="address.state" class="input" type="text" placeholder="Text input">
                    </div>
                </div>
                <div class="field column is-4">
                    <label class="label">Zip Code</label>
                    <div class="control">
                        <input v-model="address.zip" class="input" type="text" placeholder="Text input">
                    </div>
                </div>
            </div>
            <div class="columns centered">
                <div class="field column is-12">
                    <div class="field">
                        <label class="label">Shipping Method (Local Delivery is only for Dallas, Tx Residents)</label>
                        <div class="control">
                            <div>Selected: {{ deliveryMethod }}</div>
                            <div class="select">
                                <select :value="deliveryMethod" @change="$emit('update:deliveryMethod', $event.target.value)">
                                    <option disabled value="">Please select one</option>
                                    <option v-for="option in deliveryMethodOptions" :value="option.value" >
                                        {{ option.text }}
                                    </option>    
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="field" v-if="deliveryMethod === 'local'"> 
                        <label class="label">Date for Collection ("YYYY-MM-DD")</label>
                        <div class="control">
                            <input  :value="collectionDate" @change="$emit('update:collectionDate', $event.target.value)" class="input" type="text" placeholder="YYYY-MM-DD" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'address',
            'deliveryMethod',
            'deliveryMethodOptions',
            'collectionDate'
        ]
    }
    

</script>