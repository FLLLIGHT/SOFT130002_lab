window.onload= function () {
    let smallImgs = document.getElementById("thumbnails").getElementsByTagName("img");
    let bigImg = document.getElementById("featured");

    //task1
    for(let index=0;index<=smallImgs.length-1;index++) {
        smallImgs[index].onclick = function () {
            bigImg.getElementsByTagName("img")[0].src = smallImgs[index].src.replace("small","medium");
            bigImg.getElementsByTagName("figcaption")[0].innerText = String(smallImgs[index].title);
            bigImg.getElementsByTagName("img")[0].title = smallImgs[index].title;
        }
    }

    //task2
    document.getElementById("featured").onmouseenter = function () {
        fadein(document.getElementById("featured").getElementsByTagName("figcaption")[0],0.8,1000);
    }
    document.getElementById("featured").onmouseleave = function () {
        fadeout(document.getElementById("featured").getElementsByTagName("figcaption")[0],0.8,1000);
    }
}


function fadein(ele, opacity, speed) {
    if (ele) {
        var v = 0;
        var avg = opacity / 50;
        var timer = null;
        timer = setInterval(function() {
            if (v < opacity) {
                v += avg;
                ele.style.opacity = v;
            } else {
                clearInterval(timer);
            }
        }, 20);
    }
}

function fadeout(ele, opacity, speed) {
    if (ele) {
        var v = 0.8;
        var avg = opacity / 50;
        var timer = null;
        timer = setInterval(function() {
            if (v > 0) {
                v -= avg;
                ele.style.opacity = v;
            } else {
                clearInterval(timer);
            }
        }, 20);
    }
}
