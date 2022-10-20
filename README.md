# rush-build-diagnostic-demo

This is a demo repo for the [rush-audit-cache-plugin](https://www.npmjs.com/package/rush-audit-cache-plugin).

The original proposal can be found [here](https://github.com/bytesfriends/rush-plugins/blob/main/rush-plugins/rush-audit-cache-plugin/docs/proposal-for-rush-build-diagnostic-tool.md).


# Steps

1. Clone & Installation

```
git clone git@github.com:chengcyber/rush-build-diagnostic-demo.git
cd rush-build-diagnostic-demo

rush update
```

2. Run `rush audit-cache`

```
rush audit-cache --project external-file-access
```

Project `external-file-access` is a demo project which reads `<repo_root>/outside.json` file and writes `<repo_root>/outside.log` during build.

3. Check the log output

The output are

```
Audit cache for project external-file-access
======== project external-file-access ========
It has 5 high risk issues and 19 low risk issues
```

You can see `rush audit-cache` reports there are 5 high risks. Let's explain them one by one:
1. `Reads /<absolute_path>/rush-build-diagnostic-demo/outside.json` shows the building process read external file. ❌
2. `"outputFolderNames" are not defined for build operation of project "external-file-access"` warns that no `"outputFolderNames"` configured for the build operation. ❗️
3. `Writes /<absolute_path>/rush-build-diagnostic-demo/apps/external-file-access/dist/core.js` says that the building process writes to this file. This can be fixed by configuring `"dist"` folder as one of the `"outputFolderNames"` in 2. ❗️
4. `Writes /<absolute_path>/rush-build-diagnostic-demo/apps/external-file-access/dist/index.js`, same as 3❗️
5. `Writes /<absolute_path>/rush-build-diagnostic-demo/outside.log` shows the building process writes a log file under an external folder.
