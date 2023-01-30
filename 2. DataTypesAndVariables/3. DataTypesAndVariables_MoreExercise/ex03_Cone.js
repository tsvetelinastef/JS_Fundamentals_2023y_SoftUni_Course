function cone(radius, height){
    let volume = (Math.PI * Math.pow(radius, 2) * height) / 3;
    let lenght = Math.pow(radius, 2) + Math.pow(height, 2);
    let area = Math.PI * Math.pow(radius, 2) + Math.PI * radius * (Math.sqrt(lenght));  

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

cone(3, 5); // volume = 47.1239
            // area = 83.2298
cone(3.3, 7.8); // volume = 88.9511
                // area = 122.0159