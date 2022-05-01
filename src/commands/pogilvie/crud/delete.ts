import { flags, SfdxCommand } from '@salesforce/command';
import { AnyJson } from '@salesforce/ts-types';

export default class Delete extends SfdxCommand {

  protected static requiresUsername = true;
  protected static requiresProject = false;
  public static description = 'Delete a record using REST using a recordId'
  public static examples = [
    `$ sfdx crud:delete -s Account, -i 00102000007GstXAAS  -u my-org-alias
    $ sfdx crud:delete -s Account, -i 00102000007GstXAAS,00102000007GsveAAC -u my-org-alias
    `
  ]

  protected static flagsConfig = {
    sobject: flags.string({
      required: true,
      char: 's', 
      description: 'sobject type Account, CustomObject__c, ...' 
    }),
    ids: flags.string({
      required: true,
      char: 'i', 
      description: 'record id or ids comma separated with no spaces' 
    })
  };

  public async run(): Promise<AnyJson> {

    console.log(this.flags)
    const ids = this.flags.ids.split(',')

    const c = this.org.getConnection();
    c.sobject(this.flags.sobject).delete(ids)
    .then( result => {
      if (result.success) {
        console.log(result)
      } else {
        console.log(JSON.stringify(result))
      }
    })
    .catch( error => {
      console.log('Delete call Failed', JSON.stringify(error))
    }) 

    return <AnyJson><unknown>null
  }
}
