import { readProjectConfiguration } from '@nx/devkit';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';

import { portsGenerator } from './generator';

it('should run successfully', async () => {
  const tree = createTreeWithEmptyWorkspace();
  await portsGenerator(tree, { project: 'test' });
  const config = readProjectConfiguration(tree, 'feature-test-ports');
  expect(config).toBeDefined();
});
