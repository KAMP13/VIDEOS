$(document).ready(function(){$("#submit_btn").click(function(){var user_name=$('input[name=name]').val();var user_phone=$('input[name=phone]').val();var user_date=$('input[name=date]').val();var user_time=$('input[name=time]').val();var user_message=$('textarea[name=message]').val();var proceed=true;if(user_name==""){$('input[name=name]').css('border-color','#e41919');proceed=false;}
if(user_phone==""){$('input[name=phone]').css('border-color','#e41919');proceed=false;}
if(proceed){post_data={'userName':user_name,'userPhone':user_phone,'userDate':user_date,'userTime':user_time,'userMessage':user_message};$.post('contact_reservations.php',post_data,function(response){if(response.type=='error'){output='<div class="error">'+response.text+'</div>';}
else{output='<div class="success">'+response.text+'</div>';$('#contact_form input').val('');$('#contact_form textarea').val('');}
$("#result").hide().html(output).slideDown();},'json');}
return false;});$("#contact_form input, #contact_form textarea").keyup(function(){$("#contact_form input, #contact_form textarea").css('border-color','');$("#result").slideUp();});});