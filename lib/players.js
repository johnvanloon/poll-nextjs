import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'data');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileName = "players.json"

  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  
}
