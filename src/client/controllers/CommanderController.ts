import { Controller, OnStart } from "@flamework/core";
import { CommanderClient, CommanderInterface } from "@rbxts/commander";

@Controller({})
export class CommanderController implements OnStart {
	onStart() {
		CommanderClient.start(
			(registry) => {
				registry.registerCommands();
			},
			{
				interface: CommanderInterface({
					activationKeys: [Enum.KeyCode.F2],
				}),
			},
		).catch((err) => warn("Commander could not be started:", tostring(err)));
	}
}
