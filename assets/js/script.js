let banner_arr = ['0',
    '1', '2', '3',
    '4', '5', '6'];
let show;
let index = 0;
function pluss(next) {
    index += next;
    if (index < 0) {
        index = 6;
    }
    else if (index > banner_arr.length - 1) {
        index = 0;
    }
    slideShow(index);
}

function slideShow(value) {
    index = value;
    document.getElementById('sliders').style.background = `url(/assets/img/banner/banner_${index}.webp) lightblue top center / cover no-repeat`;
    let dots = document.getElementsByClassName("ti-control-record");
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
      }
      dots[index].className += " active";
}
show = setInterval('pluss(1)', 4000);