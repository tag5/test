import { Injectable, Inject } from '@nestjs/common';
import { SpaceXLaunch } from './spacexlaunch.model';
import axios from 'axios';

import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class SpaceXService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getAllSpaceXLaunches(): Promise<SpaceXLaunch[]> {
    let launches: SpaceXLaunch[] = await this.cacheManager.get<SpaceXLaunch[]>('launches');
    if (launches) {
      return launches;
    }

    const response = await axios.get('https://api.spacexdata.com/v5/launches');
    launches = response.data;
    await this.cacheManager.set('launches', launches, 6000 * 5);

    return launches;
  }

  async countSpaceXLaunches(): Promise<number> {
    let launches: SpaceXLaunch[] = await this.getAllSpaceXLaunches();
    return launches.length;
  }

  async getSpaceXLaunchesWithOffsetAndLimit(offset: number = 0, limit: number = 10): Promise<SpaceXLaunch[]> {
    var launches: SpaceXLaunch[] = await this.getAllSpaceXLaunches();
    return launches.slice(offset, offset + limit);
  }

  async getSpaceXLaunchById(id: string): Promise<SpaceXLaunch | null> {
    var launches: SpaceXLaunch[] = await this.getAllSpaceXLaunches();
    return launches.find((launch) => launch.id === id);
  }
}
