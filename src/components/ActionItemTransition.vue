<template>
    <div class="flex align-items-center justify-content-between p-3 surface-50 "
        style="cursor:pointer" @click="this.d_collapsed = !this.d_collapsed">
        <div class="align-items-center">
            <span class="text-900">{{ this.name }}</span>
            
        </div>
        <span class="flex align-items-center"><i :class="{ 'pi pi-chevron-up': !this.d_collapsed, 'pi pi-chevron-down': this.d_collapsed }"></i></span>
    </div>
    <transition name="p-toggleable-content">
        <div class="p-toggleable-content" v-show="!this.d_collapsed" role="region">
            <div class="p-3 pl-5">
                <p class="line-height-3 m-0">{{ content }}</p>
            </div>
        </div>
    </transition>
    <divider v-if="border_bottom" class="m-0 p-0" />
</template>

<script>

export default {
    name: 'ActionItemTransition',
    props: ['label', 'name', 'content', 'border_bottom'],
    data() {
        return {
            d_collapsed: true,
        }
    },
    mounted() {
        console.log(this.label, this.name, this.content, this.border_bottom)
    }
}
</script>