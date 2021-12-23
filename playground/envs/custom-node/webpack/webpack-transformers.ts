import {
    WebpackConfigTransformer,
    WebpackConfigMutator,
    WebpackConfigTransformContext,
  } from '@teambit/webpack';
  
  const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

  /**
   * Transformation to apply for both preview and dev server
   * @param config
   * @param _context
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function commonTransformation(
    config: WebpackConfigMutator,
    _context: WebpackConfigTransformContext
  ) {
    // The following were attempted but didn't help in
    // resolving the error:
/*    
ModuleNotFoundError: Module not found: Error: Can't resolve 'events' in '...\node_modules\.pnpm\registry.npmjs.org+express@4.17.2\node_modules\express\lib'

BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
This is no longer the case. Verify if you need this module and configure a polyfill for it.

If you want to include a polyfill, you need to:
        - add a fallback 'resolve.fallback: { "events": require.resolve("events/") }'
        - install 'events'
*/        
    // config.addTopLevel('target','node',{conflictPolicy:'override'})
    // config.addResolve({fallback:  { "events": false }})
    // config.addPlugin(new NodePolyfillPlugin())

    
    // Merge config with the webpack.config.js file if you choose to import a module export format config.
    // config.merge([webpackConfig]);
    // config.addAliases({});
    // config.addModuleRule(youRuleHere);
    return config;
  }
  
  /**
   * Transformation for the preview only
   * @param config
   * @param context
   * @returns
   */
  export const previewConfigTransformer: WebpackConfigTransformer = (
    config: WebpackConfigMutator,
    context: WebpackConfigTransformContext
  ) => {
    const newConfig = commonTransformation(config, context);
    return newConfig;
  };
  
  /**
   * Transformation for the dev server only
   * @param config
   * @param context
   * @returns
   */
  export const devServerConfigTransformer: WebpackConfigTransformer = (
    config: WebpackConfigMutator,
    context: WebpackConfigTransformContext
  ) => {
    const newConfig = commonTransformation(config, context);
    return newConfig;
  };
  