const {gql} = require('apollo-server');

const typeDefs = gql`
    type Query {
        tracksForHome: [Track]
    }

    "A track is a specific group of modules that teaches about a specific topic"
    type Track {
        "Track unique ID"
        id: ID!
        "Title of the Track
        title: String!
        "Author or the track"
        author: Author!
        "thumbnail for the track"
        thumbnail: String
        "Length of the track"
        length: Int
        "modules count of the track"
        modulesCount: Int   
    }
    
    "Author of a complete Track or a Module"
    type Author{
        id: ID!
        name: String!
        photo: String 
    }
`;

module.exports = typeDefs;