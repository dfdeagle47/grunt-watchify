//var $ = window.jQuery = require('jquery');
//console.log(window.jQuery);

//var React = require('react');


require("async")
require("backbone")
require("d3")
//require("i18next")
require("jquery")
require("react")
require("underscore")
require("underscore.string")


console.log(React);

//console.log();
var el = window.document.querySelector('div');
el.innerHTML = 'Hello world! (from "src/main.js")';

$('body').addClass('test2');


var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
      </div>
    );
  }
});

var s = new CommentList();

console.log(s);