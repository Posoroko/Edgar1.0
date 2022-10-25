<template>
    <section class="searchSection width100 marginTop20">
        
        <div class="topOptionsBox">
            <p class="sectionTitle tab">
                Search
            </p>

            <span class="searchSectionCollapse tab icon">
                arrow_drop_down
            </span>
        </div>
        <section class="sectionContent">
            <textarea class="searchBar" name="searchBar" id="searchBar"></textarea>
            <div class="optionsBox">
                <!-- language, perfect match -->
            </div>

            <div class="parameterBigBox">
                <div class="parameterStripe" v-for="(parameter, index) in shownParameters" :key="`param${index}`">

                </div>
            </div>
        </section>

    </section>
</template>

<script setup>
import { ref } from 'vue'


</script>

<style scoped>

.topOptionsBox {
    width: 100%;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
}
.topOptionsBox .tab {
    color: var(--primary-color);
    background-color: var(--secondary-color);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
.sectionTitle {
    font-size: 14px;
    padding: 5px 10px 0px 10px;

}
.searchSectionCollapse {
    font-size: 18px;
    /* padding: 2px 2px 0px 2px; */
}

.sectionContent {
    width: 100%;
    background-color: var(--secondary-color);
    padding: 10px;
    border-radius: 10px;
}

.searchBar {
    width: 100%;
    font-size: 18px;
    color: var(--secondary-color);
    background-color: var(--primary-color);
    padding: 10px 15px;
    border: none;
    border-radius: 20px;
    resize: vertical;
}

</style>