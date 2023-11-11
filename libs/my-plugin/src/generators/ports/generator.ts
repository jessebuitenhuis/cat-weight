import { Tree } from '@nx/devkit';
import { libraryGenerator } from '@nx/js';
import { PortsGeneratorSchema } from './schema';

export async function portsGenerator(
  tree: Tree,
  options: PortsGeneratorSchema
) {
  const root = `libs/feature/${options.feature}/ports`;
  const name = `feature-${options.feature}-ports`;

  await libraryGenerator(tree, {
    name,
    directory: root,
    tags: `access:public,type:feature`,
    projectNameAndRootFormat: 'as-provided',
    unitTestRunner: 'none',
    bundler: 'none',
    minimal: true,
  });
}

export default portsGenerator;
