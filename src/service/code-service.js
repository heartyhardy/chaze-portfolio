
const code_showcase_data = [
    {
        id: "gameofur",
        heading: "Game of Ur",
        description: "Game of Ur is a board game based on gameboards found during the excavations carried out by an archaeologist called, Leonard Woolley, at the ancient Sumerian city of Ur,inside the royal tombs(The royal game of Ur, 1928). I've implemented it as a top-down, isometric, turn-based strategy game, exclusively for PC, which assigns players to play vs a computer opponent.",
        git:"https://github.com/heartyhardy/Game-of-Ur",
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
        git:"https://github.com/heartyhardy/Cara-FrontEnd",
        technologies: [
            "Javascript", "React", "CSS"
        ],
        basepath: "C:\\",
        screenshots: [
            {
                caption: "Cara - Preview",
                url: 'img/code/caraprev.gif'
            }
        ]
    },
    {
        id: "floatingemojis",
        heading: "Floating Emojis",
        description: "Floating emojis lists a bunch of emojis filtered by the type. Click to copy!",
        git:"https://github.com/heartyhardy/floating-emojis",
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
    },
    {
        id: "swars",
        heading: "Space wars",
        description: "Space wars is a simple 2d space shooter. Enemies are spawned on random paths and game continues unitl player dies. Shoot em up!",
        git:"https://github.com/heartyhardy/space-wars-experimental",
        technologies: [
            "C#", "Unity"
        ],
        basepath: "C:\\",
        screenshots: [
            {
                caption: "Space wars",
                url: 'img/code/swprev.gif'
            }
        ]
    },
    {
        id: "catchycolors",
        heading: "Catchy colors",
        description: "Catchy colors lets you generate an HSL based color scheme quickly. All you have to do is define a base color, specify the number of swatches to be generated and click Go!. This project is currently under development and I'm planning to make it a fully fledged color scheme utility in the future.",
        git:"https://github.com/heartyhardy/catchy-colors",
        technologies: [
            "Javascript", "React", "CSS"
        ],
        basepath: "C:\\",
        screenshots: [
            {
                caption: "Catchy colors",
                url: 'img/code/catchyprev.gif'
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