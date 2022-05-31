const { Schema, model } = require('mongoose');
const Thought = require("./Thought");

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: "You need to provide a username!",
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
        },
        thoughts: [
            {
              type: Schema.Types.ObjectId,
              ref: "Thought",
            },
        ],
        friends: [
            {
              type: Schema.Types.ObjectId,
              ref: "User",
            },
          ],
        },
        {
          toJSON: {
            virtuals: true,
          },
          id: false,
        }
);
      

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;