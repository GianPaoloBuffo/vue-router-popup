<template>
    <div
        role="dialog"
        :aria-label="label"
        aria-modal="true"
        class="PopupWrap"
        :class="{ 'PopupWeap--centered': centered }"
    >
        <div
            class="PopupWrap__backdrop"
            @click="$emit('close')"    
        >
            <slot name="backdrop"/>
        </div>
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'PopupWrap',
    props: {
        centered: {
            default: true,
            type: Boolean,
        },
        focusElement: {
            default: null,
            type: Object,
        },
        label: {
            required: true,
            type: String,
        },
    },
    mounted() {
        const close = event => {
            const ESC = 27;
            if (event.keyCode !== ESC) return;
            this.$emit('close');
        }

        // Close the dialog when the user presses ESC
        document.addEventListener('keyup', close);
        this.$on('hook:destroyed', () => {
            this.deactivate();
        });
    },
    methods: {
        activate() {
            // Save the current active element so we can restore it when closing the dialog
            this.previousActiveElement = document.activeElement;

            // Prevent the background from being scrollable
            this.disableScrolling();

            // Prevrnt elements in the background from being focused when pressing TAB
            this.inert();

            // Focus the first focusable element in the dialog
            this.focusFirstDescendant();
        },
        async deactivate() {
            this.enableScrolling();
            await this.inert(false);
            this.restoreFocus();
        },
        // Disables scrolling on all devices
        disableScrolling() {
            this.scrollPosition = window.pageYOffset;

            const $body = document.querySelector('body');
            $body.style.oveflow = 'hidden';
            $body.style.position = 'fixed';
            $body.style.top = `${this.scrollPosition}px`;
            $body.style.width = '100%';
        },
        enableScrolling() {
            const $body = document.querySelector('body');

            $body.style.removeProperty('overflow');
            $body.style.removeProperty('position');
            $body.style.removeProperty('top');
            $body.style.removeProperty('width');

            window.scrollTo(0, this.scrollPosition);
        },
        // Make all elements except the overlay inert
        async inert(status = true) {
            await this.$nextTick();
            [...this.$root.$el.children].forEach(child => {
                if (child === this.$el || child.contains(this.$el)) return;
                child.inert = status;
            });
        },
        focusFirstDescendant() {
            const focusable = this.$el.querySelectorAll('button', '[href]', 'input', 'select', 'textarea', '[tabIndex]:not([tabIndex="-1"])');
            if (focusable[0] && focusable[0].focus) focusable[0].focus();
        },
        restoreFocus() {
            const element = this.focusElement || this.previousActiveElement;
            if (element && element.focus) element.focus();
        },
    },
};
</script>

<style scoped>
    .PopupWrap {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .PopupWrap--centered {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .PopupWrap__backdrop {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
</style>
