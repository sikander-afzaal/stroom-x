const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const display = document.querySelector("#display");
const weeks = document.querySelectorAll(".week-btn");
const images = document.querySelectorAll(".white-box-desktop > img");
console.log(parseInt(display.innerText) + 1);
add.addEventListener("click", () => {
  display.innerText = parseInt(display.innerText) + 1;
});
subtract.addEventListener("click", () => {
  if (parseInt(display.innerText) > 0) {
    display.innerText = parseInt(display.innerText) - 1;
  }
});
const add1 = document.querySelector("#add1");
const subtract1 = document.querySelector("#subtract1");
const display1 = document.querySelector("#display1");
console.log(parseInt(display1.innerText) + 1);
add1.addEventListener("click", () => {
  display1.innerText = parseInt(display1.innerText) + 1;
});
subtract1.addEventListener("click", () => {
  if (parseInt(display1.innerText) > 0) {
    display1.innerText = parseInt(display1.innerText) - 1;
  }
});
///////////////////////////////////////////////////////////
$(".selected").click(() => {
  $(".drop-down").toggleClass("open");
  $(".fa-chevron-down").toggleClass("rotate");
  $(".active").toggleClass("width");
});
weeks.forEach((week) => {
  $(week).click(() => {
    $(".drop-down").toggleClass("open");
    $(".fa-chevron-down").toggleClass("rotate");
    $(".selected").text(week.innerText);
    $(".active").toggleClass("width");
  });
});
if ($(window).width() <= 505) {
  $(".swiper-button-prev").addClass("desktop");
  $(".swiper-button-next").addClass("desktop");
  images.forEach((removal) => {
    removal.classList.remove("white-box-img");
  });
  $("#weeks").removeClass("weeks");
  $("#weeks").addClass("selection");
  $("#drop").addClass("drop-down");
  console.log("hi");
} else {
  $(".swiper-button-prev").removeClass("desktop");
  $(".swiper-button-next").removeClass("desktop");
  $("#weeks").addClass("weeks");
  $("#weeks").removeClass("selection");
  $("#drop").removeClass("drop-down");
  images.forEach((removal) => {
    removal.classList.add("white-box-img");
  });
}
/////////////////////////////////////////////////
const imageSource = {
  week1: [
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
  ],
  week2: [
    "https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=6&m=535695503&s=612x612&w=0&h=uP8aDK4xlfjk3kEiyr9wwUiuh80UwAiICweFpiBDosk=",
    "https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=6&m=535695503&s=612x612&w=0&h=uP8aDK4xlfjk3kEiyr9wwUiuh80UwAiICweFpiBDosk=",
    "https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=6&m=535695503&s=612x612&w=0&h=uP8aDK4xlfjk3kEiyr9wwUiuh80UwAiICweFpiBDosk=",
    "https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=6&m=535695503&s=612x612&w=0&h=uP8aDK4xlfjk3kEiyr9wwUiuh80UwAiICweFpiBDosk=",
    "https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=6&m=535695503&s=612x612&w=0&h=uP8aDK4xlfjk3kEiyr9wwUiuh80UwAiICweFpiBDosk=",
    "https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=6&m=535695503&s=612x612&w=0&h=uP8aDK4xlfjk3kEiyr9wwUiuh80UwAiICweFpiBDosk=",
    "https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=6&m=535695503&s=612x612&w=0&h=uP8aDK4xlfjk3kEiyr9wwUiuh80UwAiICweFpiBDosk=",
    "https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=6&m=535695503&s=612x612&w=0&h=uP8aDK4xlfjk3kEiyr9wwUiuh80UwAiICweFpiBDosk=",
  ],
  week3: [
    "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
    "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
    "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
    "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
    "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
    "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
    "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
    "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
  ],
  week4: [
    "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg",
    "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg",
    "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg",
    "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg",
    "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg",
    "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg",
    "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg",
    "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg",
  ],
  week5: [
    "https://image.shutterstock.com/image-photo/unity-diversity-partnership-heart-hands-260nw-1532068016.jpg",
    "https://image.shutterstock.com/image-photo/unity-diversity-partnership-heart-hands-260nw-1532068016.jpg",
    "https://image.shutterstock.com/image-photo/unity-diversity-partnership-heart-hands-260nw-1532068016.jpg",
    "https://image.shutterstock.com/image-photo/unity-diversity-partnership-heart-hands-260nw-1532068016.jpg",
    "https://image.shutterstock.com/image-photo/unity-diversity-partnership-heart-hands-260nw-1532068016.jpg",
    "https://image.shutterstock.com/image-photo/unity-diversity-partnership-heart-hands-260nw-1532068016.jpg",
    "https://image.shutterstock.com/image-photo/unity-diversity-partnership-heart-hands-260nw-1532068016.jpg",
    "https://image.shutterstock.com/image-photo/unity-diversity-partnership-heart-hands-260nw-1532068016.jpg",
  ],
  week6: [
    "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
    "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
    "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
    "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
    "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
    "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
    "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
    "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
  ],
  week7: [
    "https://www.nature.com/immersive/d41586-021-00095-y/assets/3TP4N718ac/2021-01-xx_jan-iom_tree-of-life_sh-1080x1440.jpeg",
    "https://www.nature.com/immersive/d41586-021-00095-y/assets/3TP4N718ac/2021-01-xx_jan-iom_tree-of-life_sh-1080x1440.jpeg",
    "https://www.nature.com/immersive/d41586-021-00095-y/assets/3TP4N718ac/2021-01-xx_jan-iom_tree-of-life_sh-1080x1440.jpeg",
    "https://www.nature.com/immersive/d41586-021-00095-y/assets/3TP4N718ac/2021-01-xx_jan-iom_tree-of-life_sh-1080x1440.jpeg",
    "https://www.nature.com/immersive/d41586-021-00095-y/assets/3TP4N718ac/2021-01-xx_jan-iom_tree-of-life_sh-1080x1440.jpeg",
    "https://www.nature.com/immersive/d41586-021-00095-y/assets/3TP4N718ac/2021-01-xx_jan-iom_tree-of-life_sh-1080x1440.jpeg",
    "https://www.nature.com/immersive/d41586-021-00095-y/assets/3TP4N718ac/2021-01-xx_jan-iom_tree-of-life_sh-1080x1440.jpeg",
    "https://www.nature.com/immersive/d41586-021-00095-y/assets/3TP4N718ac/2021-01-xx_jan-iom_tree-of-life_sh-1080x1440.jpeg",
  ],
  week8: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1E5SKljnQvLKVwFk1dcOTKNBVGvbyDNl_qA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1E5SKljnQvLKVwFk1dcOTKNBVGvbyDNl_qA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1E5SKljnQvLKVwFk1dcOTKNBVGvbyDNl_qA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1E5SKljnQvLKVwFk1dcOTKNBVGvbyDNl_qA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1E5SKljnQvLKVwFk1dcOTKNBVGvbyDNl_qA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1E5SKljnQvLKVwFk1dcOTKNBVGvbyDNl_qA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1E5SKljnQvLKVwFk1dcOTKNBVGvbyDNl_qA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1E5SKljnQvLKVwFk1dcOTKNBVGvbyDNl_qA&usqp=CAU",
  ],
  week9: [
    "https://static.toiimg.com/photo/72975551.cms",
    "https://static.toiimg.com/photo/72975551.cms",
    "https://static.toiimg.com/photo/72975551.cms",
    "https://static.toiimg.com/photo/72975551.cms",
    "https://static.toiimg.com/photo/72975551.cms",
    "https://static.toiimg.com/photo/72975551.cms",
    "https://static.toiimg.com/photo/72975551.cms",
    "https://static.toiimg.com/photo/72975551.cms",
  ],
  week10: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjG9J96SgG1sLq0UdulBfRYAEMtkJnAmeOw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjG9J96SgG1sLq0UdulBfRYAEMtkJnAmeOw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjG9J96SgG1sLq0UdulBfRYAEMtkJnAmeOw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjG9J96SgG1sLq0UdulBfRYAEMtkJnAmeOw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjG9J96SgG1sLq0UdulBfRYAEMtkJnAmeOw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjG9J96SgG1sLq0UdulBfRYAEMtkJnAmeOw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjG9J96SgG1sLq0UdulBfRYAEMtkJnAmeOw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjG9J96SgG1sLq0UdulBfRYAEMtkJnAmeOw&usqp=CAU",
  ],
  week11: [
    "https://media.istockphoto.com/photos/colored-powder-explosion-abstract-closeup-dust-on-backdrop-colorful-picture-id1072093690?k=6&m=1072093690&s=612x612&w=0&h=Eyk67XBt4sr3Bk1MubM6dHpvEVNICX4L7FumWhcTwuY=",
    "https://media.istockphoto.com/photos/colored-powder-explosion-abstract-closeup-dust-on-backdrop-colorful-picture-id1072093690?k=6&m=1072093690&s=612x612&w=0&h=Eyk67XBt4sr3Bk1MubM6dHpvEVNICX4L7FumWhcTwuY=",
    "https://media.istockphoto.com/photos/colored-powder-explosion-abstract-closeup-dust-on-backdrop-colorful-picture-id1072093690?k=6&m=1072093690&s=612x612&w=0&h=Eyk67XBt4sr3Bk1MubM6dHpvEVNICX4L7FumWhcTwuY=",
    "https://media.istockphoto.com/photos/colored-powder-explosion-abstract-closeup-dust-on-backdrop-colorful-picture-id1072093690?k=6&m=1072093690&s=612x612&w=0&h=Eyk67XBt4sr3Bk1MubM6dHpvEVNICX4L7FumWhcTwuY=",
    "https://media.istockphoto.com/photos/colored-powder-explosion-abstract-closeup-dust-on-backdrop-colorful-picture-id1072093690?k=6&m=1072093690&s=612x612&w=0&h=Eyk67XBt4sr3Bk1MubM6dHpvEVNICX4L7FumWhcTwuY=",
    "https://media.istockphoto.com/photos/colored-powder-explosion-abstract-closeup-dust-on-backdrop-colorful-picture-id1072093690?k=6&m=1072093690&s=612x612&w=0&h=Eyk67XBt4sr3Bk1MubM6dHpvEVNICX4L7FumWhcTwuY=",
    "https://media.istockphoto.com/photos/colored-powder-explosion-abstract-closeup-dust-on-backdrop-colorful-picture-id1072093690?k=6&m=1072093690&s=612x612&w=0&h=Eyk67XBt4sr3Bk1MubM6dHpvEVNICX4L7FumWhcTwuY=",
    "https://media.istockphoto.com/photos/colored-powder-explosion-abstract-closeup-dust-on-backdrop-colorful-picture-id1072093690?k=6&m=1072093690&s=612x612&w=0&h=Eyk67XBt4sr3Bk1MubM6dHpvEVNICX4L7FumWhcTwuY=",
  ],
  week12: [
    "https://media.istockphoto.com/photos/beautiful-view-of-bahadurabad-chorangi-karachi-pakistan-picture-id1127500841?k=6&m=1127500841&s=612x612&w=0&h=VW7g8XupCm-z7sCpEYwDd-ZpwcFsTYJ4Is4eXF9Sv_M=",
    "https://media.istockphoto.com/photos/beautiful-view-of-bahadurabad-chorangi-karachi-pakistan-picture-id1127500841?k=6&m=1127500841&s=612x612&w=0&h=VW7g8XupCm-z7sCpEYwDd-ZpwcFsTYJ4Is4eXF9Sv_M=",
    "https://media.istockphoto.com/photos/beautiful-view-of-bahadurabad-chorangi-karachi-pakistan-picture-id1127500841?k=6&m=1127500841&s=612x612&w=0&h=VW7g8XupCm-z7sCpEYwDd-ZpwcFsTYJ4Is4eXF9Sv_M=",
    "https://media.istockphoto.com/photos/beautiful-view-of-bahadurabad-chorangi-karachi-pakistan-picture-id1127500841?k=6&m=1127500841&s=612x612&w=0&h=VW7g8XupCm-z7sCpEYwDd-ZpwcFsTYJ4Is4eXF9Sv_M=",
    "https://media.istockphoto.com/photos/beautiful-view-of-bahadurabad-chorangi-karachi-pakistan-picture-id1127500841?k=6&m=1127500841&s=612x612&w=0&h=VW7g8XupCm-z7sCpEYwDd-ZpwcFsTYJ4Is4eXF9Sv_M=",
    "https://media.istockphoto.com/photos/beautiful-view-of-bahadurabad-chorangi-karachi-pakistan-picture-id1127500841?k=6&m=1127500841&s=612x612&w=0&h=VW7g8XupCm-z7sCpEYwDd-ZpwcFsTYJ4Is4eXF9Sv_M=",
    "https://media.istockphoto.com/photos/beautiful-view-of-bahadurabad-chorangi-karachi-pakistan-picture-id1127500841?k=6&m=1127500841&s=612x612&w=0&h=VW7g8XupCm-z7sCpEYwDd-ZpwcFsTYJ4Is4eXF9Sv_M=",
    "https://media.istockphoto.com/photos/beautiful-view-of-bahadurabad-chorangi-karachi-pakistan-picture-id1127500841?k=6&m=1127500841&s=612x612&w=0&h=VW7g8XupCm-z7sCpEYwDd-ZpwcFsTYJ4Is4eXF9Sv_M=",
  ],
};
var weekNumber = "";
weeks.forEach((week) => {
  $(week).click(() => {
    if (week.innerText.length == 6) {
      weekNumber = week.innerText.charAt(5);
    } else {
      weekNumber = week.innerText.slice(-2);
    }
    const images = document.querySelectorAll(".white-box-img");
    const object = "week" + weekNumber;
    images.forEach((image, index) => {
      $(image).attr("src", imageSource[object][index]);
    });
  });
});
