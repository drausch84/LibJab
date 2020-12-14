$(function(){
    // Hide story from the user upon initial view
    $("#story").hide();

    //Event Handler
    $("#generate-story").click(function(e){
        e.preventDefault()

        //Take the User-inputed Values and Add to the Story
        $(".pet-name").empty().append($("input.pet-name").val());
        $(".adjective").empty().append($("input.adjective").val());
        $(".color").empty().append($("input.color").val());
        $(".rhyme-word").empty().append($("input.rhyme-word").val());
        $(".adverb").empty().append($("input.adverb").val());
        $(".body-part").empty().append($("input.body-part").val());
        $(".best-friend-name").empty().append($("input.best-friend-name").val());
        $(".clothing").empty().append($("input.clothing").val());
        $(".ice-cream-flavor").empty().append($("input.ice-cream-flavor").val());
        $(".us-city").empty().append($("input.us-city").val());
        $(".food").empty().append($("input.food").val());
        $(".celeb-name").empty().append($("input.celeb-name").val());
        $(".recreational-activity").empty().append($("input.recreational-activity").val());
        $(".funny-phrase").empty().append($("input.funny-phrase").val());
        $(".personality-trait").empty().append($("input.personality-trait").val());
        $(".verb").empty().append($("input.verb").val());
        $(".emotion").empty().append($("input.emotion").val());
        $(".plural-noun").empty().append($("input.plural-noun").val());
        $(".animal").empty().append($("input.animal").val());

        //Reveal generated story to user
        $("#story").show();

        //Empty the values in the user-form
        $(':input').val('');

        //Hide user choices
        $(".questionaire").hide();

    });

    //Event Handler
    $("#redo-story").click(function(e){
        $(".questionaire").show();
        $("#story").hide();
    });
});