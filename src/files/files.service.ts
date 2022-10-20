import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { File } from './file.entity';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(File)
    private profileRepository: Repository<File>,
    private dataSource: DataSource,
  ) {}

  //   getOriginalImgName(email: string) {
  //     return this.profileRepository.findOneBy({ email });
  //   }

  //   getUuidImgName(email: string) {
  //     return this.profileRepository.findOneBy({ email });
  //   }
  async createFile(profile: File) {
    const profileData = this.profileRepository.create(profile);
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(profileData);
      await queryRunner.commitTransaction();
    } catch (err) {
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }
  }
}
