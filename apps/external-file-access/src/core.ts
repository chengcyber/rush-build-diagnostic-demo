import path from 'path';
import { JsonFile } from '@rushstack/node-core-library';

// !!! Access a file outside of the project directory
const rushJsonPath = path.resolve(__dirname, '../../rush.json');

export const core = () => {
  const { rushVersion } = JsonFile.load(rushJsonPath);
  console.log(`rushVersion: ${rushVersion}`);
}