function startclassification()
{
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/LGPCLnkfD/model.json",modelRedy);
}
function modelRedy()
{
    classifier.classify(gotresults);
}
function gotresults(error,result)
{
if(error){
    console.log(error); 

}
else{
    console.log(result);
    random_number_r=Math.floor(Math.random()*255)+1;
random_number_g=Math.floor(Math.random()*255)+1;
random_number_b=Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML='I can hear - '+
    result[0].label;
    document.getElementById("result_confidence").innerHTML='Accuracy - '+
    (result[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color='rgb('
    +random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color='rgb('
    +random_number_r+","+random_number_g+","+random_number_b+")";


    img=document.getElementById('IMG_6137 2.JPG');
    img1=document.getElementById('IMG_6138 2.JPG');
    img2=document.getElementById('IMG_6139 2.JPG');
    img3=document.getElementById('IMG_6140 2.JPG');
 if(result[0].label=="cat"){
    img.src='68349-cat-tail-wag.gif';
    img1.src='IMG_6140 2.JPG';
    img2.src='IMG_6138 2.JPG';
    img3.src='IMG_6139 2.JPG';
 }else if(result[0].label=="cow"){
    img.src='IMG_6140 2.JPG';
    img1.src='IMG_6138 2.JPG';
    img2.src='IMG_6139 2.JPG';
    img3.src='7248-vaca-h.gif';
 }
    else if(result[0].label=="lion"){
        img.src='IMG_6139 2.JPG';
        img1.src='36352-lion-running.gif';
        img2.src='IMG_6138 2.JPG';
        img3.src='IMG_6140 2.JPG';
}
else {
    img.src='IMG_6138 2.JPG';
    img1.src='65014-dog-walking (1).gif';
    img2.src='IMG_6139 2.JPG';
    img3.src='IMG_6140 2.JPG';
}
}  
}
