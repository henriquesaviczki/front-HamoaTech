import { FooterNav, SocialMedia } from "./styles";

export default function Footer({ footers }: any) {

    return (

        <FooterNav>
            <div>
                <SocialMedia >

                    <p>{footers.data.attributes.copyright}</p>
                    <img src={footers.data.attributes.logof.data.attributes.url} />

                </SocialMedia>

            </div>
        </FooterNav>



    );
}





