export default {
    methods: {
      mixin_autoResize_resize(event) {
        event.target.style.height = "auto";
        event.target.style.height = `${event.target.scrollHeight}px`;
        if(event.target.value == ''){
          event.target.style.height = `16px`;
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.$el.setAttribute("style", "height",
        `${this.$el.scrollHeight}px`);
      });
    }
  };