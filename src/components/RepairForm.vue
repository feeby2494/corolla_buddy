<template>
    <div class="card">
        <div class="card-content">
            <div class="columns centered">
                <div class="field column is-4">
                    <label class="label">Brand</label>
                    <div class="control">
                        <input v-model="currentRepair.brand" class="input" type="text" placeholder="Text input">
                    </div>
                </div>
                <div class="field column is-4">
                    <label class="label">Model</label>
                    <div class="control">
                        <input v-model="currentRepair.model" class="input" type="text" placeholder="Text input">
                    </div>
                </div>
                <div class="field column is-4">
                    <label class="label">Serial Number</label>
                    <div class="control">
                        <input v-model="currentRepair.serial"  class="input" type="text" placeholder="Text input">
                    </div>
                </div>
            </div>
            <div class="columns centered">
                <div class="field column is-12">
                    <label class="label">Issue Details</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="Textarea"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: [
            'currentRepair',
        ],
        methods: {
            // updateBrandEvent() {
            //     this.$emit('updateBrand', this.index)
            // },
            // updateModelEvent() {
            //     this.$emit('updateModel', this.index)
            // },
            // updateSerialEvent() {
            //     this.$emit('updateSerial', this.index)
            // }
        }
    };
</script>