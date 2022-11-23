import * as mongoose from 'mongoose';

export const ListSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      required: true,
      default: 0,
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
