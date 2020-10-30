import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Layout from "../components/Layout";

const tenpp = [
  "We want freedom. For us, this means an end to anti-Black oppression in the form of state and police violence, as well as systematic economic inequality.  This also means that we want an end to the oppression of Black women, queer, trans, and non-Binary Black people within and from outside our communities. We want an end to the conditions of sexual and gender violence in our communities. Our organizing and educational spaces will be safe and center the multiple experiences and knowledges/wisdom of women, queer, trans, and non-Binary Black people. We will speak to and about one another with care and respect.",
  "We are an all Black space. The Deep Roots collective, while grateful for any of our accomplices and reverent of our shared history with other marginalized and indigenous people, centers the lived experience and voices of Black people. We are a space for anyone who self-identifies with the political and social plight of peoples who are from or dispersed from the African continent and into the diaspora under conditions of colonialism, forced movement and labor and the enduring violence of anti-Black and white supremacist systems.  --Not a white or POC space, All Black Space-- Black defined (political identity, Black ancestry)",
  "We believe in food sovereignty. In the city of Philadelphia, under conditions of forced movement, gentrification, and urban renewal most Black people are living in conditions of food apartheid. We have little to no access to healthy, nourishing foods in our immediate communities. The Deep Roots collective seeks to resolve this issue by teaching and learning agricultural skills at local neighborhood farms and eventually taking ownership of vacant plots of land throughout the city to grow food with the intention of feeding the community at low or no cost, while also teaching members of our community how to grow and care for food, use plant  healing and acquire land as an act of sovereignty.",
  "We will abolish the police and the carceral state. By this we mean prisons, policing, detention centers, and other forms of surveillance, dislocation, confinement and social isolation that affect our communities at the hands of the state. We stand with local Black organizers of the Philly Black Radical Collective’s demands for an immediate end to the criminalization of race, poverty, mental illness, ability, and immigration status through the multiple carceral systems that target Black Philadelphians. We demand the dismissal of warrants, cash bail, and the end to probation and parole systems that target our community members for prison retraumatization rather than provide support for the individual and communal restoration. We demand the decriminalization of sex work.",
  "We will build the tools for communal and self-sufficiency. For us this means that freedom is about the capacity to care for and create resources and tools that we need to survive and thrive within our communities. We will work to educate ourselves and our communities toward divestment from all racist and capitalist systems of exploitation. This autonomy will be achieved through our farming, land ownership, and community education that centers Black history, culture, healing and creativity, building infrastructure for land access and ownership, political education that centers Black history, healing systems, culture, arts and healing.",
  "We prioritize revolution over reform. We do not believe in tinkering with or trying to improve the existing racist, capitalist and violent social order and systems of governance as. We want to revolt against the current system while also bringing about a new one through sustainable practices.",
  "We will offer community political education. Political education is a crucial step in the ongoing struggle for Black liberation. We will offer free Black community education courses geared toward the larger thematic of dismantling capitalism, racism and patriarchy. Instead of teaching people what to think, we will teach them how to think critically about the history of anti-Blackness and to implement action toward the future of Black freedom. Our courses will be tailored to supporting Black freedom struggle through courses in Black studies, history, wellness, gender/queer studies, creative arts and self-defense.",
  "We have the right to defend our communities and ourselves. Self-preservation and survival is our birthright. It is the bare minimum for Black people to able to live without fear of early death. We will protect ourselves and our communities by first teaching and learning the tools and techniques for self defense. Then we will acting accordingly and use that knowledge in defense of ourselves and other Black people. We know that building structures for protection into our communities is central to the larger project of abolishing police.",
  "We want livable neighborhoods. We understand that Black communities around Philadelphia have been neglected by the local government. Our neighborhoods are under-resourced and undervalued, often, except for when housing and corporate redevelopment are concerned. We will use our spaces for education and programming to build community investment in the longevity of Black neighborhoods as places where we will invest our dollars, protect one another and keep our streets clean and safe.",
  "We want to be well throughout the long life of this struggle. We know that Black freedom struggle is life long work. We are in it for the long haul and along the way we are committed to teaching and learning the skills to preserve our mental, emotional and spiritual health. Living under the constant conditions of racism and capitalism is to be in a state of crisis. We are striving to manage and heal from the inter generational stress and trauma of racism, and center emotional and spiritual wellness in how we relate to and support one another.",
];

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  aboutus,
  missionstatement,
  tenpointplanheader,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        // backgroundImage: `url(${
        //   !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        // })`,
        // backgroundPosition: `top left`,
        // backgroundAttachment: `fixed`,
        backgroundColor: "#FAF4F0",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column",
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow: "#DDEAEA 0.5rem 0px 0px, #DDEAEA -0.5rem 0px 0px",
            backgroundColor: "#DDEAEA",
            lineHeight: "1",
            padding: "0.25em",
            fontFamily: "'DM Serif Display', serif",
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow: "#DDEAEA 0.5rem 0px 0px, #DDEAEA -0.5rem 0px 0px",
            backgroundColor: "#DDEAEA",
            lineHeight: "1",
            padding: "0.25em",
            textAlign: "center",
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{missionstatement.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{missionstatement.description}</h3>
                  </div>
                </div>
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{aboutus.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{aboutus.description}</h3>
                  </div>
                </div>
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{tenpointplanheader.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">
                      {tenpointplanheader.description}
                    </h3>
                  </div>
                </div>

                <div className="content">
                  {tenpp.map((point) => {
                    return (
                      <div style={{ marginBottom: "1rem" }}>
                        <div>{point}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  aboutus: PropTypes.object,
  missionstatement: PropTypes.object,
  tenpointplanheader: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        aboutus={frontmatter.aboutus}
        missionstatement={frontmatter.missionstatement}
        tenpointplanheader={frontmatter.tenpointplanheader}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subheading

        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        heading

        missionstatement {
          title
          description
        }

        aboutus {
          title
          description
        }
        tenpointplanheader {
          title
          description
        }
      }
    }
  }
`;
