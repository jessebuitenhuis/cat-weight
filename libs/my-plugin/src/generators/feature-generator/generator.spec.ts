import { readProjectConfiguration } from '@nx/devkit';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { featureGeneratorGenerator } from './generator';

it('should run successfully', async () => {
  const tree = createTreeWithEmptyWorkspace();
  await featureGeneratorGenerator(tree, { name: 'test' });
  const config = readProjectConfiguration(tree, 'feature-test');
  expect(config).toBeDefined();
});
