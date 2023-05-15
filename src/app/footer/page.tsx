import { FooterNav, SocialMedia } from "./styles";

export default async function Footer() {
    const footers = await getData();
    console.log(footers, 'testee');




    return (
        
        <FooterNav>
            <div>
            <SocialMedia >

            <p>{footers.data.attributes.copyright}</p>
      

                <img  src={footers.data.attributes.logof.data.attributes.url}>    
                </img>
                
                </SocialMedia>

                </div>
        </FooterNav>

           

    );
}





async function getData() {
    const res = await fetch('http://localhost:1337/api/footer?populate=*');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}