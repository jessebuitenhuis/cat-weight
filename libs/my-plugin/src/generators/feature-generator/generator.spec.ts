import { readProjectConfiguration } from '@nx/devkit';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { featureGeneratorGenerator } from './generator';

it('should run successfully', async () => {
  const tree = createTreeWithEmptyWorkspace();
  await featureGeneratorGenerator(tree, { name: 'test' });
  const config = readProjectConfiguration(tree, 'feature-test-internal');
  const portsConfig = readProjectConfiguration(tree, 'feature-test-ports');
  expect(config).toBeDefined();
  expect(portsConfig).toBeDefined();
});
