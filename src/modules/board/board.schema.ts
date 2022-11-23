import * as mongoose from 'mongoose';

export const BoardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'users',
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
      },
    ],
  },
  {
    timestamps: true,
  },
);
