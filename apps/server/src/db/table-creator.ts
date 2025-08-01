import { pgTableCreator } from "drizzle-orm/pg-core";

export const tableCreator = pgTableCreator(
	(name) => `side_project_ryde_${name}`,
);
