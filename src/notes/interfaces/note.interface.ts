import {Document} from 'mongoose';
export interface Note extends Document {
    id ?: string,
    title :string,
    body ?: string,
    pinned: boolean;
    archived: boolean;
    created: Date;
    lastEdited: Date;
    color ?:string;
    labels ?: string[];
    checkboxesVisible: boolean;
    checkboxes ?: Object[];
}