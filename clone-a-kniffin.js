if (Meteor.isClient) {
    Template.body.events({
        'click #target': function () {
              console.log("You pressed the button");
           $("img").clone().appendTo("body");
            
        }
    });
    
    Template.body.events({
        'click #reset': function () {
           console.log("You pressed the button");
           location.reload();
            
        }
    });
}

if (Meteor.isServer) {

}
