import React from 'react';

export default function About() {
  
  const aboutStyle = {
    display: "flex",
    color: "black",
    fontFamily: 'helvetica'
  };

  return (
    <div className='pt-2 mt-2'>
      <h1>About Page</h1>
      <p>
        Nunc pharetra finibus est at efficitur. 
        Praesent sed congue diam. Integer gravida 
        dui mauris, ut interdum nunc egestas sed. 
        Aenean sed mollis diam. Nunc aliquet risus ac 
        finibus porta. Nam quis arcu non lectus tincidunt 
        fermentum. Suspendisse aliquet orci porta quam 
        semper imperdiet. Praesent euismod mi justo, 
        faucibus scelerisque risus cursus in. Sed rhoncus 
        mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}
