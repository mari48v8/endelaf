// an array of all donations, every object in the array is a donation
donations[
    {
        id: "0", // auto genereted
        item: {
            name: "dog",
            id: "dogToy",
            value: "100",
        },
        uID: "xxx", //userId from firebase
        createdAt: "2018-12-03T15:24:52.770Z"
    }
]

// Users
users[
    {
        name: "Marie",
        lastname: "Dyrmose",
        address: "gade 1",
        zip: "1424",
        city: "Kbh",
        email: "100",
        mobile: "22 22 22 22",
        uId: "xxxxxxxxxxxxxxx",
    }
]

// categories data taken from the database and displayed in the donation form
categories[
    {
        name: "dog",
        items: [{
            type: "food",
            value: "200",
        },
        {
            type: "toy",
            value: "100",
        },
        {
            type: "dogJacket",
            value: "300",
        }]
    },

    {
        name: "clothes",
        items: [{
            type: "socks",
            value: "100",
            selected: "true"
        },
        {
            type: "winterhat",
            value: "200",
            selected: "false"
        },
        {
            type: "winterJacket",
            value: "300",
            selected: "true"
        }]
    },

    {
        name: "toiletries",
        items: [{
            type: "toothbrush",
            value: "100",
            selected: "true"
        },
        {
            type: "femaleHygine",
            value: "200",
            selected: "false"
        },
        {
            type: "shaving",
            value: "300",
            selected: "false"
        }]
    }

]

