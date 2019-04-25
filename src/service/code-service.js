
const code_showcase_data = [
    {
        id: "gameofur",
        heading: "Game of Ur",
        description: "Game of Ur is a board game based on gameboards found during the excavations carried out by an archaeologist called, Leonard Woolley, at the ancient Sumerian city of Ur,inside the royal tombs(The royal game of Ur, 1928). I've implemented it as a top-down, isometric, turn-based strategy game, exclusively for PC, which assigns players to play vs a computer opponent.",
        git:"",
        technologies: [
            "C#", "Photoshop"
        ],
        basepath: "C:\\",
        screenshots: [
            {
                caption: "Game of Ur - Preview",
                url: 'img/code/gourprev.gif'
            }
        ]
    },
    {
        id: "cara",
        heading: "CARA",
        description: "Cara is a simple face detection application made in React and clarifai api.",
        git:"",
        technologies: [
            "Javascript", "React", "CSS"
        ],
        basepath: "C:\\",
        screenshots: [
            {
                caption: "Cara - Preview",
                url: 'img/code/caraprev1.gif'
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
                caption: "Floating emojis",
                url: 'img/code/feprev.gif'
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