var $page=$("html, body");$('a[href*="#"]').click(function(){return $page.animate({scrollTop:$($.attr(this,"href")).offset().top},400),$("input:text:visible:first").focus(),!1}),$(function(){$("form[name='contact']").validate({rules:{firstname:{required:!0,minlength:3},email:{required:!0,email:!0},message:{required:!0,minlength:5}},messages:{firstname:"Please enter your name",message:{required:"Please provide a text",minlength:"Your text must be at least 5 characters long"},email:"Please enter a valid email address"},submitHandler:function(e){e.submit(),alert("invalid!")}})}),$(document).ready(function(){$(".owl-carousel").owlCarousel({items:1,loop:!0,nav:!0,autoplay:!0,autoplayHoverPause:!0,autoWidth:!0,autoHeight:!0,center:!0,navText:['<div class="prev"></div>','<div class="next"></div>']})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuY2hvci5qcyIsImZvcm0tdmFsaWRhdGlvbi5qcyIsInNjcmlwdC5qcyIsInNsaWRlci5qcyJdLCJuYW1lcyI6WyIkcGFnZSIsIiQiLCJjbGljayIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJhdHRyIiwidGhpcyIsIm9mZnNldCIsInRvcCIsImZvY3VzIiwidmFsaWRhdGUiLCJydWxlcyIsImZpcnN0bmFtZSIsInJlcXVpcmVkIiwibWlubGVuZ3RoIiwiZW1haWwiLCJtZXNzYWdlIiwibWVzc2FnZXMiLCJzdWJtaXRIYW5kbGVyIiwiZm9ybSIsInN1Ym1pdCIsImFsZXJ0IiwiZG9jdW1lbnQiLCJyZWFkeSIsIm93bENhcm91c2VsIiwiaXRlbXMiLCJsb29wIiwibmF2IiwiYXV0b3BsYXkiLCJhdXRvcGxheUhvdmVyUGF1c2UiLCJhdXRvV2lkdGgiLCJhdXRvSGVpZ2h0IiwiY2VudGVyIiwibmF2VGV4dCJdLCJtYXBwaW5ncyI6IkFBQ0EsSUFBSUEsTUFBUUMsRUFBRSxjQUNkQSxFQUFFLGdCQUFnQkMsTUFBTSxXQUtwQixPQUpBRixNQUFNRyxRQUFRLENBQ1ZDLFVBQVdILEVBQUVBLEVBQUVJLEtBQUtDLEtBQU0sU0FBU0MsU0FBU0MsS0FDN0MsS0FDSFAsRUFBRSw0QkFBNEJRLFNBQ3ZCLElBSVhSLEVBQUUsV0FHRUEsRUFBRSx3QkFBd0JTLFNBQVMsQ0FFL0JDLE1BQU8sQ0FJSEMsVUFBVyxDQUNQQyxVQUFVLEVBQ1ZDLFVBQVcsR0FFZkMsTUFBTyxDQUNIRixVQUFVLEVBR1ZFLE9BQU8sR0FFWEMsUUFBUyxDQUNMSCxVQUFVLEVBQ1ZDLFVBQVcsSUFJbkJHLFNBQVUsQ0FDTkwsVUFBVyx5QkFDWEksUUFBUyxDQUNMSCxTQUFVLHdCQUNWQyxVQUFXLGdEQUVmQyxNQUFPLHNDQUlYRyxjQUFlLFNBQVNDLEdBQ3BCQSxFQUFLQyxTQUNMQyxNQUFNLGlCQVVsQnBCLEVBQUVxQixVQUFVQyxNQUFNLFdBQ2R0QixFQUFFLGlCQUFpQnVCLFlBQVksQ0FDM0JDLE1BQU8sRUFDUEMsTUFBTSxFQUNOQyxLQUFLLEVBQ0xDLFVBQVMsRUFDVEMsb0JBQW9CLEVBQ3BCQyxXQUFXLEVBQ1hDLFlBQVksRUFDWkMsUUFBUSxFQUNSQyxRQUFTLENBQUMsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQW5jaG9yXG52YXIgJHBhZ2UgPSAkKCdodG1sLCBib2R5Jyk7XG4kKCdhW2hyZWYqPVwiI1wiXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICRwYWdlLmFuaW1hdGUoe1xuICAgICAgICBzY3JvbGxUb3A6ICQoJC5hdHRyKHRoaXMsICdocmVmJykpLm9mZnNldCgpLnRvcFxuICAgIH0sIDQwMCk7XG4gICAgJChcImlucHV0OnRleHQ6dmlzaWJsZTpmaXJzdFwiKS5mb2N1cygpO1xuICAgIHJldHVybiBmYWxzZTtcbn0pO1xuIiwiLy8gV2FpdCBmb3IgdGhlIERPTSB0byBiZSByZWFkeVxuJChmdW5jdGlvbigpIHtcbiAgICAvLyBJbml0aWFsaXplIGZvcm0gdmFsaWRhdGlvbiBvbiB0aGUgcmVnaXN0cmF0aW9uIGZvcm0uXG4gICAgLy8gSXQgaGFzIHRoZSBuYW1lIGF0dHJpYnV0ZSBcInJlZ2lzdHJhdGlvblwiXG4gICAgJChcImZvcm1bbmFtZT0nY29udGFjdCddXCIpLnZhbGlkYXRlKHtcbiAgICAgICAgLy8gU3BlY2lmeSB2YWxpZGF0aW9uIHJ1bGVzXG4gICAgICAgIHJ1bGVzOiB7XG4gICAgICAgICAgICAvLyBUaGUga2V5IG5hbWUgb24gdGhlIGxlZnQgc2lkZSBpcyB0aGUgbmFtZSBhdHRyaWJ1dGVcbiAgICAgICAgICAgIC8vIG9mIGFuIGlucHV0IGZpZWxkLiBWYWxpZGF0aW9uIHJ1bGVzIGFyZSBkZWZpbmVkXG4gICAgICAgICAgICAvLyBvbiB0aGUgcmlnaHQgc2lkZVxuICAgICAgICAgICAgZmlyc3RuYW1lOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbWlubGVuZ3RoOiAzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyBTcGVjaWZ5IHRoYXQgZW1haWwgc2hvdWxkIGJlIHZhbGlkYXRlZFxuICAgICAgICAgICAgICAgIC8vIGJ5IHRoZSBidWlsdC1pbiBcImVtYWlsXCIgcnVsZVxuICAgICAgICAgICAgICAgIGVtYWlsOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbmxlbmd0aDogNVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyBTcGVjaWZ5IHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXNcbiAgICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgICAgIGZpcnN0bmFtZTogXCJQbGVhc2UgZW50ZXIgeW91ciBuYW1lXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiUGxlYXNlIHByb3ZpZGUgYSB0ZXh0XCIsXG4gICAgICAgICAgICAgICAgbWlubGVuZ3RoOiBcIllvdXIgdGV4dCBtdXN0IGJlIGF0IGxlYXN0IDUgY2hhcmFjdGVycyBsb25nXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbWFpbDogXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzXCJcbiAgICAgICAgfSxcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZCB0byB0aGUgZGVzdGluYXRpb24gZGVmaW5lZFxuICAgICAgICAvLyBpbiB0aGUgXCJhY3Rpb25cIiBhdHRyaWJ1dGUgb2YgdGhlIGZvcm0gd2hlbiB2YWxpZFxuICAgICAgICBzdWJtaXRIYW5kbGVyOiBmdW5jdGlvbihmb3JtKSB7XG4gICAgICAgICAgICBmb3JtLnN1Ym1pdCgpO1xuICAgICAgICAgICAgYWxlcnQoJ2ludmFsaWQhJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyIsIlxuXG5cblxuIiwiLy8gU2xpZGVyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICQoJy5vd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgIGl0ZW1zOiAxLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5OnRydWUsXG4gICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcbiAgICAgICAgYXV0b1dpZHRoOiB0cnVlLFxuICAgICAgICBhdXRvSGVpZ2h0OiB0cnVlLFxuICAgICAgICBjZW50ZXI6IHRydWUsXG4gICAgICAgIG5hdlRleHQ6IFsnPGRpdiBjbGFzcz1cInByZXZcIj48L2Rpdj4nLCc8ZGl2IGNsYXNzPVwibmV4dFwiPjwvZGl2PiddXG4gICAgfSk7XG59KTsiXSwiZmlsZSI6InNjcmlwdC1taW4uanMifQ==
