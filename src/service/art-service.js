
const art_service_data = [
    {
        id:0,
        caption: "The path",
        class:"cell0",
        url:"/img/art/thepath.jpg",
    },
    {
        id:1,
        caption: "An ocean between us",
        class:"cell1-1",
        url:"/img/art/aobu-1.jpg",
    },
    {
        id:2,
        caption: "An ocean between us",
        class:"cell1-2",
        url:"/img/art/aobu-2.jpg",
    },
    {
        id:3,
        caption: "An ocean between us",
        class:"cell1-3",
        url:"/img/art/aobu-3.jpg",
    },
    {
        id:4,
        caption: "An ocean between us",
        class:"cell1-3",
        url:"/img/art/aobu-3.jpg",
    },
    {
        id:5,
        caption: "The Storm",
        class:"cell2",
        url:"/img/art/lighthouse-storybook.jpg",
    },
    {
        id:6,
        caption: "Christmas plea",
        class:"cell3-1",
        url:"/img/art/cp-1.jpg",
    },
    {
        id:7,
        caption: "Christmas plea",
        class:"cell3-2",
        url:"/img/art/cp-2.jpg",
    },
    {
        id:8,
        caption: "Live free, die well",
        class:"cell4-1",
        url:"/img/art/lfdw-1.jpg",
    },
    {
        id:9,
        caption: "Live free, die well",
        class:"cell4-2",
        url:"/img/art/lfdw-2.jpg",
    },
    {
        id:10,
        caption: "Live free, die well",
        class:"cell4-3",
        url:"/img/art/lfdw-3.jpg",
    }
]

const art_quotes_data =[
    {
        id:0,
        quote: "Creativity is a drug I cannot live without.",
        author:"Cecil B. DeMille",
        class:"quote0"
    }
]

const fetch = () => art_service_data;
const fetchQuotes = () => art_quotes_data;

module.exports = {
    fetch,
    fetchQuotes
}