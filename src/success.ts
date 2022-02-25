import { IContext } from "@octorelease/core";
import { IPluginConfig } from "./config";

export default async function (context: IContext, _config: IPluginConfig): Promise<void> {
    context.logger.info("Release succeeded 😊");
}
