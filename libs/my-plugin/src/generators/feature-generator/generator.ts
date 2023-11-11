import { libraryGenerator } from '@nx/angular/generators';
import { Tree } from '@nx/devkit';
import adaptersGenerator from '../adapters/generator';
import { portsGenerator } from '../ports/generator';
import { FeatureGeneratorGeneratorSchema } from './schema';

export async function featureGeneratorGenerator(
  tree: Tree,
  options: FeatureGeneratorGeneratorSchema
) {
  const root = `libs/feature/${options.name}/internal`;
  const name = `feature-${options.name}-internal`;

  await libraryGenerator(tree, {
    name,
    directory: root,
    skipModule: true,
    projectNameAndRootFormat: 'as-provided',
    tags: `access:internal,type:feature`,
    importPath: `@cat-weight/feature/${options.name}/internal`,
  });

  const generatePortsAndAdapters = options.ports ?? true;

  if (generatePortsAndAdapters) {
    await portsGenerator(tree, { feature: options.name });
    await adaptersGenerator(tree, { feature: options.name });
  }
}

export default featureGeneratorGenerator;
