import { Injectable } from '@nestjs/common';
import { Note } from './interfaces/note.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateNoteDto } from './dto/create-note.dto';

@Injectable()
export class NotesService {
  constructor(@InjectModel('Note') private readonly noteModel:Model<Note>) {}

  async findAll(): Promise<Note[]> {
    return await this.noteModel.find();
  }

  async findOne(id: string): Promise<Note> {
    return await this.noteModel.findOne({ _id: id });
  }

  async create(createCatDto: CreateNoteDto): Promise<Note> {
    const newNote = new this.noteModel(createCatDto);
    return await newNote.save();
  }

  async delete(id: string): Promise<Note> {
    return await this.noteModel.findByIdAndRemove(id);
  }

  async update(id: string, createCatDto: CreateNoteDto): Promise<Note> {
    return await this.noteModel.findByIdAndUpdate(id, createCatDto, { new: true });
  }
}