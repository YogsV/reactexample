import Card from './Card';
import one from '../assets/img/pic1.jpg';
import two from '../assets/img/pic2.jpg';
import three from '../assets/img/pic3.jpg';
import four from '../assets/img/pic4.jpg';

function Allcards(){
    return(
        <div className="text-align-center" style={{display:"inline-flex"}}>
            <Card img={one}/>
            <Card img={two}/>
            <Card img={three}/>
            <Card img={four}/>

        </div>
    )
}

export default Allcards;