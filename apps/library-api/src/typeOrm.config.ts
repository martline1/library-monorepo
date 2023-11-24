import { DataSource, DataSourceOptions } from "typeorm";
import { join }                          from "path";

export const dataSourceOptions: DataSourceOptions = {
	// type        : "postgres",
	// type: 'postgres',

	// host: this.getValue('POSTGRES_HOST'),
	// port: parseInt(this.getValue('POSTGRES_PORT')),
	// username: this.getValue('POSTGRES_USER'),
	// password: this.getValue('POSTGRES_PASSWORD'),
	// database: this.getValue('POSTGRES_DATABASE'),

	// entities: ['**/*.entity{.ts,.js}'],

	// migrationsTableName: 'migration',

	// migrations: ['src/migration/*.ts'],

	// cli: {
	//   migrationsDir: 'src/migration',
	// },

	// ssl: this.isProduction(),
	// entities    : [join(__dirname, "/entities/*{.js,.ts}")],
	// migrations  : [join(__dirname, "/migrations/*{.js,.ts}")],
};

export default new DataSource(dataSourceOptions);