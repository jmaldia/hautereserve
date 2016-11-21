var posts = [
  {
    title     : 'Title 1',
    upvotes   : 0,
    downvotes : 12,
    author    : 'foo',
    body      : 'This is the post I have. 1'
  },
  {
    title     : 'Title 2',
    upvotes   : 10,
    downvotes : 11,
    author    : 'foo',
    body      : 'This is the post I have. 2'
  },
  {
    title     : 'Title 3',
    upvotes   : 5,
    downvotes : 2,
    author    : 'foo',
    body      : 'This is the post I have. 3'
  }
]

function getBestPost(posts) {
  var result = posts[0];
  
  for (var i = 0; i < posts.length; i++) {
    var currentPost = posts[i];
    
    if (calculateScore(currentPost) > calculateScore(result)) {
      result = currentPost;
    }
  }
  
  return result;
}


function calculateScore(post) {
  return post.upvotes - post.downvotes;
}


alert(getBestPost(posts));