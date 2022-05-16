import { flags, SfdxCommand } from '@salesforce/command';
import { AnyJson } from '@salesforce/ts-types';
import json2object from '../../../json2object';
import { RecordResult } from '../../../../node_modules/@types/jsforce/record-result';

function createPayload(result: RecordResult): AnyJson {
  return {
    success: result.success,
  };
}

export default class Update extends SfdxCommand {
  public static examples = [
    `$ sfdx crud:update -s Account -f ./account.json -u my-org-alias
    where account.json looks like
    { 
      "Id": "001S000001LGtY3IAL",
      "Phone": "415-123-1212"
    }
    `,
  ];
  protected static requiresUsername = true;
  protected static requiresProject = false;

  protected static flagsConfig = {
    sobject: flags.string({
      required: true,
      char: 's',
      description: 'sobject type Account, CustomObject__c, ...',
    }),
    file: flags.filepath({
      required: true,
      char: 'f',
      description: 'json file',
    }),
  };

  public async run(): Promise<AnyJson> {
    console.log(this.flags);

    const c = this.org.getConnection();
    const o = json2object(this.flags.file);
    const result = await c.sobject(this.flags.sobject).update(o);

    console.log(result);

    return createPayload(result);
  }
}
