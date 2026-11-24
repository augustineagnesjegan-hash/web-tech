(function(){
var $=function(i){return document.getElementById(i)};
var T=[['dark','Dark theme','Applies to Practicums 9–15.'],['notify','Toast notifications','Show in-page alerts (errors always show).'],['sound','Alert sound','Play a short tone with alerts.'],['compact','Compact layout','Smaller text and tighter cards.']];
function draw(){var s=FW.settings();$('tg').innerHTML='';
 T.forEach(function(t){var l=document.createElement('label');l.className='item';l.style.cssText='margin:0;display:flex;justify-content:space-between;align-items:center';
  l.innerHTML='<span><strong>'+t[1]+'</strong><br><small>'+t[2]+'</small></span>';
  var c=document.createElement('input');c.type='checkbox';c.className='switch';c.checked=!!s[t[0]];c.setAttribute('role','switch');
  c.onchange=function(){FW.setSetting(t[0],c.checked);if(t[0]==='sound'&&c.checked)FW.beep();FW.toast(t[1]+(c.checked?' on':' off'),'ok')};
  l.appendChild(c);$('tg').appendChild(l)})}
$('rst').onclick=function(){localStorage.removeItem(FW.K.set);FW.setSetting('dark',false);draw()};
draw();
})();
