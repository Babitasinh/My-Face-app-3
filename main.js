Webcam.set({
    width:350,
    height:350,
    image_format: 'png',
    png_quality:90
});

  camera=document.getElementById("camera");

  Webcam.attach('#camera');

  function snapsot()
  {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
  }

  console.log("ml5.version:",ml5.version)
  Classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6WQF9VMTt/model.json',modelloaded);
  function modelloaded()
  {
    console.log("ranu");
  }

  function check()
  {
    img=document.getElementById("captured_image");
     Classifier.classify(img,got_result);                                                                                                           
  }

  function got_result(error,result)
  {
    if(error){
      console.log(error);
    }else{
      console.log(result);
      document.getElementById("object_name").innerHTML=result[0].label;
      document.getElementById("object_accuracy").innerHTML=result[0].confidence.toFixed(2);

    }


  }