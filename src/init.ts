import { IContext } from "@octorelease/core";
import { IPluginConfig } from "./config";

export default async function (context: IContext, config: IPluginConfig): Promise<void> {
    if (config.name == null || config.name.length === 0) {
        throw new Error("Missing value for required option \"name\"");
    }
}
