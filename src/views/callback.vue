<template>
  <div class="page">
    <p>Hi {{ user }}!</p>
    <br /><br />

    <div class="grid" v-if="images.length > 0">
      <router-link v-for="item in images"
          v-bind:key="item"
        v-bind:to="{
          name: 'Media',
          params: {
            id: item.id,
            name: item.name,
            link: item.link,
            access: access,
          },
        }"
      >
        <div
          v-if="item.type == 'image'"
          class="grid-item"
          v-bind:style="{ backgroundImage: 'url(\'' + item.link + '\')' }"
        >
        
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.about {
  padding: 20px;
}
.grid {
  display: flex;
  flex-wrap: wrap;
}

.grid-item {
  width: 250px;
  height: 250px;
  text-align: center;
  margin: 1.5em;
  padding: 1em;
  transition: all 0.25s ease-in-out;
  background-size: cover;
  background-position: 50%;
  border-radius: 8px;
  background-color: rgb(228, 228, 228);
}

.grid-item:hover {
  box-shadow: 0 15px 15px rgba(50, 50, 93, 0.2), 0 5px 10px rgba(0, 0, 0, 0.1) !important;
  cursor: pointer;
  transform: translateY(-2px);
  border-radius: 0;
}

.grid-item img {
  margin: auto;
}
</style>


<script>
var querystring = require("querystring");

export default {
  name: "callback",
  data() {
    return {
      access: "",
      results: null,
      images: [],
      user: null,
    };
  },
  mounted() {
    const authenticationUrl = "https://api.box.com/oauth2/token";
    var accessToken;

    if (window.localStorage.accessToken == null) {
      //get query from url
      var code = querystring.parse(window.location.search.substring(1)).code;

      axios
        .post(
          authenticationUrl,
          querystring.stringify({
            grant_type: "authorization_code",
            code: code,
            client_id: "arf4uj4hfq3cqfsrnwcm1tudhojeazka",
            client_secret: "60lAp5OUOMOdKSLEo60PvDbIF09P600J",
          })
        )
        .then((response) => {
          accessToken = response.data.access_token;

          window.localStorage.accessToken = accessToken;
          this.access = accessToken;
          this.getMe();
          this.getMediaFolder();
        });
    } else {
      accessToken = window.localStorage.accessToken;

      this.access = accessToken;
      this.getMe();
      this.getMediaFolder();
    }
  },
  methods: {
    getMe() {
      //axios get request to get user info
      axios
        .get("https://api.box.com/2.0/users/me", {
          headers: {
            Authorization: "Bearer " + this.access,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.user = response.data.name.split(" ")[0];
        });
    },
    getMediaFolder() {
      //125596063649

      axios
        .get("https://api.box.com/2.0/folders/125596063649/items", {
          headers: {
            Authorization: "Bearer " + this.access,
          },
        })
        .then((response) => {
          let results = response.data.entries;
          this.results = results;

          for (var i = 0; i < this.results.length; i++) {
            this.getFileInfo(results[i].id, results[i].name);
          }
        });
    },
    getFileInfo(fileID, fileName) {
      axios
        .get("https://api.box.com/2.0/files/" + fileID, {
          headers: {
            Authorization: "Bearer " + this.access,
          },
        })
        .then((response) => {
          //check if shared link exists
          if (response.data.shared_link != null) {
            var link = response.data.shared_link.download_url;
            //function to build the array entry
            this.createEntry(fileID, fileName, link);
          } else {
            this.createSharedLink(fileID, fileName);
          }
        });
    },

    createSharedLink(fileID, fileName) {
      axios
        .put(
          "https://api.box.com/2.0/files/" + fileID,
          {
            shared_link: {
              access: "open",
              permissions: {
                can_download: true,
              },
            },
          },
          {
            headers: {
              Authorization: "Bearer " + this.access,
            },
          }
        )
        .then((fileRes) => {
          var link = fileRes.data.shared_link.download_url;

          this.createEntry(fileID, fileName, link);
        });
    },

    createEntry(id, name, link) {
      var type;
      //get the file extension
      var ext = link.split(/[#?]/)[0].split(".").pop().trim();
      if (ext == "jpg" || ext == "jpeg" || ext == "png" || ext == "gif") {
        type = "image";
      } else if (ext == "mp4" || ext == "mov" || ext == "avi" || ext == "wmv") {
        type = "video";
      } else {
        type = "other";
      }

      this.images.push({
        id: id,
        name: name,
        link: link,
        type: type,
      });
    },
  },
};
</script>
