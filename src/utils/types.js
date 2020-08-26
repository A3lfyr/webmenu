
const Link = new (class {
    constructor(name, url) {
        this.name = name,
        this.url = url
    }
})();


const SearchEngine = {
    GOOGLE: {
        name: "Google",
        url: "https://www.google.com/search"
    },
    BING: {
        name: "Bing",
        url: "https://www.bing.com/search"
    },
    DUCKDUCKGO: {
        name: "DuckDuck Go",
        url: "https://duckduckgo.com/?"
    },
    QWANT: {
        name: "Qwant",
        url: "https://www.qwant.com/?q="
    },
}

const QuoteSource = {
    KAAMELOTT: {
        name: "Kaamelott",
        url: "http://kaamelott.reiter.tf/api/random"
    }
}
