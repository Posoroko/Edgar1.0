<template>
    <section class="searchSection width100 marginTop20">
        
        <div class="topOptionsBox">
            <p class="sectionTitle tab">
                Search
            </p>

            <span class="searchSectionCollapse">
              <span class="icon">arrow_drop_down</span>
            </span>
        </div>

        <section class="sectionContent">
            <textarea class="searchBar" name="searchBar" id="searchBar"></textarea>
            
            <div class="paramStripesBox">
                
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
    align-items: flex-end;
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
    height: 15px;
    width: 15px;
    background-color: var(--secondary-color);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    position: relative;
}

.searchSectionCollapse .icon{
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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