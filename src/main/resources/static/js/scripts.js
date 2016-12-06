String.prototype.format = function() {
  var args = arguments;
  return this.replace(/{(\d+)}/g, function(match, number) {
    return typeof args[number] != 'undefined'
        ? args[number]
        : match
        ;
  });
};

$(".answer-write input[type='submit']").click( function(e) {
	console.log("submit clicked");
	e.preventDefault();
	
	var url = $(".answer-write").attr("action");
	console.log("url : " + url);
	
	var queryString = $(".answer-write").serialize();
	console.log("queryString : " + queryString);
	
	$.ajax({
        url : url,
        type : "POST",
        data : queryString,
        dataType : 'json',
        success : function(data) {
           console.log('success', data);
           
           var answerTemplate = $("#answerTemplate").html();
           var template = answerTemplate.format(data.writer.userId, data.formattedCreateDate, data.contents, data.question.id, data.id);
           $(".qna-comment-slipp-articles").prepend(template);
           $("textarea[name=contents]").val("");    
        },
        error : function(error) {
            console.log(error);
        }
    });
});

$("#comment-delete button[type='submit']").click( function(e) {
	console.log("comment delete");
	e.preventDefault();
	
	var url = $("#comment-delete").attr("action");
	console.log("url : " + url);
	
	$deleteBtn = $(this);
	
	$.ajax( {
		url : url,
		type : "delete",
		data : "",
		success : function(data) {
			console.log("comment delete success. url : ", url);
			console.log(data);
			if(data.valid == true) {
				console.log("delete true");
				$deleteBtn.closest(".article").remove();
			} 			
		},
		error : function(error) {
			console.log("comment delete error", error);
		}
	});
});