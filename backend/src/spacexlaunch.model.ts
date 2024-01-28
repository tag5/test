import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Fairings {
  @Field({ nullable: true })
  reused: Boolean | null

  @Field({ nullable: true })
  recovery_attempt: Boolean | null

  @Field({ nullable: true })
  recovered: Boolean | null

  @Field(type => [String])
  ships: [string]
}

@ObjectType()
export class Patch {
  @Field({ nullable: true })
  small: String | null

  @Field({ nullable: true })
  large: String | null
}

@ObjectType()
export class RedditLinks {
  @Field({ nullable: true })
  campaign: String | null

  @Field({ nullable: true })
  launch: String | null

  @Field({ nullable: true })
  media: String | null

  @Field({ nullable: true })
  recovery: String | null
}

@ObjectType()
export class FlickrLinks {
  @Field(type => [String])
  small: [String]

  @Field(type => [String])
  original: [String]
}

@ObjectType()
export class Links {
  @Field({ nullable: true })
  patch: Patch | null

  @Field({ nullable: true })
  reddit: RedditLinks | null

  @Field({ nullable: true })
  flickr: FlickrLinks | null

  @Field({ nullable: true })
  presskit: String | null

  @Field({ nullable: true })
  webcast: String | null

  @Field({ nullable: true })
  youtube_id: String | null

  @Field({ nullable: true })
  article: String | null

  @Field({ nullable: true })
  wikipedia: String | null
}

@ObjectType()
export class Crew {
  @Field({ nullable: true })
  crew: String  | null

  @Field({ nullable: true })
  role: String  | null
}

@ObjectType()
export class Failure {
  @Field(type => Int, { nullable: true })
  time: number | null

  @Field(type => Int, { nullable: true })
  altitude: number | null

  @Field({ nullable: true })
  reason: String  | null
}

@ObjectType()
export class Core {
  @Field({ nullable: true })
  core: String | null

  @Field(type => Int, { nullable: true })
  flight: number | null

  @Field({ nullable: true })
  gridfins: Boolean | null

  @Field({ nullable: true })
  legs: Boolean | null

  @Field({ nullable: true })
  reused: Boolean | null

  @Field({ nullable: true })
  landing_attempt: Boolean | null

  @Field({ nullable: true })
  landing_success: Boolean | null

  @Field({ nullable: true })
  landing_type: String | null

  @Field({ nullable: true })
  landpad: String | null
}

@ObjectType()
export class SpaceXLaunch {
  @Field({ nullable: true })
  fairings: Fairings | null

  @Field({ nullable: true })
  links: Links | null

  @Field({ nullable: true })
  static_fire_date_utc: String | null

  @Field(type => Int, { nullable: true })
  static_fire_date_unix: number | null

  @Field()
  net: Boolean

  @Field(type => Int, { nullable: true })
  window: number | null

  @Field()
  rocket: String

  @Field({ nullable: true })
  success: Boolean | null

  @Field(type => [Failure])
  failures: [Failure]

  @Field({ nullable: true })
  details: String | null

  @Field(type => [Crew])
  crew: [Crew]

  @Field(type => [String])
  ships: [String]

  @Field(type => [String])
  capsules: [String]

  @Field(type => [String])
  payloads: [String]

  @Field({ nullable: true })
  launchpad: String | null

  @Field(type => Int)
  flight_number: number

  @Field()
  name: String

  @Field()
  date_utc: String

  @Field(type => Int)
  date_unix: number

  @Field()
  date_local: String

  @Field()
  date_precision: String

  @Field()
  upcoming: Boolean

  @Field(type => [Core])
  cores: [Core]

  @Field()
  auto_update: Boolean

  @Field()
  tbd: Boolean

  @Field({ nullable: true })
  launch_library_id: String | null

  @Field()
  id: String
}