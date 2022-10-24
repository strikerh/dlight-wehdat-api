import { Injectable } from '@nestjs/common';
import { Express } from 'express';
import { HttpService } from '@nestjs/axios';
import FormData = require('form-data');
import { map } from 'rxjs';

@Injectable()
export class FilesService {
  imagekit: any;
  formData12: any;

  constructor(private readonly httpService: HttpService) {
    this.formData12 = new FormData();
  }

  uploadFile(file: any, folderName = undefined) {
    this.imagekit = {
      url: 'https://upload.imagekit.io/api/v1/files/upload',
      publicKey: 'public_TVLzI1Rn9bka3tXvoPx79s+gMpY=',
      privateKey: 'private_wJ9Yg4zjFOIC4nsSKKY2VWNCZXg=',
      urlEndpoint: 'https://ik.imagekit.io/xMotion/',
    };
    const header = {
      auth: {
        username: this.imagekit.privateKey,
        password: '',
      },
    };
    const formData12 = new FormData();
    formData12.append('file', file.buffer, { filename: file.originalname });
    formData12.append('fileName', file.originalname);
    if (folderName) formData12.append('folder', folderName);
    return this.httpService
      .post(this.imagekit.url, formData12, header)
      .pipe(map((response) => response.data));

    // console.log('response', response);
  }
}
