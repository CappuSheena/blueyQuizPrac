document.getElementById("continue__to_quiz").addEventListener("click", function() {
    window.location.href = "questions.html";
});


document.getElementById('admin_q_btn').addEventListener('click', function() {
    document.getElementById("admin_validation_card").style.display = "flex";
    document.getElementById("body_background_img").classList.add('popup_active_body_blur');
    document.getElementById("title_header").classList.add('popup_active_body_blur');
    document.getElementById("index_intro_card").classList.add('popup_active_body_blur');
    document.getElementById("admin_validation_card").classList.add('popup_active_non_blur');
    document.getElementById("admin_q_btn").classList.add('popup_active_body_blur');

});

document.getElementById('admin_exit_btn').addEventListener('click', function() {
    document.getElementById("admin_validation_card").style.display = "none";
    document.getElementById("body_background_img").classList.remove('popup_active_body_blur');
    document.getElementById("title_header").classList.remove('popup_active_body_blur');
    document.getElementById("index_intro_card").classList.remove('popup_active_body_blur');
    document.getElementById("admin_validation_card").classList.remove('popup_active_non_blur');
    document.getElementById("admin_q_btn").classList.remove('popup_active_body_blur');

});


