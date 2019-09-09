  
import * as mongoose from 'mongoose';

export const NoteSchema = new mongoose.Schema({
     title: String,
     body: String,
     pinned: Boolean,
     archived: Boolean,
     created: Date,
     lastEdited: Date,
     color:String,
     labels: [String],
     checkboxesVisible: Boolean,
     checkboxes: [Object]
});