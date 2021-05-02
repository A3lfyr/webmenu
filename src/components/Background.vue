<script>
export default {
  name: 'Background',
  data() {
    return {
      currentBackgroundImage: {
            url: null,
            link: null,
            author: null,
            site: null,
            siteurl: null
        },
        theme: null,
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
    setBackground: function(id) {
        let bg = this.backgrounds[id];
        console.log("Background Choose : ");
        console.log(bg);

        this.currentBackgroundImage.url = bg.url;
        this.currentBackgroundImage.link = bg.link;
        this.currentBackgroundImage.author = bg.user;
        this.currentBackgroundImage.site = bg.site;
        this.currentBackgroundImage.siteurl = bg.siteurl;
        sessionStorage["bg_url"] = this.currentBackgroundImage.url;
        sessionStorage["bg_link"] = this.currentBackgroundImage.link;
        sessionStorage["bg_author"] = this.currentBackgroundImage.author;
        sessionStorage["site"] = this.currentBackgroundImage.site;
        sessionStorage["siteurl"] = this.currentBackgroundImage.siteurl;

        this.applyBackground();
    },
    applyBackground: function () {
        document.getElementById("app").style.background = "url(" + this.currentBackgroundImage.url + ") no-repeat center fixed";
        document.getElementById("app").style.backgroundSize = "cover";
    },
  },
  created() {
    this.setBackground(0);
        console.log(this.backgrounds)
  }
}
</script>

<style scoped>

</style>
