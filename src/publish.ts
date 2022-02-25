import * as exec from "@actions/exec";
import { IContext } from "@octorelease/core";
import { IPluginConfig } from "./config";

export default async function (context: IContext, _config: IPluginConfig): Promise<void> {
    const name = "@octorelease/sample-plugin";
    const cmdOutput = await exec.getExecOutput("npm", ["view", name, "dist.tarball"]);
    const url = cmdOutput.stdout.trim();
    context.releasedPackages.sample = [{ name, url }];
}
