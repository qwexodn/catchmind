<template>
    <div class="slider">
        <ul>
            <li><div><img src="/img/main/img_mVisual01.jpg" alt=""></div></li>
            <li><div><img src="/img/main/img_mVisual02.jpg" alt=""></div></li>
            <li><div><img src="/img/main/img_mVisual03.jpg" alt=""></div></li>
            <li>{{ cnt }}</li>
        </ul>
    </div>
</template>

<script>

export default {
    data(){
        return{
            cnt:10,
        }
    }
}
</script>
