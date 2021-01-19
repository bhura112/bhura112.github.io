
var getPageHeadTopicName = document.getElementById('page-topic-name');
var getPageHeadTopicIcon = document.getElementById('page-topic-icon');

window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
  if (document.documentElement.scrollTop >= 1) 
  {
    getPageHeadTopicName.classList.add('dec-page-topic-name');
    getPageHeadTopicIcon.classList.add('dec-page-topic-icon');
  } else {
    getPageHeadTopicName.classList.remove('dec-page-topic-name');
    getPageHeadTopicIcon.classList.remove('dec-page-topic-icon');
  }
}
