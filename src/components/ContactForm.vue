<template>
    <div class="card">
        <div class="card-header">
            <p class="card-header-title">
                Contact Info
            </p>
        </div>
        <div class="card-content">
            <div class="columns centered">
                <div class="field column is-6">
                    <label class="label">First Name</label>
                    <div class="control">
                        <input class="input" v-model="contact.firstName" type="text" placeholder="First Name">
                    </div>
                </div>
                <div class="field column is-6">
                    <label class="label">Last Name</label>
                    <div class="control">
                        <input v-model="contact.lastName"  class="input" type="text" placeholder="Last Name">
                    </div>
                </div>
            </div>
            <div class="columns centered">
                <div class="field column is-12">
                    <label class="label">Email</label>
                    <div class="control">
                        <input v-model="contact.email"  class="input" type="text" placeholder="Email">
                    </div>
                </div>
            </div>
            <div class="columns centered">
                <div class="field column is-12">
                    <label class="label">Phone</label>
                    <div class="control">
                        <input v-model="contact.phone"  class="input" type="text" placeholder="Phone">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'contact',
        ],
        methods: {
            
        }
    }
</script>