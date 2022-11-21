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
                        <input class="input" type="text" placeholder="Text input">
                    </div>
                </div>
            </div>
            <div class="columns centered">
                <div class="field column is-12">
                    <label class="label">Street Address Two ( APT, STE )</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Text input">
                    </div>
                </div>
            </div>
            <div class="columns centered">
                <div class="field column is-4">
                    <label class="label">City</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Text input">
                    </div>
                </div>
                <div class="field column is-4">
                    <label class="label">State</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Text input">
                    </div>
                </div>
                <div class="field column is-4">
                    <label class="label">Zip Code</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Text input">
                    </div>
                </div>
            </div>
            <div class="columns centered">
                <div class="field column is-12">
                    <div class="field">
                        <label class="label">Shipping Method (Local Delivery is only for Dallas, Tx Residents)</label>
                        <div class="control">
                            <div class="select">
                                <select>
                                    <option>Local Dallas, Tx Pick-up and Delivery</option>
                                    <option>Mail-in: Fedex</option>
                                    <option>Mail-in: USPS</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>