<style scoped>
.sitefooter {
    position: relative;
    display: flex;
    align-items: center;
    width: 101vw;
    margin-left: calc(-50vw + 50%);
    min-height: 110px;
    background-color: #080E98;
    color: white;
    overflow: hidden;
    flex-shrink: 0;
}

.footerbrand {
    display: flex;
    align-items: center;
    align-self: stretch;

    flex: 0 0 32%;
    padding: 0 5rem 0 2rem;

    background-color: #4a8fc0;
    clip-path: polygon(0 0, 100% 0, 72% 100%, 0 100%);

    font-size: 2rem;
    font-weight: bold;
    color: white;
    white-space: nowrap;
}

.footerinfo {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 1rem 2rem;
    gap: 8rem;
}

.footeritem {
    display: flex;
    align-items: center;
    gap: .75rem;
}

.footeritem .material-icons {
    font-size: 2rem;
}

.footeritem p {
    margin: 0;
    font-size: .95rem;
    line-height: 1.3;
}
</style>

<template>
    <footer class="sitefooter">
        <div class="footerbrand">
            <span>ecosat.com.mx</span>
        </div>

        <div class="footerinfo">
            <div class="footeritem">
                <span class="material-icons">call</span>
                <div>
                    <p>614-432-2500</p>
                    <p>800-326-0728</p>
                </div>
            </div>

            <div class="footeritem">
                <span class="material-icons">location_on</span>
                <div>
                    <p>Av. División del Norte #201</p>
                    <p>Chihuahua, Chih. México.</p>
                </div>
            </div>
            
            <div class="footeritem">
                <span class="material-icons">public</span>
                <p>ecosat.com.mx</p>
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>