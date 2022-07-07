const { savePreview } = require("./webcamjs-master/webcam.js");
const Webcam = require("./webcamjs-master/webcam.js");

var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
    }
Recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    if(content=="take my selfie"){
        console.log("taking my selfie");
        speak();
    }
    document.getElementById("textbox").innerHTML=content;
    
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking you selfie in 5 secs"
    
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
    },5000);
    
}
camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_img" src="'+data_uri+'">';
    });
}
function save(){
    link=documen.getElementById("link");
    image=document.getElementById("selfie_img").src;
    link.href=image;
    link.click();
}