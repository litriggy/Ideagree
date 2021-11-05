export default {
    methods: {
      toggle_comment(id) {
            var x = document.getElementById('comments-'+id)
            console.log(x)
            if (x.style.display === "none") {
                x.style.display = "flex";
            } else {
                x.style.display = "none";
            }
      }
    },
  };