import { libraryGenerator } from '@nx/angular/generators';
import { Tree } from '@nx/devkit';
import { AdaptersGeneratorSchema } from './schema';

export async function adaptersGenerator(
  tree: Tree,
  options: AdaptersGeneratorSchema
) {
  const root = `libs/feature/${options.feature}/adapters`;
  const name = `feature-${options.feature}-adapters`;

  await libraryGenerator(tree, {
    name,
    directory: root,
    skipModule: true,
    projectNameAndRootFormat: 'as-provided',
    tags: `access:di,type:feature`,
    importPath: `@cat-weight/feature/${options.feature}/adapters`,
  });
}

export default adaptersGenerator;
