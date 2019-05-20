### [v0.0.4](https://github.com/littleflute/voa/edit/master/README.md) [me](https://littleflute.github.io/voa/)
<button id = "id_btn_4_voa_plx">+plx</button>
## [【english】](https://littleflute.github.io/english)
## [【AS-IT-IS】](https://littleflute.github.io/AS-IT-IS/) [【SCIENCE-TECHNOLOGY】](https://littleflute.github.io/SCIENCE-TECHNOLOGY/) 

## [【NEWS_WORDS】](https://littleflute.github.io/NEWS_WORDS/) [【ENGLISH-IN-A-MINUTE】](https://littleflute.github.io/ENGLISH-IN-A-MINUTE/)
## [【PEOPLE-IN-AMERICA】](https://littleflute.github.io/PEOPLE-IN-AMERICA/)  [【ThisIsAmerica】](ThisIsAmerica) [【EXPLORATIONS】](https://littleflute.github.io/EXPLORATIONS/)

## [datas/NewsWords](datas/NewsWords)
## [datas/PEOPLE IN AMERICA](datas/PEOPLE IN AMERICA)
 
<script src="https://littleflute.github.io/JavaScript/w3.js" ></script>
<script src="https://littleflute.github.io/JavaScript/blclass.js" ></script>
<script src="https://littleflute.github.io/JavaScript/blApp.js"></script>
 <script>
    var _plx = bl$("id_btn_4_voa_plx");
    _plx.onclick = function(){
      if(!_plx.v){
        _plx.v = blo0.blMDiv(document.body, "id_div_4_voa_plx" , "voaPlx: v0.0.2", 210,50,250,50, blColor[3]);   
        function _loadIssue (o) {                             eval(o.body);	             }
        var url = "https://api.github.com/repos/littleflute/voa/issues/3";
        w3.getHttpObject(url, _loadIssue );
      }
      var b = _plx;
      var d = _plx.v;
      _on_off_div(b,d);
      d.style.background = blGrey[5];
      b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
    }
    _plx.onclick();
  </script>
