import { flags, SfdxCommand } from '@salesforce/command';
import { AnyJson } from '@salesforce/ts-types';
import json2object from '../../../json2object';
import { RecordResult } from '../../../../node_modules/@types/jsforce/record-result';

function createPayload(result: RecordResult): AnyJson {
  return {
    success: result.success,
  };
}

export default class Create extends SfdxCommand {
  public static description = 'Insert a record useing REST from a JSON file';
  public static examples = [
    `$ sfdx crud:create -s Account -f ./account.json -u my-org-alias
    where account.json looks like
    { 
      "Name": "Doe Account",
      "Phone": "123-555-1212",
      "BillingStreet" : "123 Main Street",
      "BillingCity" : "Any Town",
      "BillingState" : "CA",  
      "BillingCountry": "US"
    }
    `,
  ];
  protected static requiresProject = false;
  protected static requiresUsername = true;

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
    const result = await c.sobject(this.flags.sobject).create(o);

    console.log(result);
    const payload: AnyJson = createPayload(result);
    return payload;
  }
}
