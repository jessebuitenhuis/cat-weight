import { libraryGenerator } from '@nx/angular/generators';
import { Tree } from '@nx/devkit';
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
  });
}

export default featureGeneratorGenerator;
