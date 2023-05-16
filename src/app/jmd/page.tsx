
import { Button, ImagemCarrosel, ImagemCarrosel2, ImagemFundoKauai, ImagemFundoNoomi, ImagemFundoPricing, ImagemFundoTitle, ImagemNoomi, ImagemTitle, Kauai, PageHome, Pricing, TextCarrosel, TextCarrosel2, TextKauai, TextNoomi, TextPricing, TextTitle, } from "./styles";


export default async function Jmd() {

    const homes = await getData();
    console.log(homes, 'aquii');


    return (

        <>
            <PageHome>

                <ImagemFundoTitle src={homes.data.attributes.imagemfundotitle.data.attributes.url} />
                <ImagemTitle src={homes.data.attributes.imagemtitle.data.attributes.url} />


                <TextTitle>
                    <span>{homes.data.attributes.title}</span>
                    <h1>{homes.data.attributes.subtitle}</h1>
                    <h2>{homes.data.attributes.subtitlecolorNoomi}</h2>
                    <h3>{homes.data.attributes.description}</h3>
                    <Button>Saiba mais</Button>
                </TextTitle>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />


                <ImagemFundoNoomi src={homes.data.attributes.imagemFundoNoomi.data.attributes.url} />
                <ImagemNoomi src={homes.data.attributes.imagemNoomi.data.attributes.url} />

                <TextNoomi>
                    <span>{homes.data.attributes.titleNoomi}</span>
                    <h1>{homes.data.attributes.subtitleNoomi}</h1>
                    <h2>{homes.data.attributes.subtitlecolorNoomi}</h2>
                    <h3>{homes.data.attributes.descriptionNoomi}</h3>
                    <Button>Saiba mais</Button>
                </TextNoomi>

                <ImagemFundoKauai src={homes.data.attributes.fundo.data.attributes.url} />
                <Kauai src={homes.data.attributes.kauai.data.attributes.url} />
                <TextKauai>
                    <span>{homes.data.attributes.content.title}</span>
                    <h1>{homes.data.attributes.content.subtitle}</h1>
                    <h2>{homes.data.attributes.content.textcolor}</h2>
                    <h3>{homes.data.attributes.content.description}</h3>
                    <Button>Saiba mais</Button>
                </TextKauai>

                <ImagemFundoPricing src={homes.data.attributes.fundo.data.attributes.url} />
                <Pricing src={homes.data.attributes.pricing.data.attributes.url} />

                <TextPricing >

                    {homes.data.attributes.texto.map((home: any) => (
                        <div key={home.id}>
                            <span >{home.title}</span>
                            <h1>{home.subtitle}</h1>
                            <h2>{home.textcolor}</h2>
                            <h3>{home.description}</h3>
                            <Button>Saiba mais</Button>
                        </div>
                    ))}
                </TextPricing>

                <TextCarrosel>
                    {homes.data.attributes.carrocel.map((home: any) => (
                        <div key={home.id}>
                            {home.id === 1 && <span>{home.title}</span>}
                        </div>
                    ))}
                </TextCarrosel>
                <ImagemCarrosel>
                    {/* {homes.data.attributes.folderimagens.data[16]} */}
                    {homes.data.attributes.folderimagens.data
                        .filter((home: any) => home.id === 16 || home.id === 15)
                        .map((home: any) => (
                            <div key={home.id}>
                                <img src={home.attributes.url} alt={home.attributes.name} />
                            </div>
                        ))}
                </ImagemCarrosel>
                <TextCarrosel2>
                    {homes.data.attributes.carrocel.map((home: any) => (
                        <div key={home.id}>
                            {home.id === 2 && <span>{home.title}</span>}
                        </div>
                    ))}
                </TextCarrosel2>
                <ImagemCarrosel2>
                    {homes.data.attributes.folderimagens.data
                        .filter((home: any) => home.id === 17 || home.id === 18 || home.id === 19 || home.id === 20 || home.id === 21)
                        .map((home: any) => (
                            <div key={home.id}>
                                <img src={home.attributes.url} alt={home.attributes.name} />
                            </div>
                        ))}

                </ImagemCarrosel2>

            </PageHome>
        </>

    );

}

async function getData() {
    const res = await fetch('https://hamoa-tech-strapi.onrender.com/api/home?populate=*');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}