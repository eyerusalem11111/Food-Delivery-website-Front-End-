import React from 'react';
import playStore from '../../assets/play_Store.png';
import appStore from '../../assets/app_Store.png';
const AppDownload = () => {
    return (
        <>
        <div className='app-download' id='app-download'>
           <p>For Better Experience  Download <br /> Tomato App</p>
           <div className="app-download-platforms">
            <img src={playStore} alt="PlayStore" />
            <img src={appStore} alt="AppStore" />

           </div>   
         </div>  
           </>       
    );
};

export default AppDownload;