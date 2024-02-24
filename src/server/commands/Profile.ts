import { Command, CommandInteraction, Commander, CommanderType, Group } from "@rbxts/commander";

@Commander({
	groups: [
		{
			name: "profile",
			description: "Profile commands",
		},
	],
})
class ProfileCommand {
	@Command({
		name: "view",
		description: "Views a player's profile",
		arguments: [
			{
				name: "player",
				description: "The player",
				type: CommanderType.Player,
			},
		],
	})
	@Group("profile")
	view(interaction: CommandInteraction, player: Player) {}

	@Command({
		name: "delete",
		description: "Deletes a player's profile",
		arguments: [
			{
				name: "player",
				description: "The player",
				type: CommanderType.Player,
			},
		],
	})
	@Group("profile")
	delete(interaction: CommandInteraction, player: Player) {}
}
