import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CacheModule } from '@nestjs/cache-manager';
import { SpaceXResolver } from './spacex.resolver';
import { SpaceXService } from './spacex.service';

@Module({
  imports: [
    CacheModule.register({ store: 'memory', isGlobal:true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({ driver: ApolloDriver, playground: true, autoSchemaFile: true }),
  ],
  providers: [
    SpaceXService,
    SpaceXResolver
  ],
})
export class AppModule {}