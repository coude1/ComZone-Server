import { Module } from '@nestjs/common';
import { FileUploadController } from './file-upload.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [MulterModule.register({ dest: './uploads' })],
  providers: [],
  controllers: [FileUploadController],
})
export class FileUploadModule {}
