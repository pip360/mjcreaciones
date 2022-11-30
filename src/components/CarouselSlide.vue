<template>
    <transition :name="dir">
        <div v-show="visible">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            index  : 0,
        }
    },
    computed : {
        visible() {
            return this.index === this.$parent.index;
        },
        dir() {
            console.log(this.$parent.slideDirection)
            return this.$parent.slideDirection;
        },
    }
}
</script>


<style scoped>

.slider{
    display: flex;
    justify-content: center;
    overflow: hidden;
    animation: cambio 10s infinite
    alternate linear;
    list-style: none;
    
  }
  @keyframes cambio{
    0%{margin-left: 0;}
    20%{margin-left: 0;}
  
    25%{margin-left: -100;}
    45%{margin-left: -100;}
  
    50%{margin-left: -200;}
    70%{margin-left: -200;}
  
    75%{margin-left: -300;}
    100%{margin-left: -300;}
  }
    .slide-left-enter-active {
        animation: slide-left-in 0.5s ease-in;
    }
    .slide-left-leave-active {
        animation: slide-left-out 0.5s ease-in;
    }

    @keyframes slide-left-in{
        from  { transform: translateX(-100%);}
        to { transform: translateX(0);} 
    }

    @keyframes slide-left-out{
        from  { transform: translateX(0%);}
        to { transform: translateX(100%);} 
    }
    

    .slide-right-enter-active {
        animation: slide-right-in 0.5s ease-in;
    }
    .slide-right-leave-active {
        animation: slide-right-out 0.5s ease-in;
    }
    @keyframes slide-right-out{
        from  { transform: translateX(0%);}
        to { transform: translateX(-100%);} 
    }
    @keyframes slide-right-in{
        from  { transform: translateX(100%);}
        to { transform: translateX(0);} 
    }
</style>