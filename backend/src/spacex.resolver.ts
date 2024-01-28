import { Query, Args, Resolver, Int } from '@nestjs/graphql';
import { SpaceXService } from './spacex.service';
import { SpaceXLaunch } from './spacexlaunch.model';
import {InternalServerErrorException} from "@nestjs/common";

@Resolver(of => SpaceXLaunch)
export class SpaceXResolver {
  constructor(private spacexService: SpaceXService) { }

  @Query(() => [SpaceXLaunch])
  async getSpaceXLaunchesWithOffsetAndLimit(
    @Args('offset', { type: () => Int, defaultValue: 0 }) offset: number,
    @Args('limit', { type: () => Int, defaultValue: 10 }) limit: number,
  ): Promise<SpaceXLaunch[]> {
    try {
      return await this.spacexService.getSpaceXLaunchesWithOffsetAndLimit(offset, limit);
    } catch (error) {
      throw new InternalServerErrorException('Internal error');
    }
  }

  @Query(() => [SpaceXLaunch])
  async getAllSpaceXLaunches(): Promise<SpaceXLaunch[]> {
    try {
      return await this.spacexService.getAllSpaceXLaunches();
    } catch (error) {
      throw new InternalServerErrorException('Internal error');
    }
  }

  @Query(() => Number )
  async countSpaceXLaunches(): Promise<number> {
    try {
      return await this.spacexService.countSpaceXLaunches();
    } catch (error) {
      throw new InternalServerErrorException('Internal error');
    }
  }

  @Query(() => SpaceXLaunch, { nullable: true })
  async getSpaceXLaunchById(@Args('id') id: string): Promise<SpaceXLaunch | null> {
    try {
      return await this.spacexService.getSpaceXLaunchById(id);
    } catch (error) {
      throw new InternalServerErrorException('Internal error');
    }
  }
}
