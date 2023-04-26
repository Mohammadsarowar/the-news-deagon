
import QZone1 from '../../assets/qZone1.png'
import QZone2 from '../../assets/qZone2.png'
import QZone3 from '../../assets/qZone3.png'
const QZone= () => {
    return (
        <div className='border mt-3 bg-secondary'>
           <h4 className='m-2'>Q-Zone</h4> 
           <div className='text-center m-2'>
            <img src={QZone1}/>
            <img src={QZone2}/>
            <img src={QZone3}/>
            
           </div>
        </div>
    );
};

export default QZone;