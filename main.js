prediction_1 = ""
prediction_2 = ""
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90,
    flip_horiz: true
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "captured_image" src = "' + data_uri + '"/>';
       });
}
console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/f12boZC2S/model.json', modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "And the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}
function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
    }
    if(results[0].label == "Victory"){
        document.getElementById("update_emoji").innerHTML = "✌️";
        document.getElementById("update_about").innerHTML = "The victory sign: Because winning at life requires only two fingers and a positive attitude!";
    }
    if(results[0].label == "Swag"){
        document.getElementById("update_emoji").innerHTML = "🤘";
        document.getElementById("update_about").innerHTML = "The swag sign: Because even emojis know that sometimes you've got to add a touch of style to your digital conversations!";
    }
    
    if(results[0].label == "Finger Heart"){
        document.getElementById("update_emoji").innerHTML = "🫰";
        document.getElementById("update_about").innerHTML = "The finger heart: A sweet and adorable gesture, expressing love and affection in the form of a tiny heart made with your fingers. Spread the love! 💖";
    }
    if(results[0].label == "Finger Crossed"){
        document.getElementById("update_emoji").innerHTML = "🤞";
        document.getElementById("update_about").innerHTML = "The crossed fingers: A hopeful gesture, often used when wishing for good luck or expressing optimism.";
    }
    if(results[0].label == "Thumbs Down"){
        document.getElementById("update_emoji").innerHTML = "👎";
        document.getElementById("update_about").innerHTML = "Thumbs down: Typically indicating disapproval or a negative sentiment.";
    }
    if(results[0].label == "Thumbs Up"){
        document.getElementById("update_emoji").innerHTML = "👍";
        document.getElementById("update_about").innerHTML = "Thumbs up: A positive and approving gesture, often used to show agreement or approval.";
    }

    if(results[1].label == "Victory"){
        document.getElementById("update_emoji2").innerHTML = "✌️";
        document.getElementById("update_about2").innerHTML = "The victory sign: Because winning at life requires only two fingers and a positive attitude!";
    }
    if(results[1].label == "Swag"){
        document.getElementById("update_emoji2").innerHTML = "🤘";
        document.getElementById("update_about2").innerHTML = "The swag sign: Because even emojis know that sometimes you've got to add a touch of style to your digital conversations!";
    }
    if(results[1].label == "Finger Heart"){
        document.getElementById("update_emoji2").innerHTML = "🫰";
        document.getElementById("update_about2").innerHTML = "The finger heart: A sweet and adorable gesture, expressing love and affection in the form of a tiny heart made with your fingers. Spread the love! 💖";
    }
    if(results[1].label == "Finger Crossed"){
        document.getElementById("update_emoji2").innerHTML = "🤞";
        document.getElementById("update_about2").innerHTML = "The crossed fingers: A hopeful gesture, often used when wishing for good luck or expressing optimism.";
    }
    if(results[1].label == "Thumbs Down"){
        document.getElementById("update_emoji2").innerHTML = "👎";
        document.getElementById("update_about2").innerHTML = "Thumbs down: Typically indicating disapproval or a negative sentiment.";
    }
    if(results[1].label == "Thumbs Up"){
        document.getElementById("update_emoji2").innerHTML = "👍";
        document.getElementById("update_about2").innerHTML = "Thumbs up: A positive and approving gesture, often used to show agreement or approval.";
    }
}