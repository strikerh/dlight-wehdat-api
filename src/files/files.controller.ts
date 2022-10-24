import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { Multer } from 'multer';
import ImageKit from 'imagekit';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post('upload')
  uploadFile(@Body() body: any, @UploadedFile() file: Express.Multer.File) {
    return this.filesService.uploadFile(file);
  }
}
