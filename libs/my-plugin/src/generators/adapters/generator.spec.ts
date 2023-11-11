import { readProjectConfiguration } from '@nx/devkit';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { adaptersGenerator } from './generator';

it('should run successfully', async () => {
  const tree = createTreeWithEmptyWorkspace();

  await adaptersGenerator(tree, { feature: 'test' });
  const config = readProjectConfiguration(tree, 'feature-test-adapters');
  expect(config).toBeDefined();
});
