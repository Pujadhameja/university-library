CREATE TABLE "user" (
	"id" integer PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"admin" boolean DEFAULT false NOT NULL,
	"active" boolean DEFAULT true NOT NULL
);
