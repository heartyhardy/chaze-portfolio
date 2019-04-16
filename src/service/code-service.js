const code_showcase_data = [
    {
        id: "gameofur",
        heading: "Game of Ur",
        description: "Gme of Ur description",
        git:"",
        technologies: [
            "C#", "Photoshop"
        ],
        basepath: "C:\\",
        screenshots: [
            {
                caption: "",
                url: ""
            }
        ]
    }
]

const fetch = () => code_showcase_data;
const getShowcaseById = (id) => code_showcase_data.find(showcase => showcase.d === id)[0];
const getTechStack = (id) => code_showcase_data.find(showcase => showcase.id === id)[0].technologies;
const getScreenshots = (id) =>  code_showcase_data.find(showcase => showcase.id === id)[0].screenshots;

module.exports = {
    fetch,
    getShowcaseById,
    getScreenshots,
    getTechStack
}