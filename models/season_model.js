const {
    Schema,
    model
} = require("mongoose")

const seasonSchema = Schema({
    category_ID: {
        type: Schema.ObjectId,
        ref: "category"
    },
    director_ID: {
        type: Schema.ObjectId,
        ref: "director"
    },
    tag_ID: {
        type: Schema.ObjectId,
        ref: "tag"
    },
    quality_ID: {
        type: Schema.ObjectId,
        ref: "quality"
    },
    genre_ID: {
        type: Schema.ObjectId,
        ref: "genre"
    },
    year_ID: {
        type: Schema.ObjectId,
        ref: "year"
    },
    actor_ID: {
        type: Schema.ObjectId,
        ref: "actor"
    },
    country_ID: {
        type: Schema.ObjectId,
        ref: "country"
    },
    name: {
        type: String,
        required: true
    },
    image: [{
        type: String,
        required: true
    }],
    description: {
        type: String,
        required: true
    },
    imbd: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})

module.exports = model("season", seasonSchema)