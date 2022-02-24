import { IContext } from "@octorelease/core";
import { IPluginConfig } from "./config";

export default async function (context: IContext, config: IPluginConfig): Promise<void> {
    if (context.version.new !== context.version.old) {
        context.logger.info(`Hello ${config.name}!`);
    }
}
