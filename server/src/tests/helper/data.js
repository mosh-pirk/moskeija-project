const {ROLE} = require("../../utils/enums");
const {hash} = require("bcrypt");
const testUser = {
    username: 'Sami',
    password: '123456',
}

const validUser = async () => ({
    username: testUser.username,
    password: await hash(testUser.password, 10),
    role:ROLE.VIEWER,
    isActive: true
})


const persons = [
    {
        _id: {"$oid": "64aab09042227298fd5f0b30"},
        firstName: "John",
        fatherName: "Michael",
        grandfatherName: "William",
        motherName: "Elizabeth",
        sureName: "Smith",
        birthday: "1990-05-15T00:00:00Z",
        address: {
            country: "United States",
            city: "New York",
            post: "10001",
            street: "123 Main St"
        },
        isActive: true
    },
    {
        _id: {"$oid": "64aab09042227298fd5f0b31"},
        firstName: "Emily",
        fatherName: "David",
        grandfatherName: "Robert",
        motherName: "Jennifer",
        sureName: "Johnson",
        birthday: "1990-05-15T00:00:00Z",
        address: {
            country: "Canada",
            city: "Toronto",
            post: "M5V 2H1",
            street: "456 Elm St"
        },
        isActive: false
    },
    {
        _id: {"$oid": "64aab09042227298fd5f0b32"},
        firstName: "Alice",
        fatherName: "Thomas",
        grandfatherName: "George",
        motherName: "Mary",
        sureName: "Brown",
        birthday: "1990-05-15T00:00:00Z",
        address: {
            country: "United Kingdom",
            city: "London",
            post: "SW1A 1AA",
            street: "789 Abbey Rd"
        },
        isActive: true
    },
    {
        _id: {"$oid": "64aab09042227298fd5f0b33"},
        firstName: "Daniel",
        fatherName: "Christopher",
        grandfatherName: "Edward",
        motherName: "Jessica",
        sureName: "Miller",
        birthday: "1990-05-15T00:00:00Z",
        address: {
            country: "Australia",
            city: "Sydney",
            post: "2000",
            street: "567 King St"
        },
        isActive: true
    },
    {
        _id: {"$oid": "64aab09042227298fd5f0b34"},
        firstName: "Sophia",
        fatherName: "Andrew",
        grandfatherName: "James",
        motherName: "Emily",
        sureName: "Taylor",
        birthday: "1990-05-15T00:00:00Z",
        address: {
            country: "United States",
            city: "Los Angeles",
            post: "90001",
            street: "890 Sunset Blvd"
        },
        isActive: false
    },
    {
        _id: {"$oid": "64aab09042227298fd5f0b35"},
        firstName: "Oliver",
        fatherName: "William",
        grandfatherName: "Charles",
        motherName: "Linda",
        sureName: "Wilson",
        birthday: "1990-05-15T00:00:00Z",
        address: {
            country: "Canada",
            city: "Vancouver",
            post: "V6B 1A1",
            street: "345 Maple Ave"
        },
        isActive: true
    },
    {
        _id: {"$oid": "64aab09042227298fd5f0b36"},
        firstName: "Ava",
        fatherName: "Mark",
        grandfatherName: "Paul",
        motherName: "Sarah",
        sureName: "Davis",
        birthday: "1990-05-15T00:00:00Z",
        address: {
            country: "Germany",
            city: "Berlin",
            post: "10117",
            street: "123 Brandenburg Str"
        },
        isActive: true
    },
    {
        _id: {"$oid": "64aab09042227298fd5f0b37"},
        firstName: "William",
        fatherName: "Richard",
        grandfatherName: "Joseph",
        motherName: "Karen",
        sureName: "Jones",
        birthday: "1990-05-15T00:00:00Z",
        address: {
            country: "France",
            city: "Paris",
            post: "75001",
            street: "456 Champs-Élysées"
        },
        isActive: false
    },
    {
        _id: {"$oid": "64aab09042227298fd5f0b38"},
        firstName: "Mia",
        fatherName: "Kevin",
        grandfatherName: "Anthony",
        motherName: "Michelle",
        sureName: "Martinez",
        birthday: "1990-05-15T00:00:00Z",
        address: {
            country: "Spain",
            city: "Madrid",
            post: "28001",
            street: "789 Gran Vía"
        },
        isActive: true
    },
    {
        _id: {"$oid": "64aab09042227298fd5f0b39"},
        firstName: "James",
        fatherName: "Daniel",
        grandfatherName: "John",
        motherName: "Laura",
        sureName: "Harris",
        birthday: "1990-05-15T00:00:00Z",
        address: {
            country: "Italy",
            city: "Rome",
            post: "00100",
            street: "567 Via Appia"
        },
        isActive: false
    },
    {
        _id: {"$oid": "64aab09042227298fd5f0b3a"},
        firstName: "Emma",
        fatherName: "Matthew",
        grandfatherName: "Frank",
        motherName: "Rebecca",
        sureName: "Anderson",
        birthday: "1990-05-15T00:00:00Z",
        address: {
            country: "Japan",
            city: "Tokyo",
            post: "100-0001",
            street: "890 Shibuya St"
        },
        isActive: true
    },
    {
        _id: {"$oid": "64aab09042227298fd5f0b3b"},
        firstName: "Benjamin",
        fatherName: "Ryan",
        grandfatherName: "David",
        motherName: "Nicole",
        sureName: "Walker",
        birthday: "1990-05-15T00:00:00Z",
        address: {
            country: "South Korea",
            city: "Seoul",
            post: "04524",
            street: "123 Gangnam Blvd"
        },
        isActive: true
    }
]

module.exports = {
    testUser,
    validUser,
    persons

}