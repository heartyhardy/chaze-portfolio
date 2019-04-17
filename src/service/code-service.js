
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
                caption: "Game of Ur - Preview",
                url: '/img/gourprev.gif'
            }
        ]
    },
    {
        id: "cara",
        heading: "CARA",
        description: "Cara description",
        git:"",
        technologies: [
            "Javascript", "React", "CSS"
        ],
        basepath: "C:\\",
        screenshots: [
            {
                caption: "Cara - Preview",
                url: '/img/caraprev.gif'
            }
        ]
    },
    {
        id: "floatingemojis",
        heading: "Flaoting Emojis",
        description: "Floating emojis description",
        git:"",
        technologies: [
            "Javascript", "React", "CSS"
        ],
        basepath: "C:\\",
        screenshots: [
            {
                caption: "Cara - Preview",
                url: '/img/caraprev.gif'
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