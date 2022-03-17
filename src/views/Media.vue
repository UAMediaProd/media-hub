<template>
  <div class="media">
    <img :src="link"/>
    <p>{{ name }}</p>

     <button class="btn btn-primary mr-2 my-2" @click="download()">
      Download {{name}}
    </button>

  </div>
</template>

<style scoped>
.media img {
  width: 100%;
  margin: auto;
  max-width: 600px;
}
</style>

<script>
// @ is an alias to /src

export default {
  name: "Media",
  data() {
    return {
      name: this.$route.params.name,
      link: this.$route.params.link,
      id: this.$route.params.id,
      access: this.$route.params.access

    };
  },
  mounted(){


  },
  methods: {
    download(){
      //axios request the resource
      axios.get("https://api.box.com/2.0/files/" + this.id + "/content", {
        headers: {
            Authorization: "Bearer " + this.access,
          },
 
      }).then((response) => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
     var fileLink = document.createElement('a');
  
     fileLink.href = fileURL;
     fileLink.setAttribute('download', this.name);
     document.body.appendChild(fileLink);
   
     fileLink.click();
});
    }
  }
};
</script>
