export class CreateNoteDto {
    readonly title: string;
    private _body: string;
    readonly pinned: boolean;
    readonly archived: boolean;
    readonly created: Date;
    readonly lastEdited: Date;
    readonly color: string;
    readonly labels: string[];
    readonly checkboxesVisible: boolean;
    readonly checkboxes: Object[];
}