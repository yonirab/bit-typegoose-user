import { EnvsMain, EnvsAspect } from '@teambit/envs'
import { NodeAspect, NodeMain } from '@teambit/node'
import { TsConfigTransformer, TypescriptConfigMutator } from '@teambit/typescript';


export class CustomNodeExtension {
  constructor(private node: NodeMain) {}

  static dependencies: any = [EnvsAspect, NodeAspect]

  static async provider([envs, node]: [EnvsMain, NodeMain]) {
   
    const transformer: TsConfigTransformer = (config: TypescriptConfigMutator) => {
        config.setExperimentalDecorators(true);
        return config;
    };

    const CustomNodeEnv = node.compose([

        node.useTypescript(
          {
            buildConfig: [transformer],
            devConfig: [transformer],
          }
        ),
        node.overrideJestConfig(require.resolve('./jest/jest.config'))
        
    ])

    envs.registerEnv(CustomNodeEnv)

    return new CustomNodeExtension(node)
  }
}
