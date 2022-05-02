@pogilvie/sfdx
==============

pogilvie sfdx plugins

## Version 0.0.6 query
- read soql query from a file 
- print a table

<!-- toc -->

<!-- tocstop -->
<!-- install -->
<!-- usage -->
```sh-session
$ npm install -g @pogilvie/dx
$ sfdx COMMAND
running command...
$ sfdx (-v|--version|version)
@pogilvie/dx/0.0.1 darwin-arm64 node-v16.15.0
$ sfdx --help [COMMAND]
USAGE
  $ sfdx COMMAND
...
```
<!-- usagestop -->
<!-- commands -->
* [`sfdx pogilvie:apexrest:post -e <string> -f <filepath> [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-pogilvieapexrestpost--e-string--f-filepath---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
* [`sfdx pogilvie:cdc:subscribe [-s] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-pogilviecdcsubscribe--s--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
* [`sfdx pogilvie:crud:create -s <string> -f <filepath> [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-pogilviecrudcreate--s-string--f-filepath--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
* [`sfdx pogilvie:crud:delete -s <string> -i <string> [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-pogilviecruddelete--s-string--i-string--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
* [`sfdx pogilvie:crud:read -s <string> -i <string> [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-pogilviecrudread--s-string--i-string--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
* [`sfdx pogilvie:crud:update -s <string> -f <filepath> [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-pogilviecrudupdate--s-string--f-filepath--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
* [`sfdx pogilvie:event:subscribe -e <string> [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-pogilvieeventsubscribe--e-string--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
* [`sfdx pogilvie:org [-n <string>] [-f] [-v <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-pogilvieorg--n-string--f--v-string--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)
* [`sfdx pogilvie:ui:call -s <string> -r <string> -p <string> [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-pogilvieuicall--s-string--r-string--p-string--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `sfdx pogilvie:apexrest:post -e <string> -f <filepath> [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

POST to an apexrest endpoint with a payload specified by a JSON file

```
USAGE
  $ sfdx pogilvie:apexrest:post -e <string> -f <filepath> [--json] [--loglevel 
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -e, --endpoint=endpoint                                                           (required) resource path of the
                                                                                    apexrest service

  -f, --file=file                                                                   (required) json file

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLE
  $ sfdx apexrest:post  -e /newaccount -f ./payload.json -u my-org-alias
      where account.json looks like
      { 
        "Name": "Doe Account",
        "Phone": "123-555-1212",
        "BillingStreet" : "123 Main Street",
        "BillingCity" : "Any Town",
        "BillingState" : "CA",  
        "BillingCountry": "US"
      }
    protected static requiresUsername = true;
    protected static requiresProject = false;
```

_See code: [src/commands/pogilvie/apexrest/post.ts](https://github.com/pogilvie/dx/blob/v0.0.1/src/commands/pogilvie/apexrest/post.ts)_

## `sfdx pogilvie:cdc:subscribe [-s] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

Subscribe to an org's change data capture stream

```
USAGE
  $ sfdx pogilvie:cdc:subscribe [-s] [-u <string>] [--apiversion <string>] [--json] [--loglevel 
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -s, --simple                                                                      simpliied output displaying
                                                                                    operations and changed fields

  -u, --targetusername=targetusername                                               username or alias for the target
                                                                                    org; overrides default target org

  --apiversion=apiversion                                                           override the api version used for
                                                                                    api requests made by this command

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLE
  $ sfdx cdc:subscribe  -u my-org-alias
```

_See code: [src/commands/pogilvie/cdc/subscribe.ts](https://github.com/pogilvie/dx/blob/v0.0.1/src/commands/pogilvie/cdc/subscribe.ts)_

## `sfdx pogilvie:crud:create -s <string> -f <filepath> [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

Insert a record useing REST from a JSON file

```
USAGE
  $ sfdx pogilvie:crud:create -s <string> -f <filepath> [-u <string>] [--apiversion <string>] [--json] [--loglevel 
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -f, --file=file                                                                   (required) json file

  -s, --sobject=sobject                                                             (required) sobject type Account,
                                                                                    CustomObject__c, ...

  -u, --targetusername=targetusername                                               username or alias for the target
                                                                                    org; overrides default target org

  --apiversion=apiversion                                                           override the api version used for
                                                                                    api requests made by this command

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLE
  $ sfdx crud:create -s Account -f ./account.json -u my-org-alias
      where account.json looks like
      { 
        "Name": "Doe Account",
        "Phone": "123-555-1212",
        "BillingStreet" : "123 Main Street",
        "BillingCity" : "Any Town",
        "BillingState" : "CA",  
        "BillingCountry": "US"
      }
```

_See code: [src/commands/pogilvie/crud/create.ts](https://github.com/pogilvie/dx/blob/v0.0.1/src/commands/pogilvie/crud/create.ts)_

## `sfdx pogilvie:crud:delete -s <string> -i <string> [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

Delete a record using REST using a recordId

```
USAGE
  $ sfdx pogilvie:crud:delete -s <string> -i <string> [-u <string>] [--apiversion <string>] [--json] [--loglevel 
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -i, --ids=ids                                                                     (required) record id or ids comma
                                                                                    separated with no spaces

  -s, --sobject=sobject                                                             (required) sobject type Account,
                                                                                    CustomObject__c, ...

  -u, --targetusername=targetusername                                               username or alias for the target
                                                                                    org; overrides default target org

  --apiversion=apiversion                                                           override the api version used for
                                                                                    api requests made by this command

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLE
  $ sfdx crud:delete -s Account, -i 00102000007GstXAAS  -u my-org-alias
      $ sfdx crud:delete -s Account, -i 00102000007GstXAAS,00102000007GsveAAC -u my-org-alias
```

_See code: [src/commands/pogilvie/crud/delete.ts](https://github.com/pogilvie/dx/blob/v0.0.1/src/commands/pogilvie/crud/delete.ts)_

## `sfdx pogilvie:crud:read -s <string> -i <string> [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

Read a record using REST using a recordId

```
USAGE
  $ sfdx pogilvie:crud:read -s <string> -i <string> [-u <string>] [--apiversion <string>] [--json] [--loglevel 
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -i, --ids=ids                                                                     (required) record id or ids comma
                                                                                    separated with no spaces

  -s, --sobject=sobject                                                             (required) sobject type Account,
                                                                                    CustomObject__c, ...

  -u, --targetusername=targetusername                                               username or alias for the target
                                                                                    org; overrides default target org

  --apiversion=apiversion                                                           override the api version used for
                                                                                    api requests made by this command

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLE
  $ sfdx crud:read -s Account, -i 00102000007GstXAAS  -u my-org-alias
      $ sfdx crud:read -s Account, -i 00102000007GstXAAS,00102000007GsveAAC -u my-org-alias
```

_See code: [src/commands/pogilvie/crud/read.ts](https://github.com/pogilvie/dx/blob/v0.0.1/src/commands/pogilvie/crud/read.ts)_

## `sfdx pogilvie:crud:update -s <string> -f <filepath> [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

Update a record using REST from a JSON file

```
USAGE
  $ sfdx pogilvie:crud:update -s <string> -f <filepath> [-u <string>] [--apiversion <string>] [--json] [--loglevel 
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -f, --file=file                                                                   (required) json file

  -s, --sobject=sobject                                                             (required) sobject type Account,
                                                                                    CustomObject__c, ...

  -u, --targetusername=targetusername                                               username or alias for the target
                                                                                    org; overrides default target org

  --apiversion=apiversion                                                           override the api version used for
                                                                                    api requests made by this command

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLE
  $ sfdx crud:update -s Account -f ./account.json -u my-org-alias
      where account.json looks like
      { 
        "Id": "001S000001LGtY3IAL",
        "Phone": "415-123-1212"
      }
```

_See code: [src/commands/pogilvie/crud/update.ts](https://github.com/pogilvie/dx/blob/v0.0.1/src/commands/pogilvie/crud/update.ts)_

## `sfdx pogilvie:event:subscribe -e <string> [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

Subscribe to a platform event channel

```
USAGE
  $ sfdx pogilvie:event:subscribe -e <string> [-u <string>] [--apiversion <string>] [--json] [--loglevel 
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -e, --event=event                                                                 (required) event type CustomEvent__e

  -u, --targetusername=targetusername                                               username or alias for the target
                                                                                    org; overrides default target org

  --apiversion=apiversion                                                           override the api version used for
                                                                                    api requests made by this command

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLE
  $ sfdx event:subscribe -e event__c -u my-org-alias
```

_See code: [src/commands/pogilvie/event/subscribe.ts](https://github.com/pogilvie/dx/blob/v0.0.1/src/commands/pogilvie/event/subscribe.ts)_

## `sfdx pogilvie:org [-n <string>] [-f] [-v <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

print a greeting and your org IDs

```
USAGE
  $ sfdx pogilvie:org [-n <string>] [-f] [-v <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel 
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -f, --force                                                                       example boolean flag
  -n, --name=name                                                                   name to print

  -u, --targetusername=targetusername                                               username or alias for the target
                                                                                    org; overrides default target org

  -v, --targetdevhubusername=targetdevhubusername                                   username or alias for the dev hub
                                                                                    org; overrides default dev hub org

  --apiversion=apiversion                                                           override the api version used for
                                                                                    api requests made by this command

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLES
  sfdx hello:org --targetusername myOrg@example.com --targetdevhubusername devhub@org.com
  sfdx hello:org --name myname --targetusername myOrg@example.com
```

_See code: [src/commands/pogilvie/org.ts](https://github.com/pogilvie/dx/blob/v0.0.1/src/commands/pogilvie/org.ts)_

## `sfdx pogilvie:ui:call -s <string> -r <string> -p <string> [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

Call UPI on salesforce record

```
USAGE
  $ sfdx pogilvie:ui:call -s <string> -r <string> -p <string> [-u <string>] [--apiversion <string>] [--json] [--loglevel
   trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -p, --picklist=picklist                                                           (required) API name of picklist
                                                                                    field

  -r, --recordtypeid=recordtypeid                                                   (required) RecordTypeId

  -s, --sobject=sobject                                                             (required) API name of sobject

  -u, --targetusername=targetusername                                               username or alias for the target
                                                                                    org; overrides default target org

  --apiversion=apiversion                                                           override the api version used for
                                                                                    api requests made by this command

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation
```

_See code: [src/commands/pogilvie/ui/call.ts](https://github.com/pogilvie/dx/blob/v0.0.1/src/commands/pogilvie/ui/call.ts)_
<!-- commandsstop -->
