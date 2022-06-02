import React from 'react'
import TextContainer from './TextContainer'
import ImageContainer from './ImageContainer'

function ContainerBox(props) {
    return (
        <>
            <div className="row m-top">

                <ImageContainer image={props.image1} />
                <TextContainer heading="Help Beautify the Web" body="If you have a smart phone and like to ocassionaly take photos, why not help us make the web a more attractive place? Bloggers and website owners are always interested in images that support their content. You could help them out by taking the ocassional snapshot. Its simple, its easy, its fun. Take photos with your phone, ipad, ipod, whatever & upload them. Earn ranking amongst fellow mobile snapers ... have some fun. " />

                <ImageContainer image={props.image2} />
            </div>
            <div className="row m-top">

                <ImageContainer image={props.image3} />

                <TextContainer heading="Who is Snapmepix for" body="Snapmepix is designed for bloggers & website owners who are looking for free images (commons licence) & amateur photo snappers. It is not for professional photographers looking to earn money for their work. " />

                <ImageContainer image={props.image4} />
            </div>
            <div className="row m-top">

                <ImageContainer image={props.image5} />

                <TextContainer heading="Why Would I Take Photos for Free?" body="Because you enjoy taking photos and are not a professional looking to sell their work. Snapmepix is really only for people who just like to take photos on their mobile devices, and like the thought they are help others. " />


                <ImageContainer image={props.image6} />


            </div>
        </>
    )
}

export default ContainerBox