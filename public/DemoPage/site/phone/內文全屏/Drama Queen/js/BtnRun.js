$(document).ready(function(){$(document).ready(function(){$('.Phone_List, .News_Popup_BB, .Pc_Prog_Popup, .Ph_Inte_over, #Scores_Con2').hide();});$('.Phone_Menu').mousedown(function(){$('.Phone_List').slideToggle("slow");})
$('#Score_a2').mousedown(function(){$('#Score_a2').attr('class','Scores_Btn1');$('#Score_a1').attr('class','Scores_Btn2');$('#Scores_Con2').show();$('#Scores_Con1').hide();})
$('#Score_a1').mousedown(function(){$('#Score_a1').attr('class','Scores_Btn1');$('#Score_a2').attr('class','Scores_Btn2');$('#Scores_Con1').show();$('#Scores_Con2').hide();})
$('#Popup_Btn').mousedown(function(){$('#Star_Popup').fadeIn();})
$('.News_Popup_XX').mousedown(function(){$('#Star_Popup').fadeOut();})
$('#Score_a3').mousedown(function(){$('#Score_a3').attr('class','Scores_In_Btn1');$('#Score_a4').attr('class','Scores_In_Btn2');$('#Scores_Con1').show();$('#Scores_Con2').hide();})
$('#Score_a4').mousedown(function(){$('#Score_a4').attr('class','Scores_In_Btn1');$('#Score_a3').attr('class','Scores_In_Btn2');$('#Scores_Con2').show();$('#Scores_Con1').hide();})
$('.Pc_Popup_XX').mousedown(function(){$('.Pc_Prog_Popup').fadeOut();})
$('#inte_B1').click(function(){$('#inte_O1').slideToggle(1500);})
$('#inte_B2').click(function(){$('#inte_O2').slideToggle(1500);})});$(function(){$(window).load(function(){$(window).bind('scroll resize',function(){var $this=$(this);var $this_Top=$this.scrollTop();if($this_Top<100){$('.GOTOP').stop().animate({bottom:"-65px"});}
if($this_Top>100){$('.GOTOP').stop().animate({bottom:"20px"});}}).scroll();});});