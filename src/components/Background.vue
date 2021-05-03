<template>
  <p v-if="currentBackground.link != '' && currentBackground.author != ''">
    Photo par <a target="_blank" v-bind:href="currentBackground.link">{{ currentBackground.author }}</a> 

    <span v-if="currentBackground.site != '' && currentBackground.siteurl != ''">
      / <a target="_blank" v-bind:href="currentBackground.siteurl">{{currentBackground.site}}</a>
    </span>
  </p>
</template>

<script>
export default {
  name: 'Background',
  data() {
    return {
      background_source: 0, // 0 => Random from the default list | 1 => Fixed from default list | 2 => Uploaded
      backgroundId: null, // The id of the backgroud in the default backgrounds list if the user choose one
      theme: null,
      currentBackground: { // Data from the current loaded background
        url: null,
        link: null,
        author: null,
        site: null,
        siteurl: null
      },
      backgrounds: [
        {
        "url": "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "link": "https://www.pexels.com/fr-fr/photo/feuilles-vertes-1072179/",
        "user": "Cátia Matos",
        "site": "Pexel",
        "siteurl": "https://www.pexels.com/"
        }
      ],
    };
  },
  methods: {
    /**
     * Set a background from an ID 
     * in the default background list
     */
    setBackgroundFromId: function(id) {
        let bg = this.backgrounds[id];

        this.currentBackground.url = bg.url;
        this.currentBackground.link = bg.link;
        this.currentBackground.author = bg.user;
        this.currentBackground.site = bg.site;
        this.currentBackground.siteurl = bg.siteurl;
        sessionStorage["bg_url"] = this.currentBackground.url;
        sessionStorage["bg_link"] = this.currentBackground.link;
        sessionStorage["bg_author"] = this.currentBackground.author;
        sessionStorage["site"] = this.currentBackground.site;
        sessionStorage["siteurl"] = this.currentBackground.siteurl;
    },
    /**
     * Apply the background stored in 
     * currentBackground to the HTML DOM
     */
    applyBackground: function () {
        document.getElementById("app").style.background = "url(" + this.currentBackground.url + ") no-repeat center fixed";
        document.getElementById("app").style.backgroundSize = "cover";
    },
    /**
     * Get a random background ID from the
     * default background list
     */
    getRandomIdFromDefaultList: function() {
      let nbBackgroundsInList = this.backgrounds.length;
      let randomID = Math.floor(Math.random() * nbBackgroundsInList);
      return randomID;
    }
  },
  created() {
    switch (this.background_source) {
      case 0: // Random from the default list
        this.setBackgroundFromId(this.getRandomIdFromDefaultList())
        break;

      case 1: // Fixed from default list
        this.setBackgroundFromId(this.backgroundId);
        break; 

      case 2: // Uploaded
        //TODO make functions for upload a background
        break; 
    }
    this.applyBackground();
  }
}
</script>

<style scope>
  a, p {
    transition-duration: 0.2s;
    color: var(--text-darker);
    text-decoration: none;
  }
  a:hover {
    color: var(--text);
  }
</style>
