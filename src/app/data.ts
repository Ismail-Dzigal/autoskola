export const candidates = [
    {
        "id": 1,
        "ime": "Ismail",
        "prezime": "Džigal",
        "imeOca": "Selim",
        "jmbg": "1806991170015",
        "mjestoRodjenja": "Sarajevo",
        "drzavljanstvo": "Bosansko",
        "brojLk": "09GHT4518",
        "telefon": "+38761487369",
        "emailAdresa": "ismail.dzigal@edu.fit.ba",
        "lozinka": "123456",
        "ponovljenaLozinka": "123456",
        "slika":"",
        "uplate": [
            {
               "id": 1,
               "iznos": 300,
               "datum": new Date('2021, 07, 15'),
            },
            {
                "id": 2,
                "iznos": 120,
                "datum": new Date('2021, 08, 15'),
            }
        ],
        "ispiti": [{

        }],
        "dokumenti": [{

        }]
    },
    {
        "id": 2,
        "ime": "Sead",
        "prezime": "Hodžić",
        "imeOca": "Admir",
        "jmbg": "1111995170236",
        "mjestoRodjenja": "Sarajevo",
        "drzavljanstvo": "Bosansko",
        "brojLk": "07MKT4736",
        "telefon": "+38762896652",
        "emailAdresa": "sead.hodzic@gmail.com",
        "lozinka": "654321",
        "ponovljenaLozinka": "654321",
        "slika":"",
        "uplate": [
            {
               "id": 1,
               "iznos": 400,
               "datum": new Date('2021, 07, 13'),
            },
            {
                "id": 2,
                "iznos": 100,
                "datum": new Date('2021, 08, 14'),
            }
        ],
        "ispiti": [{

        }],
        "dokumenti": [{

        }]
    }
];

export const instructors = [
    {
        "id": 1,
        "firstName": "Hasib",
        "lastName": "Fijuljanin"
    },
    {
        "id": 2,
        "firstName": "Miodrag",
        "lastName": "Mandić"
    }
];

export const vehicles = [
    {
        "id": 1
    },
    {
        "id": 2
    }
];

export const notificationsForAdmin = [
    {
        "id": 1,
        "title": "Kvar na vozilu",
        "body":"Danas je doslo do curenja ulja na vozilu. Morao sam da otkazem svu obuku",
        "sender": `${instructors[0].firstName} ${instructors[0].lastName}`,
        "createdAt": new Date('2021, 08, 15'),
        "removed": false
    },
    {
        "id": 2,
        "title": "Inspekcija",
        "body":"Zaustavila me je inspekcija. Sva dokumentacija je bila uredna",
        "sender": `${instructors[1].firstName} ${instructors[1].lastName}`,
        "createdAt": new Date('2021, 08, 12'),
        "removed": false
    }
];

export const notificationsFromAdmin = [
    {
        "id": 1
    },
    {
        "id": 2
    }
];

export const reminders = [
    {
        "id": 1,
        "text": "A23-M-356 kvar"
    },
    {
        "id": 2,
        "text": "Platiti struju"
    }
];

export const payments = [
    {
        "id": 1
    },
    {
        "id": 2
    }
];

export const exams = [
    {
        "id": 1
    },
    {
        "id": 2
    }
];

export const documents = [
    {
        "id": 1
    },
    {
        "id": 2
    }
];

export const lectureTimes = [
    {
        "id": 1
    },
    {
        "id": 2
    }
];

export const trainings = [
    {
        "id": 1
    },
    {
        "id": 2
    }
];