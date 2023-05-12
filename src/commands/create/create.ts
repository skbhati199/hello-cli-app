import {Args, Command, Flags} from '@oclif/core'

export default class Create extends Command {
  static description = 'Gitb App'

  static examples = [
    `$ hello-cli-app create CreateApp
Create a CreateApp! (./src/commands/create/create.ts)
`,
  ]

  static flags = {
    github: Flags.string({char: 'g', description: 'Who is saying hello', required: true}),
  }

  static args = {
    user: Args.string({description: 'Person to say hello to', required: true}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Create)

    this.log(`Create Gitb ${args.user} -g ${flags.github}! (./src/commands/create/create.ts)`)
  }
}
