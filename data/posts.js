const fs = require('node:fs/promises');

async function getStoredPosts() {
  const rawFileContent = await fs.readFile('posts.json', { encoding: 'utf-8' });
  try{
    const data=JSON.parse(rawFileContent);
    console.log(data)
  }
  catch(error){
    console.error(error)
  }
  const storedPosts = data.posts ?? [];

  return storedPosts;
}

function storePosts(posts) {
  return fs.writeFile('posts.json', JSON.stringify({ posts: posts || [] }));
}

exports.getStoredPosts = getStoredPosts;
exports.storePosts = storePosts;