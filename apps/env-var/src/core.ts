let publicPath = 'https://www.example.com';

// !!! Reply on esbuild define feature
if (__DEV__) {
  publicPath = 'https://dev.example.com';
}

export const core = () => {
  console.log(`publicPath: ${publicPath}`)
}