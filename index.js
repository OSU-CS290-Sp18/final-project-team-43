
function createNewPost(postText, postAuthor, postDate, postTitle)
{
  var postElem = document.createElement('article');
  postElem.classList.add('post');

  var postContentElem = document.createElement('div');
  postContentElem.classList.add('post-content');
  postElem.appendChild(postContentElem);

  var postTextNode = document.createTextNode(postText);
  var postTextElem = document.createElement('p');
  postTextElem.classlist.add('post-body');

  var postAuthorNode = document.createTextNode(postAuthor);
  var postAuthorLinkElem = document.createElement('a');
  postAuthorLinkElem.href = '#';
  postAuthorLinkElem.appendChild(postAuthorNode);

  var postAuthorElem = document.createElement('p');
  postAuthorElem.classList.add('post-author');
  postAuthorElem.appendChild(postAuthorLinkElem);
  postElem.appendChild(postAuthorElem);

  var postDateNode = document.createTextNode(postDate);
  var postDateElem = document.createElement('p');
  postDateElem.classList.add('post-date');

  var postTitleNode = document.createTextNode(postTitle);
  var postTitleElem = document.createElement('p');
  postTitleElem.classlist.add('post-title');

  var postcontainer = document.querySelector('main.container');
  postcontainer.appendChild(postElem);

}

var allPosts = [];

function handleModalAcceptClick()
{
  var postBody = document.getElementById('post-body');
  var postAuthor = document.getElementById('post-author');
  var postDate = document.getElementById('post-date');
  var postTitle = document.getElementById('post-title');

  if (postBody && postAuthor && postDate && postTitle)
  {
    allPosts.push({text: postBody, author: postAuthor, date: postDate, title: postTitle});

    hidePostModal();
  }
  else
  {
    alert('Please enter all fields that are required.');
  }
}

function showMakePostModal()
{
  var modalBackdrop = document.getElementById('modal-backdrop');
  var creatPostModal = document.getElementById('make-post-modal');

  modalBackdrop.classlist.remove('hidden');
  createPostModal.classList.remove('hidden');
}


function clearValues()
{
  var postInputElements = document.getElementsByClassName('post-input-element');
  for (var i = 0; i < postInputElements.length; i++)
  {
    var input = postInputElements[i].querySelector('input', 'textarea');
    input.value = '';
  }
}

function hidePostModal()
{
  var modalBackdrop = document.getElementById('modal-backdrop');
  var creatPostModal = document.getElementById('make-post-modal');

  modalBackdrop.classlist.add('hidden');
  createPostModal.classList.add('hidden');
}

window.addEventListener('DOMContentLoaded', function() 
{
  var newPostButton = document.getElementById('make-new-post');
  if (newPostButton)
  {
    newPostButton.addEventListener('click', showMakePostModal);
  }

  var modalCloseButton = document.querySelector('#make-post-modal');
  if (modalCloseButton)
  {
    modalCloseButton.addEventListener('click', hidePostModal);
  }

  var modalCancelButton = document.querySelector('#make-post-modal');
  if (modalCancelButton)
  {
    modalCancelButton.addEventListener('click', hidePostModal);
  }

  var modalAcceptButton = document.querySelector('#make-post-modal');
  if (modalAcceptButton)
  {
    modalAcceptButton.addEventListener('click', handleModalAcceptClick);
  }
  
})