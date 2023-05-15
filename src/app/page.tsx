import { Conteudo, Conteudo2, Description, Imagem, Imagem2, Imagem21, Imagem3, Imagem31, PageHome, Title, TitleCarrosel, TitleSmall } from "./styles";


export default async function Home() {

  const pages = await getData();



  return (

    <>
      <PageHome>
        <br />
        <br />
        <div >
          <Title>
            {pages.data?.attributes.hero.heading}
          </Title>
          <TitleSmall>
            {pages.data?.attributes.hero.subtitle}
          </TitleSmall>

        </div>

        <div >
          <br />
          <Description >
            <span>{pages.data?.attributes.hero.description}</span>
            <Imagem src={pages.data?.attributes.photods.data.attributes.url} />
            {/* <div className={styles.line2} style={{ top: "375px", left: "-80px", transform: "rotate(90deg)" }}></div>
            <div className={styles.line2} style={{ top: "375px", left: "240px", transform: "rotate(90deg)" }}></div>
            <div className={styles.line2} style={{ top: "375px", left: "540px", transform: "rotate(90deg)" }}></div>
            <div  style={{ top: "65px" }}></div>
            <div className={styles.line} style={{ top: "218px" }}></div>
            <div className={styles.line} style={{ top: "371px" }}></div>
            <div className={styles.line} style={{ top: "529px" }}></div>
            <div className={styles.line} style={{ top: "687px" }}></div> */}
            <br />
            <br />
            <br />
          </Description>
        </div>
        <br />
        <br />
        <br />
        <Conteudo>
          <span >{pages.data?.attributes.hero.conteudo}</span>
          <span >{pages.data?.attributes.hero.conteudocolor}</span>
          <span >{pages.data?.attributes.hero.conteudo2}</span>
        </Conteudo>
        <br />
        <br />
        <Conteudo2>
          <span >{pages.data?.attributes.conteudo3}</span>
          <span>{pages.data?.attributes.conteudo3color}</span>
          <span>{pages.data?.attributes.conteudo31color}</span>

          <br />
          <br />
          <span >{pages.data?.attributes.conteudo3nocolor}</span>
        </Conteudo2>
        <Imagem2 src={pages.data?.attributes.photose.data[0].attributes.url} />
        <Imagem21 src={ pages.data?.attributes.photose.data[1].attributes.url} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <TitleCarrosel>
          <span>{pages.data?.attributes.hero.titleCarrosel}</span>

        </TitleCarrosel>
        <br />
        <br />
        <br />
        <Imagem3 src={pages.data?.attributes.photoCa.data[0].attributes.url} />

        <Imagem31 src={ pages.data?.attributes.photoCa.data[1].attributes.url} />

      </PageHome>

    </>

  );

}

async function getData() {
  const res = await fetch('http://localhost:1337/api/page?populate=*');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}