<template>
  <div class="home">

    <button class="btn btn-primary mr-2 my-2" @click="test">Click</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Swal from 'sweetalert2'

export default {
  name: "Home",
  data() {
    return {
      access:""
    };
  },
  mounted(){
    //check for access token in the local storage
    var accessToken = window.localStorage.accessToken;

    if(accessToken != null){
      this.access = accessToken;
      console.log(accessToken);
      //redirect to callback
      this.$router.push('Callback');
    } else {
      //open swal to get access token
      Swal.fire({
  title: 'Login required',
  text: "To use the Media Hub, you'll need to log in to your Box account on the following page",
  icon: 'warning',
  confirmButtonColor: '#102535',
  confirmButtonText: 'Go to Box.com'
}).then((result) => {
  if (result.isConfirmed) {

    this.test();

    Swal.fire({
      title: 'Thank you!',
      text: 'Logging you into the Media Hub now...',
      icon: 'success',
      showConfirmButton: false
    })
  }
})
      
    }
  },
  methods: {
    test() {
      var baseUrl = "https://account.box.com/api/oauth2/authorize";
      var clientId = "arf4uj4hfq3cqfsrnwcm1tudhojeazka";
      var authorizationUrl = `${baseUrl}?client_id=${clientId}&response_type=code`;
      window.location.href = authorizationUrl;

    },
  },
};
</script>
