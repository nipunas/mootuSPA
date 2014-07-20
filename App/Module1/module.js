define(function(){
   return{
       getHello: function(){
           return "Hello";
       },
       
       stringWrappedHtml : function(){
           return "<p>This is sample data brought <b>just for you </b>by Nipuna Silva</p>";
       },
       
       loadHtml : function(){
           var c = $('domElement');
           c.load('module.html');
           
           return c;
       }
       
   };
});