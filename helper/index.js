function ketCholestrol (cholestrol){
    let keterangan = (cholestrol < 200)?'Normal':(cholestrol <  239)?'Borderline High':'High'
    return keterangan
}

function ketUric (uricAcid){
    let keterangan = (uricAcid < 3.4)?'Low':(uricAcid < 7)?'Normal':'High'
    return keterangan
}

function ketGlucose (bloodGlucose){
return keterangan = (bloodGlucose < 100)?'Normal':(bloodGlucose < 200)?'Impaired Glucose':'Diabetic'
}
    
module.exports = {ketCholestrol,ketUric,ketGlucose}