//js1: _loadIssue3 
var s= "v0.0. 112 - ";
s += "<a target='_blank' href='https://github.com/littleflute/voa/issues/3'"
s += " style='color:lightblue;'";		s +=">"; s += "i3* ";
s += "<a target='_blank' href='https://github.com/littleflute/voa/edit/master/i/3/i.js'"
s += " style='color:blue;'";		s +=">"; s += "i.js* ";
s += "<a target='_blank' href='https://littleflute.github.io/voa/i/3/i.js'"
s += " style='color:green;'";		s +=">"; s += "i.js ";

var _pv = bl$("id_div_4_voa_plx");

var d = blo0.blDiv( _pv ,"id_mdiv_loadIssue3", s,  blGrey[3]);
if(!d.v){
 d.v = blo0.blDiv(d,d.id+"v","v:0.2",blGrey[0]);    
  function _Cs (o) {        
          var _i = 0; 
           d.v4Cs = blo0.blDiv(d,d.id+"v4Cs","v4Cs:v0.0.3", blGrey[0]);     

           for(i in o){
                  var a = o[i].body;
                  var btnJS = blo0.blBtn(  d.v4Cs,  d.v4Cs.id+"btnJS"+i, _i, blGrey[2]);
                  btnJS.onclick = function(_txt){
				               return function(){
                                                              eval( _txt);
                                               }
				        }(a);
                  _i++;
           }
  } 
 var _src = "https://api.github.com/repos/littleflute/voa/issues/3/comments";
 w3.getHttpObject(_src, _Cs);	
}
_on_off_div(null,d);
