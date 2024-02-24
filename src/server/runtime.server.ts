import { Flamework } from "@flamework/core";

Flamework.addPaths("src/server/components");
Flamework.addPaths("src/server/services");
Flamework.addPaths("src/server/commands");

Flamework.addPaths("src/shared/components");

// Ignite the Flamework

Flamework.ignite();
