import * as mongoose from 'mongoose';

export const CardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    listId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'lists',
    },
    boardId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);
