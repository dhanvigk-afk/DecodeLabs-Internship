let model;


// Load CSV file
Papa.parse("heart.csv", {
    download: true,
    header: true,

    complete: function(result) {

        console.log("Dataset Loaded");
        
        let data = result.data;

        trainModel(data);
    }
});



// Train AI model
async function trainModel(data) {


    let inputs = [];
    let outputs = [];


    data.forEach(row => {

        if(row.age) {

            inputs.push([
                Number(row.age),
                Number(row.anaemia),
                Number(row.creatinine_phosphokinase),
                Number(row.diabetes),
                Number(row.ejection_fraction),
                Number(row.high_blood_pressure),
                Number(row.platelets),
                Number(row.serum_creatinine),
                Number(row.serum_sodium),
                Number(row.sex),
                Number(row.smoking),
                Number(row.time)
            ]);


            outputs.push([
                Number(row.DEATH_EVENT)
            ]);
        }

    });



    let xs = tf.tensor2d(inputs);
    let ys = tf.tensor2d(outputs);



    model = tf.sequential();


    model.add(tf.layers.dense({
        inputShape:[12],
        units:32,
        activation:"relu"
    }));


    model.add(tf.layers.dense({
        units:16,
        activation:"relu"
    }));


    model.add(tf.layers.dense({
        units:1,
        activation:"sigmoid"
    }));


    model.compile({

        optimizer:"adam",
        loss:"binaryCrossentropy",
        metrics:["accuracy"]

    });



    console.log("Training Started...");


    await model.fit(xs, ys, {

        epochs:50,

        shuffle:true

    });


    console.log("Training Completed ✅");

}



// Prediction function
async function predict(){

    alert("Model is trained. Prediction can be added next.");

}