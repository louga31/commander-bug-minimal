import { OnStart, Service } from "@flamework/core";
import { CommanderServer } from "@rbxts/commander";

@Service({})
export class CommanderService implements OnStart {
	onStart() {
		CommanderServer.start((registry) => {
			registry.registerCommands();
		}).catch((err) => warn("Commander could not be started:", tostring(err)));
	}
}
