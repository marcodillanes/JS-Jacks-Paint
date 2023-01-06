function configureListeners() {
    // select img elements
    let images = document.getElementsByTagName('img');


     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)
        document.getElementById(images[i].id).addEventListener('mouseout',removeOpacity, false)

    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    if (!this.classList.contains('dim')){
        this.classList.add('dim')
    }
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
     if (this.classList.contains('dim')){
        this.classList.remove('dim');
     }

    let element = document.getElementById('color-price');
        element.textContent = '';

    let color = document.getElementById('color-name');
        element.textContent = '';

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            // set variables for price and color name and invoke a function to update the price     
            price = '$14.99'
            colorName = 'Lime Green'
            updatePrice(price, colorName,)
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price    
            price = '$11.14'
            colorName = 'Medium Brown'
            updatePrice(price, colorName,)
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price  
            price = '$22.99'
            colorName = 'Royal Blue'
            updatePrice(price, colorName,)
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price  
            price = '$4.99'
            colorName = 'Solid Black'
            updatePrice(price, colorName,)
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price       
            price = '$8.22'
            colorName = 'Solid Cyan'
            updatePrice(price, colorName,)
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price        
            price = '$11.99'
            colorName = 'Solid Purple'
            updatePrice(price, colorName,)
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price 
            price = '$13.42'
            colorName = 'Solid Red'
            updatePrice(price, colorName,)
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price   
            price = '$21.98'
            colorName = 'Solid White'
            updatePrice(price, colorName,)
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            price = '$14.99'
            colorName = 'Solid Yellow'
            updatePrice(price, colorName,)
            break;   
          default:              
    }

    function updatePrice(price, colorName,)
    {       
        let colorPrice = document.getElementById('color-price'); // select element with corresponding id
        
        // display price
        colorPrice.textContent = price;
        
        let color = document.getElementById('color-name'); // select element with corresponding id
        
        //display color name
        color.textContent = colorName;
    }
    
}
