
const art_service_data = [
    {
        id:0,
        caption: "The path",
        class:"cell0",
        url:"img/art/thepath.jpg",
    },
    {
        id:1,
        caption: "An ocean between us",
        class:"cell1-1",
        url:"img/art/aobu-1.jpg",
    },
    {
        id:2,
        caption: "An ocean between us",
        class:"cell1-2",
        url:"img/art/aobu-2.jpg",
    },
    {
        id:3,
        caption: "An ocean between us",
        class:"cell1-3",
        url:"img/art/aobu-3.jpg",
    },
    {
        id:4,
        caption: "An ocean between us",
        class:"cell1-3",
        url:"img/art/aobu-3.jpg",
    },
    {
        id:5,
        caption: "The Storm",
        class:"cell2",
        url:"img/art/lighthouse-storybook.jpg",
    },
    {
        id:6,
        caption: "Christmas plea",
        class:"cell3-1",
        url:"img/art/cp-1.jpg",
    },
    {
        id:7,
        caption: "Christmas plea",
        class:"cell3-2",
        url:"img/art/cp-2.jpg",
    },
    {
        id:8,
        caption: "Live free, die well",
        class:"cell4-1",
        url:"img/art/lfdw-1.jpg",
    },
    {
        id:9,
        caption: "Live free, die well",
        class:"cell4-2",
        url:"img/art/lfdw-2.jpg",
    },
    {
        id:10,
        caption: "Live free, die well",
        class:"cell4-3",
        url:"/img/art/lfdw-3.jpg",
    },
    {
        id:11,
        caption: "Heart of courage",
        class:"cell5-1",
        url:"/img/art/hoc-1.jpg",
    },
    {
        id:12,
        caption: "Heart of courage",
        class:"cell5-2",
        url:"/img/art/hoc-2.jpg",
    },
    {
        id:13,
        caption: "Heart of courage",
        class:"cell5-3",
        url:"img/art/hoc-3.jpg",
    },
    {
        id:14,
        caption: "Champaign in my lungs",
        class:"cell6-1",
        url:"img/art/ciml-1.jpg",
    },
    {
        id:15,
        caption: "Champaign in my lungs",
        class:"cell6-2",
        url:"img/art/ciml-2.jpg",
    },
    {
        id:16,
        caption: "Champaign in my lungs",
        class:"cell6-3",
        url:"img/art/ciml-3.jpg",
    },
    {
        id:17,
        caption: "Black forest",
        class:"cell7",
        url:"img/art/bf.jpg",
    },
    {
        id:18,
        caption: "Mystic lands",
        class:"cell8-1",
        url:"img/art/ml-1.jpg",
    },
    {
        id:19,
        caption: "Mystic lands",
        class:"cell8-2",
        url:"img/art/ml-2.jpg",
    },
    {
        id:20,
        caption: "Mystic lands",
        class:"cell8-3",
        url:"img/art/ml-3.jpg",
    },
    {
        id:21,
        caption: "A Charmed life",
        class:"cell9-1",
        url:"img/art/acl-1.jpg",
    },
    {
        id:22,
        caption: "A Charmed life",
        class:"cell9-2",
        url:"img/art/acl-2.jpg",
    },
    {
        id:23,
        caption: "A Charmed life",
        class:"cell9-3",
        url:"img/art/acl-3.jpg",
    },
    {
        id:24,
        caption: "Chasing horizons",
        class:"cell10-1",
        url:"img/art/ch-1.jpg",
    },
    {
        id:25,
        caption: "Chasing horizons",
        class:"cell10-2",
        url:"img/art/ch-2.jpg",
    },
    {
        id:26,
        caption: "Chasing horizons",
        class:"cell10-3",
        url:"img/art/ch-3.jpg",
    },
]

const art_quotes_data =[
    {
        id:0,
        quote: "Creativity is a drug I cannot live without.",
        author:"Cecil B. DeMille",
        class:"quote0"
    },
    {
        id:1,
        quote: "You can't wait for inspiration, you have to go after it with a club",
        author:"Jack London",
        class:"quote1"
    },
    {
        id:2,
        quote: "You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity",
        author:"John Romero",
        class:"quote2"
    },
    {
        id:3,
        quote: "As practice makes perfect, I cannot but make progress; each drawing one makes, each study one paints, is a step forward",
        author:"Vincent van Gogh",
        class:"quote3"
    },
    {
        id:4,
        quote: "I would rather die of passion than of boredom",
        author:"Vincent van Gogh",
        class:"quote4"
    },
    {
        id:5,
        quote: "One can have no smaller or greater mastery than mastery of oneself",
        author:"Leonardo da Vinci",
        class:"quote5"
    },
    {
        id:6,
        quote:"Sunsets are proof that endings can often be beautiful too",
        author: "Beau Taplin",
        class:"quote6"
    }
]

const fetch = () => art_service_data;
const fetchQuotes = () => art_quotes_data;

module.exports = {
    fetch,
    fetchQuotes
}