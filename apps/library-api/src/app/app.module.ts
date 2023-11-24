import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";

import { entities } from '../entities/entities.list';
import { services } from '../services/services.list';
import { repositories } from '../repositories/repositories.list';
import { resolvers } from '../resolvers/resolvers.list';
import { controllers } from '../controllers/controllers.list';

@Module({
  imports: [
    TypeOrmModule.forFeature(entities),
    GraphQLModule.forRoot<ApolloDriverConfig>({
		driver         : ApolloDriver,
		playground     : true,
		autoSchemaFile : join(process.cwd(), "src/schema.gql"),
	}),
  ],
	// To drop GraphQL support, remove the resolvers from the following line
	providers : [...services, ...repositories, ...resolvers],

	// To drop REST support, remove the controllers from the following line
	controllers : [...controllers],
})
export class AppModule {}
