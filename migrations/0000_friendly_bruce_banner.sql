CREATE TABLE `zeo_categories` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`display_name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `zeo_clues` (
	`id` text PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE `zeo_games` (
	`id` text PRIMARY KEY NOT NULL,
	`owner` text,
	`created_on` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`created_by` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `zeo_rounds` (
	`id` text PRIMARY KEY NOT NULL,
	`game_id` text NOT NULL,
	`category_one` text,
	`category_two` text,
	`category_three` text,
	`category_four` text,
	`category_five` text,
	`category_six` text,
	FOREIGN KEY (`game_id`) REFERENCES `zeo_games`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`category_one`) REFERENCES `zeo_categories`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`category_two`) REFERENCES `zeo_categories`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`category_three`) REFERENCES `zeo_categories`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`category_four`) REFERENCES `zeo_categories`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`category_five`) REFERENCES `zeo_categories`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`category_six`) REFERENCES `zeo_categories`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE TABLE `zeo_shared` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`game_id` text NOT NULL,
	`org_id` text,
	`user_id` text,
	`owner_id` text NOT NULL,
	FOREIGN KEY (`game_id`) REFERENCES `zeo_games`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `zeo_tags` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`tag_name` text,
	`game_id` text,
	`round_id` text,
	`clue_id` text,
	`user_id` text NOT NULL,
	FOREIGN KEY (`game_id`) REFERENCES `zeo_games`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`round_id`) REFERENCES `zeo_rounds`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`clue_id`) REFERENCES `zeo_clues`(`id`) ON UPDATE no action ON DELETE cascade
);
