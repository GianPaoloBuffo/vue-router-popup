<template>
    <Portal to="popup">
        <PopupWrap :label="label" @close="$emit('close')">
            <PopupOverlay slot="backdrop"/>
            <div class="ModalDialog__content">
                <slot/>
                <div class="ModalDialog__buttons">
                    <button @click="$emit('no')">No</button>
                    <button @click="$emit('yes')">Yes</button>
                </div>
            </div>
        </PopupWrap>
    </Portal>
</template>

<script>
import PopupWrap from './PopupWrap.vue';
import PopupOverlay from './PopupOverlay.vue';

export default {
  name: 'PopupModalDialog',
  props: {
    label: {
      required: true,
      type: String
    },
  },
  components: {
    PopupWrap,
    PopupOverlay,
  },
}
</script>

<style scoped>
.ModalDialog__content {
  background-color: #fff;
  padding: 2em;
}

.ModalDialog__buttons {
  margin-top: 1em;
  text-align: right;
}
</style>