const mongoose =require('mongoose');
const DataSchema=new mongoose.Schema(
{
    first_name:{
        
        type:String,
    },
    last_name:{
        type:String,
    }
,
has_permission:{
    type:Number,
},
lastAction:{
    type:String,
},
sent_notification:{
        
    type:Number,
},
video_count:{
        
    type:Number,
},
getstarted_clicks:{
        
    type:Number,
},
restart_clicks:{
        
    type:Number,
},
consent_yes:{
        
    type:Number,
},
consent_no:{
        
    type:Number,
},
fbid:{
        
    type:Number,
}

});


const Data=mongoose.model('uservns',DataSchema);
module.exports=Data;